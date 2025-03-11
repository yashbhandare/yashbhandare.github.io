// import theme from '../styles/theme';
// import Navbar from "./components/Navbar";
// import {ChakraProvider} from "@chakra-ui/react";
//
// export default function App({ Component, pageProps }) {
//   return (
//     <ChakraProvider theme={theme}>
//       <Navbar />
//       <Component {...pageProps} />
//     </ChakraProvider>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Music from "./pages/music";
import Piano from "./pages/piano";
import Navbar from "./components/Navbar";
import Originals from "./pages/originals";
import Gallery from "./pages/gallery";
import Upcoming from "./pages/upcoming";
import Contact from "./pages/contact";
import Layout from "./components/Layout";
import Home from "./pages/home";
import {ChakraProvider} from "@chakra-ui/react";

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
