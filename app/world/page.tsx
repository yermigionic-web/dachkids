import type { Metadata } from "next";
import { WorldGuide } from "@/components/world/WorldGuide";

export const metadata: Metadata = {
  title: "세계관 안내",
};

export default function WorldPage() {
  return <WorldGuide />;
}
