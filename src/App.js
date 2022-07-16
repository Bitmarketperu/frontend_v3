import React from "react"
import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import Nav from "./components/nav/nav"
function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Router />
    </BrowserRouter>
  )
}
export default App;
