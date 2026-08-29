import type { Metadata } from "next";
import { CharacterIndex } from "@/components/characters/CharacterIndex";
import { getStaff, getStudents } from "@/data/characters";

export const metadata: Metadata = {
  title: "학생 열람",
};

export default function CharactersPage() {
  return <CharacterIndex students={getStudents()} staff={getStaff()} />;
}
