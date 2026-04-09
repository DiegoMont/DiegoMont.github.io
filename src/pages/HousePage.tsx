import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const HousePage = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const map = new maplibregl.Map({
            container: containerRef.current,
            style: 'https://tiles.openfreemap.org/styles/liberty',
            center: [-99.19675651574234, 19.431733465983427],
            zoom: 12,
        })

        return () => {
            map.remove()
        }
    }, [])

    return (
        <Box>
            <Box ref={containerRef} width="100vw" height="100vh"/>
        </Box>
    )
}

export default HousePage
