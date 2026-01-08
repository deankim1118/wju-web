import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false, // Payload v3 안정성을 위해 false 권장
  },
};

export default withPayload(withPayload(withPayload(nextConfig)));
