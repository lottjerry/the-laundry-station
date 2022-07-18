import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import ToTopButton from "./components/ToTopButton"

export default function App() {
  return (
    <div>
      <Navbar />
      <ToTopButton />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}