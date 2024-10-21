import type { NextConfig } from "next";
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });


const nextConfig: NextConfig = {
  eslint: {
      ignoreDuringBuilds : true,
  },
    typescript: {
      ignoreBuildErrors : true,
    }
};

export default nextConfig;
