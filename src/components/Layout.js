import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            {/*<nav className="bg-gray-900 text-white p-4">*/}
            {/*    <div className="container mx-auto flex justify-between">*/}
            {/*        <h1 className="text-2xl font-bold">My Music Website</h1>*/}
            {/*        <ul className="flex space-x-4">*/}
            {/*            <li><Link to="/">Home</Link></li>*/}
            {/*            <li><Link to="/music">Music</Link></li>*/}
            {/*            <li><Link to="/gallery">Gallery</Link></li>*/}
            {/*            <li><Link to="/upcoming">Upcoming</Link></li>*/}
            {/*            <li><Link to="/contact">Contact</Link></li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</nav>*/}

            {/* Page Content */}
            <main className="container mx-auto mt-8">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white text-center p-4 mt-8">
                <p>&copy; 2024 My Music Website. All rights reserved.</p>
            </footer>
        </div>
    );
}
