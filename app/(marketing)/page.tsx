import { Metadata } from "next";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pb-14 pt-10 sm:pt-16 lg:overflow-hidden lg:pb-24 lg:pt-24">
          <div className="mx-auto max-w-5xl lg:px-8">
            <div className="flex flex-col gap-2">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex">
                <div className="lg:py-18">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                    <span className="block text-purple-600">Web3lingo</span>
                    <span className="block text-black">
                      Una manera fácil y divertida de aprender sobre crypto
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Aprende desde cero web3 a tu propio ritmo con una educación
                    guiada, eficaz y divertida. <br></br>
                    <br></br>
                    <br></br>
                    Únete a la lista de espera para ser parte de la versión beta
                    y tendrás la oportunidad de ganar emocionantes recompensas
                    exclusivas.
                  </p>
                </div>
              </div>
              <div className="m-auto max-w-screen-sm space-y-4 px-4 sm:max-w-full">
                <div className="grid gap-4  md:grid-cols-2">
                  <Card className="max-w-full">
                    <CardHeader>
                      <Image
                        src="/guiado.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }} // optional
                        alt=""
                      />
                      <CardTitle>Lecciones breves y guiadas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-s text-muted-foreground">
                        Las lecciones breves e interactivas hacen que los
                        conceptos resulten intuitivos, para que incluso las
                        ideas más complejas encajen a la perfección.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/game.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }} // optional
                        alt="dssd"
                      />
                      <CardTitle>
                        Experiencia gamificada, para hacerlo un hábito
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-s text-muted-foreground">
                        Con cada desafío superado y misión completada, ganarás
                        puntos. Sigue tu progreso, sube de nivel y comprueba lo
                        lejos que has llegado.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 sm:grid md:grid-cols-3">
                  <Card className="max-w-full">
                    <CardHeader className="relative">
                      <Image
                        width={0}
                        height={0}
                        sizes="80vw"
                        style={{ width: "90%", height: "auto" }} // optional
                        src="/puzzle.png"
                        alt=""
                      />
                      <CardTitle>Tareas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-s text-muted-foreground">
                        Completa los quiz y tareas que ponen a prueba tu
                        conocimiento y amplían tus habilidades.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }} // optional
                        src="/goal.png"
                        alt=""
                      />
                      <CardTitle>Retos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-s text-muted-foreground">
                        No solo tendras teoria sino que crearas proyectos
                        reales.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Image
                        src="/nft.png"
                        width={0}
                        height={0}
                        sizes="90vw"
                        style={{ width: "80%", height: "auto" }} // optional
                        alt=""
                      />
                      <CardTitle>Certificados de cursos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-s text-muted-foreground">
                        Completa un curso o una misión importante y ganarás un
                        NFT, una insignia digital de tu éxito.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Next Edge Starter - The ultimate Next.js starter kit",
  description:
    "Next Edge Starter is enterprise ready comprehensive Next.js starter kit for building and launching modern web applications.",
};
