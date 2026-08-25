import PracticePage from "./pages/PracticePage"
import PasswordPage from "./pages/PasswordPage"

import songs from "./data/songs"
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router"
import Portfolio from "./pages/Portfolio"
import HousePage from "./pages/HousePage"
import RecipesPage from "./pages/RecipesPage"
import RecipePage from "./pages/RecipePage"
import { useEffect } from "react"

const RouteTitleManager = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname === "/house")
            document.title = "House"
        else if (pathname === "/portfolio")
            document.title = "Diego Montaño — Portfolio"
        else if (pathname.startsWith("/music"))
            document.title = "Music"
        else if (pathname === "/password")
            document.title = "Password Generator"
        else if (pathname.startsWith("/recipes"))
            document.title = "Recipes"
        else
            document.title = "DiegoMont"
    }, [pathname])

    return null
}

const App = () => {

    return (
        <HashRouter basename={import.meta.env.BASE_URL}>
            <RouteTitleManager />
            <Routes>
                <Route path="/" element={ <Navigate to="/portfolio" replace /> } />
                <Route path="/portfolio" element={ <Portfolio /> } />
                <Route path="/house" element={ <HousePage /> } />
                <Route path="/music" element={ <PracticePage song={songs[0]}/> } />
                <Route path="/password" element={ <PasswordPage /> } />
                <Route path="/recetas" element={ <RecipesPage /> } />
                <Route path="/recetas/:filename" element={ <RecipePage /> } />
                {songs.map(song => <Route key={song.urlPath} path={`/music/${song.urlPath}`} element={ <PracticePage song={song}/> } />)}
            </Routes>
        </HashRouter>
  )
}

export default App
