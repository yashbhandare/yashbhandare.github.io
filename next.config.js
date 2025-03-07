/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Necessary for `next export` command to work
  assetPrefix: './', // Ensures assets load properly from relative paths
  images: {
    unoptimized: true, // Needed for Next.js's built-in Image component support
  },
};

module.exports = nextConfig;