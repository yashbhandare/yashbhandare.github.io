import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">My Music Website</h1>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/music">Music</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/upcoming">Upcoming</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto mt-8">{children}</main>
      <footer className="bg-gray-900 text-white text-center p-4 mt-8">
        <p>&copy; 2024 My Music Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
