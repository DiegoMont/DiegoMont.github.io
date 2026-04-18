export default interface Estate {
    id: number;
    name: string;
    type: string;
    price: number;
    latitude: number;
    longitude: number;
    age: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    parking_cars: number;
    images: string[];
    url: string | null;
}
