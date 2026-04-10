import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import transportData from '../data/transport_stations.json'

const SOURCE_ID = 'transport-stations'
const MB_ICON_ID = 'transport-marker-mb'
const METRO_ICON_ID = 'transport-marker-metro'
const MB_LAYER_ID = 'transport-stations-mb'
const METRO_LAYER_ID = 'transport-stations-metro'
const LABEL_LAYER_ID = 'transport-stations-labels'

const HousePage = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const createMarkerImage = (shape: 'circle' | 'square', size: number) => {
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size

        const context = canvas.getContext('2d')
        if (context === null) return null

        context.clearRect(0, 0, size, size)
        context.fillStyle = '#FFFFFF'

        if (shape === 'circle') {
            const radius = size / 4
            context.beginPath()
            context.arc(size / 2, size / 2, radius, 0, Math.PI * 2)
            context.fill()
        } else {
            const offset = size / 4
            const side = size / 2
            context.fillRect(offset, offset, side, side)
        }

        return context.getImageData(0, 0, size, size)
    }

    useEffect(() => {
        if (!containerRef.current) return

        const map = new maplibregl.Map({
            container: containerRef.current,
            style: 'https://tiles.openfreemap.org/styles/liberty',
            center: [-99.19675651574234, 19.431733465983427],
            zoom: 12,
        })

        map.on('load', () => {
            const mbImage = createMarkerImage('circle', 20)
            const metroImage = createMarkerImage('square', 20)

            if (mbImage && !map.hasImage(MB_ICON_ID)) {
                map.addImage(MB_ICON_ID, mbImage, { sdf: true })
            }

            if (metroImage && !map.hasImage(METRO_ICON_ID)) {
                map.addImage(METRO_ICON_ID, metroImage, { sdf: true })
            }

            map.addSource(SOURCE_ID, {
                type: 'geojson',
                data: transportData as GeoJSON.FeatureCollection,
            })

            map.addLayer({
                id: MB_LAYER_ID,
                type: 'symbol',
                source: SOURCE_ID,
                filter: ['==', ['get', 'agency_id'], 'MB'],
                layout: {
                    'icon-image': MB_ICON_ID,
                    'icon-allow-overlap': true,
                    'icon-ignore-placement': true,
                },
                paint: {
                    'icon-color': ['concat', '#', ['coalesce', ['get', 'route_color'], '5B5B5B']],
                },
            })

            map.addLayer({
                id: METRO_LAYER_ID,
                type: 'symbol',
                source: SOURCE_ID,
                filter: ['==', ['get', 'agency_id'], 'METRO'],
                layout: {
                    'icon-image': METRO_ICON_ID,
                    'icon-allow-overlap': true,
                    'icon-ignore-placement': true,
                },
                paint: {
                    'icon-color': ['concat', '#', ['coalesce', ['get', 'route_color'], '5B5B5B']],
                },
            })

            map.addLayer({
                id: LABEL_LAYER_ID,
                type: 'symbol',
                source: SOURCE_ID,
                layout: {
                    'text-field': ['get', 'stop_name'],
                    'text-size': 10,
                    'text-anchor': 'bottom',
                    'text-offset': [0, -0.6],
                    'text-allow-overlap': true,
                    'text-ignore-placement': true,
                },
                paint: {
                    'text-color': '#111827',
                    'text-halo-color': '#FFFFFF',
                    'text-halo-width': 1,
                    'text-opacity': ['interpolate', ['linear'], ['zoom'], 13, 0, 14, 1],
                },
            })
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
