import PracticePage from "./pages/PracticePage"

import songs from "./data"
import { HashRouter, Route, Routes } from "react-router"
import Portfolio from "./pages/Portfolio"

const App = () => {

    return (
        <HashRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={ <Portfolio /> }></Route>
                <Route path="/music" element={ <PracticePage song={songs[0]}/> } />
                {songs.map(song => <Route key={song.urlPath} path={`/music/${song.urlPath}`} element={ <PracticePage song={song}/> } />)}
            </Routes>
        </HashRouter>
  )
}

export default App
