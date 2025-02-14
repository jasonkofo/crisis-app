// "use client";
import dynamic from "next/dynamic";
​

// [JKG 2025-02-14]
// This is necessary to be able to import the map (entirely rendered on the client-side)
// properly with nextjs. This essentially defers the loading to the browser
const LeafletMap = dynamic(
  () => import("./map"),
  {
    ssr: false,
  }
);

export default LeafletMap;
