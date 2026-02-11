import { Box, Button, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import SectionTitle from './components/SectionTitle'

const App = () => {

    return (
        <Container maxWidth="breakpoint-lg">
            <Heading as="h1" fontFamily="serif" pt="12" fontWeight="400" textAlign="center" size="3xl" color="purple.contrast">Dance of the Sugar Plum Fairy</Heading>
            <SectionTitle text="Partituras"/>
            <Flex gap="0.5">
                <Box color="purple.solid" backgroundColor="gray.800" width="1/3" py="2" px="4" textStyle="xl">Ensamble</Box>
                <Box color="purple.solid" backgroundColor="gray.800" width="1/3" py="2" px="4" textStyle="xl">Piano 1</Box>
                <Box color="purple.solid" backgroundColor="gray.800" width="1/3" py="2" px="4" textStyle="xl">Piano 2</Box>
            </Flex>
            <Box py="8"><audio controls style={{width: '100%'}}/></Box>
            <SectionTitle text="Ensamble"/>
            <SimpleGrid columns={5} gap="1">
                {["60", "84", "96", "108", "120"].map(vel => <Button color="purple.contrast" backgroundColor="purple.solid" textStyle="lg" fontWeight="300" borderRadius="xl" key={vel}>{`${vel} ppm`}</Button>)}
            </SimpleGrid>
            <SectionTitle text="Piano 1"/>
            <SectionTitle text="Piano 2"/>
        </Container>
  )
}

export default App
