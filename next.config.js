module.exports = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gateway.pinata.cloud",
        port: "",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dhmmmen4e/image/upload/v1706341588/portfolio/**",
      },
      {
        protocol: "https",
        hostname: "violet-controlled-junglefowl-961.mypinata.cloud",
        port: "",
        pathname: "/ipfs/**",
      },
    ],
  },
};
