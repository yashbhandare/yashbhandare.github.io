/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  distDir: "out",
  trailingSlash: true, // Ensures index.html is created in every folder
  basePath: '/yashbhandare.github.io', // This should be your GitHub repo name
  assetPrefix: '/yashbhandare.github.io/',
};

module.exports = nextConfig;
