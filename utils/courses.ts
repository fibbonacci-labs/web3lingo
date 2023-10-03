export const currentInitialCourse = 0;

export type Unit = {
  title: string;
  unitNumber: number;
  slug: string;
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

export const units: readonly Unit[] = [
  {
    unitNumber: 0,
    title: "Blockchain 101",
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
  {
    unitNumber: 1,
    title: "NFTs 101",
    description:
      "Fundamentos de los NFTs con este curso introductorio de 8 semanas de duración.",
    slug: "nft-101",
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
];

export const defaultCourse: Unit = {
  ...(units[0] as Unit),
} as const;

export default units;
