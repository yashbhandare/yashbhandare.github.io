import { Link } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const bgColor = useColorModeValue("#04475c", "#04475c"); // Background
  const textColor = useColorModeValue("white", "#EDF2F7");
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-8">{children}</main>
      <footer
        className="bg-gray-900 text-white text-center p-4 mt-8 w-full bg-lightgrey"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <div>&copy; 2025 Yash Bhandare Productions. All rights reserved.</div>
        <div>Unauthorized use or reproduction is prohibited.</div>
      </footer>
    </div>
  );
}
