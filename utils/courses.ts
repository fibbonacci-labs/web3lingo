export type Course = (typeof courses)[number];

export type Unit = {
  title: string;
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  subtiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const currentInitialCourse = 1;

const courses = [
  {
    name: "Blockchain 101",
    description:
      "Fundamentos del blockchain, criptomonedas, sus aplicaciones del mundo real con este curso introductorio de 10 semanas de duración.",
    viewBox: "0 0 82 66",
    code: "en",
    href: "/blockchain-101",
    roadmap: {
      unitNumber: 1,
      title: "Blockchain 101",
      description: "",
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
          description: "Tipos de Blockchain (Pública, Privada)",
        },
        {
          type: "book",
          description:
            "Componentes del blockchain (nodos, carteras, contratos inteligentes)",
        },
        { type: "book", description: "How Blocks and Transactions Work" },
        { type: "trophy", description: "Cryptography in Blockchain" },
      ],
    },
  },
  {
    name: "NFT 101",
    description:
      "Fundamentos de los NFTs con este curso introductorio de 8 semanas de duración.",
    viewBox: "0 0 82 66",
    code: "en",
    href: "/nft-101",
    roadmap: {
      unitNumber: 1,
      title: "NFTs 101",
      description: "",
      backgroundColor: "bg-primary",
      textColor: "text-[#3B0764]",
      borderColor: "border-[#6B21A8]",
      subtiles: [
        {
          type: "star",
          description: "Qué es NFTs?",
        },
        {
          type: "book",
          description: "Historia y evolución de NFTs",
        },
        {
          type: "star",
          description: "Tipos de NFTs ",
        },
        {
          type: "book",
          description:
            "Componentes del blockchain (nodos, carteras, contratos inteligentes)",
        },
        { type: "book", description: "How Blocks and Transactions Work" },
        { type: "trophy", description: "Cryptography in Blockchain" },
      ],
    },
  },
] as const;

export const units: readonly Unit[] = [courses[0].roadmap, courses[1].roadmap];

export default courses;
