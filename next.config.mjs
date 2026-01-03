import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = nextMDX({
  extension: /\.mdx$/,
});

export default withMDX(nextConfig);
