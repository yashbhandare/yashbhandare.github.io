/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  distDir: "out",
  trailingSlash: true, // Ensures index.html is created in every folder
};

module.exports = nextConfig;
