import { useEffect, useRef, useState } from 'react'
import { Box, Image, Link, Text, VStack } from '@chakra-ui/react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import transportData from '../data/transport_stations.json'
import type Estate from '../models/Estate'
import { fetchEstates } from '../services/EstateService'

const SOURCE_ID = 'transport-stations'
const MB_ICON_ID = 'transport-marker-mb'
const METRO_ICON_ID = 'transport-marker-metro'
const MB_LAYER_ID = 'transport-stations-mb'
const METRO_LAYER_ID = 'transport-stations-metro'
const LABEL_LAYER_ID = 'transport-stations-labels'
type SelectedEstate = {
    id: number
    name: string
    price: number
    area: number
    image: string
    url: string | null
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 0,
    }).format(value)
}

const formatArea = (value: number) => {
    return `${new Intl.NumberFormat('es-MX').format(value)}`
}

const statusColor: Record<string, string> = {
    pending: '#3B82F6',
    yes: '#22C55E',
    no: '#EF4444',
    maybe: '#EAB308',
}

const HousePage = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const mapRef = useRef<maplibregl.Map | null>(null)
    const estatesRef = useRef<Estate[]>([])
    const markersRef = useRef<maplibregl.Marker[]>([])
    const [estates, setEstates] = useState<Estate[]>([])
    const [selectedEstate, setSelectedEstate] = useState<SelectedEstate | null>(null)
    const [imageLoadError, setImageLoadError] = useState(false)

    useEffect(() => {
        estatesRef.current = estates
    }, [estates])

    useEffect(() => {
        setImageLoadError(false)
    }, [selectedEstate?.id])

    useEffect(() => {
        const endpoint = import.meta.env.VITE_ESTATE_API_URL
        fetchEstates(endpoint).then((parsedEstates: Estate[]) => {
            setEstates(parsedEstates)
        })
    }, [])

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
        mapRef.current = map

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

            estatesRef.current.forEach((estate) => {
                const marker = new maplibregl.Marker({ color: statusColor[estate.status] })
                    .setLngLat([estate.longitude, estate.latitude])
                    .addTo(map)

                marker.getElement().style.cursor = 'pointer'
                marker.getElement().addEventListener('click', (e) => {
                    e.stopPropagation()
                    setSelectedEstate({
                        id: estate.id,
                        name: estate.name,
                        price: estate.price,
                        area: estate.area,
                        image: estate.images[0] ?? '',
                        url: estate.url,
                    })
                })

                markersRef.current.push(marker)
            })
        })

        const handleMapClick = () => {
            setSelectedEstate(null)
        }

        map.on('click', handleMapClick)

        return () => {
            map.off('click', handleMapClick)
            markersRef.current.forEach((marker) => marker.remove())
            markersRef.current = []
            map.remove()
            mapRef.current = null
        }
    }, [])

    useEffect(() => {
        const map = mapRef.current
        if (!map) return

        markersRef.current.forEach((marker) => marker.remove())
        markersRef.current = []

        estates.forEach((estate) => {
            const marker = new maplibregl.Marker({ color: statusColor[estate.status] })
                .setLngLat([estate.longitude, estate.latitude])
                .addTo(map)

            marker.getElement().style.cursor = 'pointer'
            marker.getElement().addEventListener('click', (e) => {
                e.stopPropagation()
                setSelectedEstate({
                    id: estate.id,
                    name: estate.name,
                    price: estate.price,
                    area: estate.area,
                    image: estate.images[0] ?? '',
                    url: estate.url,
                })
            })

            markersRef.current.push(marker)
        })
    }, [estates])

    return (
        <Box position="relative" width="100vw" height="100vh">
            <Box ref={containerRef} width="100%" height="100%"/>
            {selectedEstate && (
                <Box
                    position="absolute"
                    top="4"
                    right="4"
                    bg="white"
                    borderRadius="md"
                    boxShadow="lg"
                    borderWidth="1px"
                    borderColor="gray.200"
                    p="4"
                    width={{ base: '84vw', sm: '320px' }}
                    zIndex={2}
                >
                    <VStack align="stretch" gap="3">
                        {selectedEstate.url ? (
                            <Link href={selectedEstate.url} target="_blank">
                                <Text fontWeight="bold" fontSize="lg" color="gray.800">{selectedEstate.name}</Text>
                            </Link>
                        ) : (
                            <Text fontWeight="bold" fontSize="lg" color="gray.800">{selectedEstate.name}</Text>
                        )}
                        {!imageLoadError && selectedEstate.image ? (
                            <Image
                                src={selectedEstate.image}
                                alt={selectedEstate.name}
                                borderRadius="md"
                                width="100%"
                                height="170px"
                                objectFit="cover"
                                onError={() => setImageLoadError(true)}
                            />
                        ) : (
                            <Box
                                borderRadius="md"
                                borderWidth="1px"
                                borderColor="gray.200"
                                height="170px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                bg="gray.50"
                            >
                                <Text color="gray.500" fontSize="sm">Sin imagen disponible</Text>
                            </Box>
                        )}
                        <Text color="gray.800"><Text as="span" fontWeight="semibold">Precio: </Text>{formatCurrency(selectedEstate.price)}</Text>
                        <Text color="gray.800"><Text as="span" fontWeight="semibold">Área: </Text>{formatArea(selectedEstate.area)}m<sup>2</sup></Text>
                    </VStack>
                </Box>
            )}
        </Box>
    )
}

export default HousePage
