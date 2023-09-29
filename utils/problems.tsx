import Image from "next/image";

export const lesson1 = {
  type: "QUIZ",
  question: `What is a blockchain?`,
  answers: [
    {
      icon: (
        <Image
          src="https://images.unsplash.com/photo-1667372459534-848ec00d4da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      ),
      name: "Database",
    },
    {
      icon: (
        <Image
          width={500}
          height={500}
          alt="Picture of the author"
          src="https://images.unsplash.com/photo-1642751227050-feb02d648136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
        />
      ),
      name: "NFT",
    },
    {
      icon: (
        <Image
          width={500}
          height={500}
          alt="Picture of the author"
          src="https://images.unsplash.com/flagged/photo-1569144654912-5f146d08b98b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        />
      ),
      name: "PC",
    },
  ],
  correctAnswer: 0,
} as const;
