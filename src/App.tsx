import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/HomePage"
import { About } from "./pages/AboutPage"
import { Work } from "./pages/WorklPage"
import { Services } from "./pages/ServicesPage"
import { Layout } from "./layouts/Layout"
import { BlogPage } from "./pages/BlogPage"

function App() {
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Layout>
  )
}

export default App
