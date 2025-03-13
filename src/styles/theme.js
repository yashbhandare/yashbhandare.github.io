import { extendTheme, useColorModeValue } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "white" : "#00111a", // Background
        color: props.colorMode === "light" ? "#083f3e" : "white", // Text color
      },
    }),
  },
  colors: {
    brand: {
      primary: {
        light: "#2B6CB0", // Blue 600
        dark: "#63B3ED", // Blue 300
      },
      secondary: {
        light: "#48BB78", // Green 500
        dark: "#9AE6B4", // Green 300
      },
    },
    surface: {
      light: "#FFFFFF", // Card background
      dark: "#2D3748", // Dark card background
    },
    accent: {
      success: {
        light: "#38A169", // Green 600
        dark: "#68D391", // Green 400
      },
      warning: {
        light: "#D69E2E", // Yellow 600
        dark: "#ECC94B", // Yellow 400
      },
      error: {
        light: "#E53E3E", // Red 600
        dark: "#FC8181", // Red 400
      },
    },
  },
});

export default theme;
