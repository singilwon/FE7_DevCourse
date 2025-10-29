import type { NextConfig } from "next";

// CSR,SSR,SSG,ISR + PPR(Partial Prerendering, 부분 사진 렌더링)
// PPR, 빠르게 보여줄 수 있는 정적 페이지는 빠르게 보여주고,
// 느리게 보여줘야 하는 동적인 부분은 완성되는대로 스트리밍해서 보여준다.
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // PPR 방식 고정하게 해주는 것
  cacheComponents: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
