import type { Metadata } from "next";
import { MapView } from "@/components/map/MapView";

export const metadata: Metadata = {
  title: "서울 생활권",
};

export default function MapPage() {
  return <MapView />;
}
