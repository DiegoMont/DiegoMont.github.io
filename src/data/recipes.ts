const recipeContent = import.meta.glob("../content/recipes/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
}) as Record<string, string>

const filenameFromPath = (path: string) => path.split("/").pop() ?? ""

export const getRecipeFilenames = () => Object.keys(recipeContent)
    .map(filenameFromPath)
    .filter(Boolean)
    .sort()

export const getRecipeContent = (filename: string) => {
    const contentPath = `../content/recipes/${filename}`
    return recipeContent[contentPath]
}

export const getRecipeTitle = (filename: string) => {
    const markdown = getRecipeContent(filename)
    const title = markdown?.match(/^#{1,6}\s+(.+)$/m)
    return title?.[1].trim() ?? filename.replace(/\.md$/, "")
}
