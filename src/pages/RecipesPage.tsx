import { Container, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router"
import { getRecipeFilenames, getRecipeTitle } from "../data/recipes"

const recipePath = (filename: string) => filename.replace(/\.md$/, "")
const recipeFilenames = getRecipeFilenames()

const RecipesPage = () => {
    return (
        <Container maxW="breakpoint-lg" py={{ base: "8", md: "12" }}>
            <Heading as="h1" fontFamily="serif" fontWeight="400" size={{ base: "2xl", md: "3xl" }} color="purple.contrast">
                Recetas
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
                {recipeFilenames.map((filename) => (
                    <Link
                        asChild
                        key={filename}
                        borderWidth="1px"
                        borderRadius="md"
                        borderColor="whiteAlpha.300"
                        px="5"
                        py="4"
                        _hover={{ borderColor: "purple.solid", textDecoration: "none" }}
                    >
                        <RouterLink to={`/recetas/${recipePath(filename)}`}>
                            <Text fontSize="xl" color="purple.contrast">{getRecipeTitle(filename)}</Text>
                        </RouterLink>
                    </Link>
                ))}
            </SimpleGrid>
        </Container>
    )
}

export default RecipesPage
