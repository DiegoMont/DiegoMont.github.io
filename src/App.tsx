import PracticePage from "./pages/PracticePage"

import songs from "./data/songs"
import { HashRouter, Route, Routes, useLocation } from "react-router"
import Portfolio from "./pages/Portfolio"
import HousePage from "./pages/HousePage"
import { useEffect } from "react"

const RouteTitleManager = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname === "/house") {
            document.title = "House"
            return
        }

        if (pathname.startsWith("/music")) {
            document.title = "Music"
            return
        }

        document.title = "DiegoMont"
    }, [pathname])

    return null
}

const App = () => {

    return (
        <HashRouter basename={import.meta.env.BASE_URL}>
            <RouteTitleManager />
            <Routes>
                <Route path="/" element={ <Portfolio /> }></Route>
                <Route path="/house" element={ <HousePage /> } />
                <Route path="/music" element={ <PracticePage song={songs[0]}/> } />
                {songs.map(song => <Route key={song.urlPath} path={`/music/${song.urlPath}`} element={ <PracticePage song={song}/> } />)}
            </Routes>
        </HashRouter>
  )
}

export default App
