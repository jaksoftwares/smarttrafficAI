// trends/page.tsx
import dynamic from 'next/dynamic';

// Dynamically import the CongestionTrends component with SSR disabled
const CongestionTrends = dynamic(() => import('./CongestionTrends'), { ssr: false });

export default function Page() {
  return <CongestionTrends />;
}
