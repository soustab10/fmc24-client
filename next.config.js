/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", 'fmcweekend24.s3.ap-south-1.amazonaws.com', 'lh4.googleusercontent.com', 'lh3.googleusercontent.com', 'lh5.googleusercontent.com', 'lh6.googleusercontent.com', 'cdn.animaapp.com', 'res.cloudinary.com'],
  },
  publicRuntimeConfig: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_REACT_APP_BACKEND_URI: process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URI,
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
};


module.exports = nextConfig;
