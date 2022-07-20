import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Services from "./pages/services/Services"
import Footer from "./components/footer/Footer"
import Contact from "./pages/contact/Contact"
import ToTopButton from "./components/totopbutton/ToTopButton"

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