import { db } from "@/lib/db";

export const currentInitialCourse = 0;

export type Unit = {
  title: string;
  unitNumber: number;
  slug: string;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  subUnits: Tile[];
};

export type Course = {
  title: string;
  description: string;
  slug: string;
  units: Unit[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 0,
    title: "Introduction to Blockchain",
    description:
      "Fundamentos del blockchain, criptomonedas, sus aplicaciones del mundo real con este curso introductorio de 10 semanas de duración.",
    slug: "blockchain-101",
    backgroundColor: "bg-primary",
    textColor: "text-[#3B0764]",
    borderColor: "border-[#6B21A8]",
    subtiles: [
      {
        type: "star",
        description: "Qué es Blockchain?",
      },
      {
        type: "book",
        description: "Historia y evolución de Blockchain",
      },
      {
        type: "star",
        description: "Basic Concepts of Blockchain",
      },
    ],
  },
  {
    unitNumber: 1,
    title: "Understanding Cryptography",
    description:
      "Cryptography is a method of protecting information and secure communication system and how it plays a vital role in the functioning of blockchain.",
    slug: "nft-101",
    backgroundColor: "bg-primary",
    textColor: "text-[#3B0764]",
    borderColor: "border-[#6B21A8]",
    subtiles: [
      {
        type: "star",
        description: "Introduction to Cryptography",
      },
      {
        type: "book",
        description: "Symmetric vs Asymmetric",
      },
      {
        type: "star",
        description: "Hash Functions and Digital Signatures in Blockchain",
      },

      { type: "trophy", description: "Cryptography in Blockchain" },
    ],
  },
  {
    unitNumber: 1,
    title: "Blockchain Architecture",
    description:
      "At the heart of this technology are nodes and protocols, which play a crucial role in maintaining the integrity and functionality of a blockchain.",
    slug: "nft-101",
    backgroundColor: "bg-primary",
    textColor: "text-[#3B0764]",
    borderColor: "border-[#6B21A8]",
    subtiles: [
      {
        type: "star",
        description: "Nodes and Protocols",
      },
      {
        type: "book",
        description: "Block Structure",
      },
      {
        type: "star",
        description: "Blockchain Workflow",
      },
      { type: "trophy", description: "Cryptography in Blockchain" },
    ],
  },
];

export const courses: readonly Course[] = [
  {
    title: "Blockchain 101",
    description:
      "Fundamentos del blockchain, criptomonedas, sus aplicaciones del mundo real con este curso introductorio de 10 semanas de duración.",
    slug: "blockchain-101",
    units: units as Unit[],
  },
];

export const defaultCourse: Course = {
  ...(courses[0] as Course),
} as const;

export default courses;
