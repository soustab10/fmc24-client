/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com",'fmcweekend24.s3.ap-south-1.amazonaws.com','lh4.googleusercontent.com','lh3.googleusercontent.com','lh5.googleusercontent.com','lh6.googleusercontent.com'],
  },
  publicRuntimeConfig: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    REACT_APP_BACKEND_URI:process.env.REACT_APP_BACKEND_URI
  },
};



module.exports = nextConfig;
