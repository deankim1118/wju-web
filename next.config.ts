import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // 기본값 1MB -> 20MB로 증량
    },
    reactCompiler: false, // Payload v3 안정성을 위해 false 권장
  },
};

export default withPayload(nextConfig);
