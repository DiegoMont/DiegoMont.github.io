import { Alert, Box, Button, Container, Heading, List, Stack, Text, VStack } from "@chakra-ui/react"
import { Link, useParams } from "react-router"
import recipes from "../data/recipes"

const RecipePage = () => {
    const { filename } = useParams()
    const recipe = recipes.find((candidate) => candidate.filename === filename)

    if (!recipe) {
        return (
            <Container maxW="breakpoint-lg" py={{ base: "8", md: "12" }}>
                <Alert.Root status="error">
                    <Alert.Indicator />
                    <Alert.Content>
                        <Alert.Title>Recipe not found</Alert.Title>
                        <Alert.Description>The requested recipe does not exist.</Alert.Description>
                        <Button asChild mt="4" alignSelf="flex-start" variant="outline">
                            <Link to="/recetas">Return to recipes</Link>
                        </Button>
                    </Alert.Content>
                </Alert.Root>
            </Container>
        )
    }

    return (
        <VStack gap="0" align="stretch">
            <Box bg="blue.subtle" py={{ base: "6", md: "10" }} px="4">
                <Container maxW="breakpoint-lg">
                    <Heading as="h1" fontFamily="serif" fontWeight="medium" size={{ base: "3xl", md: "5xl" }} textAlign="center" color="blue.contrast">
                        {recipe.title}
                    </Heading>
                </Container>
            </Box>
            <Container maxW="breakpoint-lg" py={{ base: "8", md: "12" }}>
                <VStack align="stretch" gap="8">
                    <RecipeList title="Ingredients" items={recipe.ingredients} ordered={false}/>
                    <RecipeList title="Steps" items={recipe.steps} ordered />
                    {recipe.notes.length > 0 ? <RecipeNotes items={recipe.notes} /> : null}
                </VStack>
            </Container>
            <Box h="50vh" />
        </VStack>
    )
}

const RecipeSectionHeading = ({ children }: { children: React.ReactNode }) => (
    <Heading as="h2" size="2xl" color="blue.fg">{children}</Heading>
)

const RecipeList = ({ title, items, ordered }: { title: string; items: string[]; ordered: boolean }) => {
    const listType = ordered ? "ol" : "ul"

    return (
        <Stack gap="3">
            <RecipeSectionHeading>{title}</RecipeSectionHeading>
            <List.Root as={listType} gap="2" ps="6">
                {items.map((item, index) => <List.Item maxW="60ch" key={`${item}-${index}`}>{item}</List.Item>)}
            </List.Root>
        </Stack>
    )
}

const RecipeNotes = ({ items }: { items: string[] }) => (
    <Stack gap="3">
        <RecipeSectionHeading>Notes</RecipeSectionHeading>
        {items.map((item, index) => <Text maxW="60ch" key={`${item}-${index}`}>{item}</Text>)}
    </Stack>
)

export default RecipePage
