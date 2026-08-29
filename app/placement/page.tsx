import type { Metadata } from "next";
import { PlacementFlow } from "@/components/placement/PlacementFlow";

export const metadata: Metadata = {
  title: "반 배정 사전설문",
};

export default function PlacementPage() {
  return <PlacementFlow />;
}
