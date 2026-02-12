import PracticePage from "./pages/PracticePage"

import songs from "./data"
import { BrowserRouter, Route, Routes } from "react-router"
import Portfolio from "./pages/Portfolio"

const App = () => {

    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={ <Portfolio /> }></Route>
                <Route path="/music" element={ <PracticePage song={songs[0]}/> } />
            </Routes>
        </BrowserRouter>
  )
}

export default App
