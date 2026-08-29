import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CharacterRecord } from "@/components/characters/CharacterRecord";
import { CHARACTERS, getCharacter } from "@/data/characters";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return CHARACTERS.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const character = getCharacter(id);
  return { title: character ? character.name : "기록 없음" };
}

export default async function CharacterPage({ params }: Props) {
  const { id } = await params;
  const character = getCharacter(id);
  if (!character) notFound();
  return <CharacterRecord character={character} />;
}
