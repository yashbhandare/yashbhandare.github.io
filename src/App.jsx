import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Music from "./pages/Music";
import Piano from "./pages/Piano";
import Originals from "./pages/Originals";
import Gallery from "./pages/Gallery";
import Upcoming from "./pages/Upcoming";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/originals" element={<Originals />} />
            <Route path="/piano" element={<Piano />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
