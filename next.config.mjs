import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true
};

const withMDX = createMDX({

});

export default withMDX(nextConfig);

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();