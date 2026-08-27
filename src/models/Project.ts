export default interface Project {
    id: string
    title: string
    description: string
    image: string
    points: string[]
    tools: string
    links?: { label: string; href: string }[]
}
