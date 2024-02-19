/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iasworld.alleghenycounty.us",
        port: "",
        pathname: "/iasworld/iDoc2/Services/**",
      },
    ],
  },
};

module.exports = nextConfig;
// https://iasworld.alleghenycounty.us/iasworld/iDoc2/Services/GetPhoto.ashx?parid=0001C00228000300&jur=002&Rank=1&size=350x263
