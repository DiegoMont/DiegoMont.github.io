import axios from 'axios'
import type Estate from '../models/Estate'

const isObject = (value: unknown): value is Record<string, unknown> => {
    return typeof value === 'object' && value !== null
}

const toNumber = (value: unknown): number | null => {
    if (typeof value === 'number' && Number.isFinite(value)) return value
    if (typeof value !== 'string' || value.trim() === '') return null

    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : null
}

const toStringValue = (value: unknown): string | null => {
    if (typeof value !== 'string') return null

    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : null
}

const toStringArray = (value: unknown): string[] | null => {
    if (!Array.isArray(value)) return null
    if (!value.every((item) => typeof item === 'string')) return null
    return value
}

type EstateFeature = {
  type: 'Feature'
  geometry: {
    type: 'Point'
    coordinates: [number, number] // [longitude, latitude]
  }
  properties: {
    id: number
    name: string
    estate_type: string
    price: number
    age: number
    area: number
    bedrooms: number
    bathrooms: number
    parking_cars: number
    images: string[]
  }
}

const mapFeatureToEstate = (feature: EstateFeature): Estate | null => {
    const longitude = toNumber(feature.geometry.coordinates[0])
    const latitude = toNumber(feature.geometry.coordinates[1])

    const properties = feature.properties

    const id = toNumber(properties.id)
    const name = toStringValue(properties.name)
    const type = toStringValue(properties.estate_type)
    const price = toNumber(properties.price)
    const age = toNumber(properties.age) || 0
    const area = toNumber(properties.area)
    const bedrooms = toNumber(properties.bedrooms)
    const bathrooms = toNumber(properties.bathrooms)
    const parkingCars = toNumber(properties.parking_cars)
    const images = toStringArray(properties.images)

    if (id === null || name === null || type === null || price === null || age === null || area === null || bedrooms === null || bathrooms === null || parkingCars === null || images === null || latitude === null || longitude === null) {
        console.warn(`Skipping feature: missing or invalid Estate properties.`)
        return null
    }

    return { id, name, type, price, latitude, longitude, age, area, bedrooms, bathrooms, parking_cars: parkingCars, images }
}

export const fetchEstates = async (endpoint: string): Promise<Estate[]> => {
    const response = await axios.get<unknown>(endpoint)
    const payload = response.data

    if (!isObject(payload) || payload.type !== 'FeatureCollection' || !Array.isArray(payload.features)) {
        console.error('Estate API response is not a valid GeoJSON FeatureCollection.')
        return []
    }

    return payload.features
        .map((feature) => mapFeatureToEstate(feature))
        .filter((estate): estate is Estate => estate !== null)
}
