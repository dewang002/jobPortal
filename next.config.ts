import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname: "cd4bfuo7ru.ufs.sh",
        port:"",
        protocol:"https",
      },
    ]
  }
};

export default nextConfig;
