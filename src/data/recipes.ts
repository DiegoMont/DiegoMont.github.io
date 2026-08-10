import type Recipe from "../models/Recipe"

const recipeFiles = import.meta.glob("../content/recipes/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
}) as Record<string, string>

type RecipeSection = "ingredients" | "steps" | "notes"

const sectionNames: Record<string, RecipeSection> = {
    ingredientes: "ingredients",
    instrucciones: "steps",
    notas: "notes",
}

const parseRecipe = (filename: string, markdown: string): Recipe => {
    const lines = markdown.split(/\r?\n/)
    const title = lines[0]?.match(/^#{1,6}\s+(.+)$/)
    const parsed: Recipe = {
        filename,
        title: title?.[1].trim() ?? filename,
        ingredients: [],
        steps: [],
        notes: [],
    }
    let currentSection: RecipeSection | null = null

    lines.slice(1).forEach((line) => {
        const heading = line.match(/^##\s+(.+)$/)
        if (heading) {
            currentSection = sectionNames[heading[1].trim().toLowerCase()] ?? null
            return
        }

        if (!currentSection || !line.trim()) return

        const item = line.match(/^\s*(?:[-*]|\d+\.)\s+(.+)$/)
        parsed[currentSection].push(item ? item[1].trim() : line.trim())
    })

    return parsed
}

const filenameFromPath = (path: string) => {
    const filename = path.split("/").pop() ?? ""
    return filename.replace(/\.md$/, "")
}

const recipes: Recipe[] = Object.entries(recipeFiles)
    .map(([path, markdown]) => parseRecipe(filenameFromPath(path), markdown))
    .sort((first, second) => first.filename.localeCompare(second.filename))

export default recipes
