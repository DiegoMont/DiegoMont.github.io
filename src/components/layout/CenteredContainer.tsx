import { Container } from "@chakra-ui/react"
import type { ContainerProps } from "@chakra-ui/react"

function CenteredContainer({ children, ...props }: ContainerProps) {
    return <Container maxW="breakpoint-xl" p="0" mx="auto" {...props}>{children}</Container>
}

export default CenteredContainer
