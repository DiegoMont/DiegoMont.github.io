import { Heading } from "@chakra-ui/react"

const SectionTitle = ({text}: {text: string}) => {
    return (
        <Heading as="h2" color="purple.contrast" size={{base: "lg", md: "xl"}} fontWeight={300} borderTopWidth="1px" borderTopColor="gray.800" mt="6" mb="2" pt="2">{text}</Heading>
    )
}

export default SectionTitle
