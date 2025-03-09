/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  basePath: '/your-repo-name', // Important for GitHub Pages
  assetPrefix: '/your-repo-name/', // Ensures assets load correctly
  trailingSlash: true, // Ensures index.html is created in every folder
};

module.exports = nextConfig;
