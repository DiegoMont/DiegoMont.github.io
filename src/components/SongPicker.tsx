import { Box, Button, CloseButton, Drawer, Flex, Portal, Text, VStack } from "@chakra-ui/react"

import songs from "../data"
import { Link } from "react-router"

const SongPicker = () => {
    return (
        <Flex as="nav" borderBottomWidth="1px" borderBottomColor="purple.border" justify="flex-end">
            <Drawer.Root size="xs">
                <Drawer.Backdrop />
                <Drawer.Trigger asChild>
                    <Button colorPalette="purple" my="2">Elegir pieza</Button>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content>
                            <Drawer.Header>
                                <Drawer.Title>Piezas</Drawer.Title>
                            </Drawer.Header>
                            <Drawer.Body>
                                <VStack>
                                    {songs.map(song => (
                                        <Box key={song.urlPath} width="100%" borderBottomWidth="1px" borderBottomColor="purple.solid" marginBottom="3">
                                            <Link to={`/music/${song.urlPath}`} >
                                                <Text fontWeight="medium" textStyle="md" color="purple.solid">{song.title}</Text>
                                            </Link>
                                        </Box>
                                    ))}
                                </VStack>
                            </Drawer.Body>
                            <Drawer.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </Flex>
    )
}

export default SongPicker
