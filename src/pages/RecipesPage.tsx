import { Box, Container, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router"
import recipes from "../data/recipes"

const RecipesPage = () => {
    return (
        <VStack gap="0" align="stretch">
            <Box bg="blue.subtle" py={{ base: "6", md: "10" }} px="4">
                <Container maxW="breakpoint-lg">
                    <Heading as="h1" fontWeight="light" size={{ base: "3xl", md: "5xl" }} color="blue.contrast">
                        Recetas
                    </Heading>
                </Container>
            </Box>

            <Container maxW="breakpoint-lg" py={{ base: "8", md: "12" }}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
                    {recipes.map((recipe) => (
                            <Link
                                asChild
                                key={recipe.filename}
                            borderWidth="3px"
                            borderRadius="md"
                            borderColor="blue.muted"
                            px="5"
                            py="4"
                            _hover={{ bg: "blue.muted", textDecoration: "none" }}
                        >
                                <RouterLink to={`/recetas/${recipe.filename}`}>
                                    <Text fontSize="xl" color="purple.contrast">{recipe.title}</Text>
                            </RouterLink>
                        </Link>
                    ))}
                </SimpleGrid>
            </Container>
        </VStack>
    )
}

export default RecipesPage
