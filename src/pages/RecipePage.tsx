import { Alert, Container, Heading, List, Stack, Text, VStack } from "@chakra-ui/react"
import { useParams } from "react-router"
import { getRecipeContent, getRecipeFilenames, getRecipeTitle } from "../data/recipes"

type RecipeSection = "ingredients" | "steps" | "notes"

type ParsedRecipe = {
    ingredients: string[]
    steps: string[]
    notes: string[]
}

const sectionNames: Record<string, RecipeSection> = {
    ingredients: "ingredients",
    ingredientes: "ingredients",
    steps: "steps",
    instrucciones: "steps",
    notes: "notes",
    notas: "notes",
}

const parseRecipe = (markdown: string): ParsedRecipe => {
    const parsed: ParsedRecipe = { ingredients: [], steps: [], notes: [] }
    let currentSection: RecipeSection | null = null

    markdown.split(/\r?\n/).forEach((line) => {
        const heading = line.match(/^##\s+(.+)$/)
        if (heading) {
            currentSection = sectionNames[heading[1].trim().toLowerCase()] ?? null
            return
        }

        if (!currentSection || !line.trim()) return

        const item = line.match(/^\s*(?:[-*]|\d+\.)\s+(.+)$/)
        parsed[currentSection].push(item ? item[1].trim() : line.trim())
    })

    return parsed
}

const findRecipeFilename = (filename: string | undefined) => {
    if (!filename) return undefined
    return getRecipeFilenames().find((recipeFilename) => recipeFilename.replace(/\.md$/, "") === filename)
}

const RecipePage = () => {
    const { filename } = useParams()
    const recipeFilename = findRecipeFilename(filename)
    const markdown = recipeFilename ? getRecipeContent(recipeFilename) : undefined

    if (!recipeFilename || !markdown) {
        return (
            <Container maxW="breakpoint-lg" py={{ base: "8", md: "12" }}>
                <Alert.Root status="error">
                    <Alert.Indicator />
                    <Alert.Content>
                        <Alert.Title>Recipe not found</Alert.Title>
                        <Alert.Description>The requested recipe does not exist.</Alert.Description>
                    </Alert.Content>
                </Alert.Root>
            </Container>
        )
    }

    const parsedRecipe = parseRecipe(markdown)

    return (
        <Container maxW="breakpoint-lg" py={{ base: "8", md: "12" }}>
            <VStack align="stretch" gap="8">
                <Heading as="h1" fontFamily="serif" fontWeight="400" size={{ base: "2xl", md: "3xl" }} color="purple.contrast">
                    {getRecipeTitle(recipeFilename!)}
                </Heading>

                <RecipeList title="Ingredients" items={parsedRecipe.ingredients} />
                <RecipeList title="Steps" items={parsedRecipe.steps} ordered />
                {parsedRecipe.notes.length > 0 ? <RecipeNotes items={parsedRecipe.notes} /> : null}
            </VStack>
        </Container>
    )
}

const RecipeList = ({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) => {
    const listType = ordered ? "ol" : "ul"

    return (
        <Stack gap="3">
            <Heading as="h2" size="lg" color="purple.contrast">{title}</Heading>
            <List.Root as={listType} gap="2" ps="6">
                {items.map((item, index) => <List.Item key={`${item}-${index}`}>{item}</List.Item>)}
            </List.Root>
        </Stack>
    )
}

const RecipeNotes = ({ items }: { items: string[] }) => (
    <Stack gap="3">
        <Heading as="h2" size="lg" color="purple.contrast">Notes</Heading>
        {items.map((item, index) => <Text key={`${item}-${index}`}>{item}</Text>)}
    </Stack>
)

export default RecipePage
