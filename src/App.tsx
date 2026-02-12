import PracticePage from "./pages/PracticePage"

import songs from "./data"
import { BrowserRouter, Route, Routes } from "react-router"

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"></Route>
                <Route path="/music" element={<PracticePage song={songs[0]}/>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
