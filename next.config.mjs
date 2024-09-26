/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', "drive.usercontent.google.com", "down-id.img.susercontent.com"], // Add drive.google.com to the list of allowed domains
  }
};
export default nextConfig;
