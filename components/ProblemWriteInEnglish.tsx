import React from "react";
import Image from "next/image";

import { CheckAnswer } from "@/components/CheckAnswer";
import { ProgressBar } from "@/components/ProgressBar";
import { QuitMessage } from "@/components/QuitMessage";

type ContentProps = {
  image: React.ReactNode;
  text: React.ReactNode;
};

export const ProblemWriteInEnglish = ({
  content,
  currentLesson,
  totalLessons,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  onExit,
  hearts,
}: {
  content: ContentProps;
  currentLesson: number;
  totalLessons: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onExit: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { text, image } = content;
  return (
    <div className="relative flex min-h-screen flex-col gap-5 bg-[#FBF9F4] px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <ProgressBar
          onExit={onExit}
          currentLesson={currentLesson}
          totalLessons={totalLessons}
          setQuitMessageShown={setQuitMessageShown}
          hearts={hearts}
        />

        <section className="sm:gap-18 flex max-w-5xl grow flex-col gap-5 self-center overflow-y-scroll sm:items-center sm:justify-center">
          <div className="w-full">
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                <div
                  style={{
                    width: "100%",
                    height: "auto",
                    position: "relative",
                  }}
                >
                  <div className="h-fit  w-full	">{image}</div>
                </div>
                <div>{text}</div>
              </div>
            </>
          </div>
        </section>
      </div>
      <div className="my-8"></div>
      <div className="my-12"></div>

      <CheckAnswer
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={true}
        isAnswerSelected={true}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};
