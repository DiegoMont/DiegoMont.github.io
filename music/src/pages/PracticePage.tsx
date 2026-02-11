import { Box, Button, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import SectionTitle from '../components/SectionTitle'
import type Song from '../models/Song'
import { useState } from 'react'
import type { MouseEvent } from 'react'

const ASSETS_BASE_URL = "https://objectstorage.mx-queretaro-1.oraclecloud.com/p/GW-e4mhCtfDIEa3tUbAsZqkp6-O1hM12n662wElSNEQ4a1PXT-W-uQ1w56R-_67S/n/axwp3hbp4bpp/b/diegomont-assets/o/music"

const PracticePage = ({song}: {song: Song}) => {
    const getAudioURL = (audioFile: string) => {
        return `${ASSETS_BASE_URL}${song.cloudDir}${audioFile}`;
    }

    const [audioSrc, setAudioSrc] = useState(getAudioURL(song.recordings[0].speeds[song.recordings[0].speeds.length-1].audio))

    const changeAudioSpeed = (e: MouseEvent<HTMLButtonElement>) => {
        const url = (e.target as HTMLButtonElement).value;
        setAudioSrc(url);
    }

    return (
        <Container maxWidth="breakpoint-lg">
            <Heading as="h1" fontFamily="serif" pt="12" fontWeight="400" textAlign="center" size="3xl" color="purple.contrast">{song.title}</Heading>
            <SectionTitle text="Partituras"/>
            <Flex gap="0.5">
                {song.recordings.map(recording => <Box as="a" target="_blank" href={`${ASSETS_BASE_URL}${song.cloudDir}${recording.score}`} color="purple.solid" backgroundColor="gray.800" width="1/3" py="2" px="4" textStyle="xl" key={recording.name}>{recording.name}</Box> )}
            </Flex>
            <Box py="8"><audio controls src={audioSrc} style={{width: '100%'}}/></Box>

            { song.recordings.map(recording => (
                <div key={recording.name}>
                    <SectionTitle text={recording.name}/>
                    <SimpleGrid columns={5} gap="1">
                        {recording.speeds.map(speed => <Button value={getAudioURL(speed.audio)} onClick={changeAudioSpeed} color="purple.contrast" backgroundColor="purple.solid" lineHeight="1" textStyle="lg" fontWeight="300" borderRadius="xl" py="1" key={speed.name}>{speed.name}</Button> )}
            </SimpleGrid>
                </div>
            )) }
        </Container>
    )
}

export default PracticePage
