/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  basePath: '/yashbhandare.github.io', // Important for GitHub Pages
  assetPrefix: '/yashbhandare.github.io/', // Ensures assets load correctly
  trailingSlash: true, // Ensures index.html is created in every folder
};

module.exports = nextConfig;
