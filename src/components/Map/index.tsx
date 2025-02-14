// "use client";
import dynamic from "next/dynamic";
// [JKG 2025-02-14]
// This is necessary to be able to import the map (entirely rendered on the client-side)
// properly with nextjs. This essentially defers the loading to the browser
// const LeafletMap = dynamic(
//   () => import("./map"),
//   {
//     ssr: false,
// 	loading: () => <p>Loading...</p>,
//   }
// );

// export default function Map() {
// 	return (
// 	  <div>
// 		<h1>My First Leaflet Map in Next.js</h1>
// 		<LeafletMap />
// 	  </div>
// 	);
//   };
import Map from "./map";
export { Map };
