import { Alert, Button, Checkbox, Container, Field, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"

const PasswordPage = () => {
    const [stringCount, setStringCount] = useState(5)
    const [stringLength, setStringLength] = useState(12)
    const [includeNumbers, setIncludeNumbers] = useState(true)
    const [includeUppercase, setIncludeUppercase] = useState(true)
    const [includeLowercase, setIncludeLowercase] = useState(true)
    const [includeSpecialCharacter, setIncludeSpecialCharacter] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [passwords, setPasswords] = useState<string[]>([])

    const handleSubmit = ({}) => {
        const NUMERIC_DIGITS = "23456789"
        const UPPERCASE_LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ"
        const LOWERCASE_LETTERS = "abcdefghijkmnopqrstuvwxyz"
        const SPECIAL_CHARACTERS = "!@#$%+&*"

        let characterPool = ""

        if (includeNumbers) {
            characterPool += NUMERIC_DIGITS
        }
        if (includeUppercase) {
            characterPool += UPPERCASE_LETTERS
        }
        if (includeLowercase) {
            characterPool += LOWERCASE_LETTERS
        }
        if (characterPool.length === 0) {
            setErrorMessage("Select at least one base character group: numbers, uppercase, or lowercase.")
            return
        }
        if (!Number.isInteger(stringCount) || stringCount < 1 || stringCount > 50) {
            setErrorMessage("Number of strings must be between 1 and 50.")
            return
        }
        if (!Number.isInteger(stringLength) || stringLength < 4 || stringLength > 128) {
            setErrorMessage("Length of each string must be between 4 and 128.")
            return
        }

        setErrorMessage("")

        const generatedPasswords = Array.from({ length: stringCount }, () => {
            let password = ""
            for (let i = 0; i < stringLength; i += 1) {
                password += getRandomChar(characterPool)
            }
            if (includeSpecialCharacter) {
                const replaceIndex = Math.floor(Math.random() * password.length)
                const passwordChars = password.split("")
                passwordChars[replaceIndex] = getRandomChar(SPECIAL_CHARACTERS)
                password = passwordChars.join("")
            }
            return password
        })

        setPasswords(generatedPasswords)
    }

    const getRandomChar = (source: string) => {
        const randomIndex = Math.floor(Math.random() * source.length)
        return source[randomIndex]
    }

    return (
        <Container maxW="2xl" py={{ base: "8", md: "12" }} color="whiteAlpha.900">
            <VStack align="stretch" gap="6">
                <Heading as="h1" size={{ base: "xl", md: "2xl" }} textAlign="center">
                    Password Generator
                </Heading>

                <form action={handleSubmit}>
                    <Stack gap="4">
                        <Field.Root>
                            <Field.Label>Number of strings</Field.Label>
                            <Input
                                type="number"
                                value={stringCount}
                                min={1}
                                max={50}
                                color="whiteAlpha.900"
                                onChange={(event) => setStringCount(Number(event.target.value))}
                            />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Length of each string</Field.Label>
                            <Input
                                type="number"
                                value={stringLength}
                                min={4}
                                max={128}
                                color="whiteAlpha.900"
                                onChange={(event) => setStringLength(Number(event.target.value))}
                            />
                        </Field.Root>

                        <Checkbox.Root checked={includeNumbers} onCheckedChange={(details) => setIncludeNumbers(details.checked === true)}>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Include numbers</Checkbox.Label>
                        </Checkbox.Root>

                        <Checkbox.Root checked={includeUppercase} onCheckedChange={(details) => setIncludeUppercase(details.checked === true)}>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Include uppercase letters</Checkbox.Label>
                        </Checkbox.Root>

                        <Checkbox.Root checked={includeLowercase} onCheckedChange={(details) => setIncludeLowercase(details.checked === true)}>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Include lowercase letters</Checkbox.Label>
                        </Checkbox.Root>

                        <Checkbox.Root checked={includeSpecialCharacter} onCheckedChange={(details) => setIncludeSpecialCharacter(details.checked === true)}>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Include one special character</Checkbox.Label>
                        </Checkbox.Root>

                        <Button type="submit" alignSelf="center" colorPalette="teal">
                            Generate
                        </Button>
                    </Stack>
                </form>

                {errorMessage ? (
                    <Alert.Root status="error">
                        <Alert.Indicator />
                        <Alert.Content>
                            <Alert.Title>Validation error</Alert.Title>
                            <Alert.Description>{errorMessage}</Alert.Description>
                        </Alert.Content>
                    </Alert.Root>
                ) : null}

                <VStack align="stretch" gap="2">
                    {passwords.map((password, index) => (
                        <Text key={`${password}-${index}`} fontFamily="mono">{password}</Text>
                    ))}
                </VStack>
            </VStack>
        </Container>
    )
}

export default PasswordPage
