/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ui-avatars.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
