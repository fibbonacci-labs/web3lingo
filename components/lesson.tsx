"use client";

import React, { useRef, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { numbersEqual } from "@/utils/array-utils";

import { routes } from "@/config/routes";
import { LessonComplete } from "@/components/LessonComplete";
import { LessonFastForwardEndFail } from "@/components/LessonFastForwardEndFail";
import { LessonFastForwardEndPass } from "@/components/LessonFastForwardEndPass";
import { LessonFastForwardStart } from "@/components/LessonFastForwardStart";
import { ProblemSelect1Of3 } from "@/components/ProblemQuiz";
import { ProblemWriteInEnglish } from "@/components/ProblemWriteInEnglish";
import { QuestionResult } from "@/components/QuestionResult";
import { Unit } from "@/utils/courses";

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

export const lesson2 = {
  type: "EXPLANING",
  question: "Hello world",
  content: {
    image: (
      <Image
        style={{ width: "100%", height: "auto" }} // optional
        src="/blockchain.jpg"
        width={0}
        height={0}
        sizes="100vw"
        alt="Picture of the author"
      />
    ),
    text: (
      <>
        <h2 className="pb-4 text-4xl font-bold">⛓️A blockchain</h2>
        <div className="py-3">
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            Public, digital database of crypto currency transactions. Constantly
            updated and backed up across millions of machines. Transactions are
            permanent, irreversible, and viewable by anyone.
          </p>
        </div>
        <div className="py-3">
          <h4 className="mb-2 font-semibold">⚖️ Decentralization</h4>
          <section className="leading-relaxed text-gray-600 dark:text-gray-400">
            <ul className="list-disc">
              <li>
                Spreading out responsibility to many different parties instead
                of one.
              </li>
              <li>Removing single point of power, failure, authority.</li>
              <li>Letting people govern the systems they use.</li>
            </ul>
          </section>
        </div>

        <div className="py-3">
          <h4 className="mb-2 font-semibold">🏦 Decentralized Finance</h4>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            Open & borderless financial system that connects the world through
            the internet. Peer to Peer instead of relying on banks or
            institutions. Financial service &apos;apps&apos; that run themselves
            and are governed by its users via voting. (example: Compound)
          </p>
        </div>
        <div className="py-3">
          <h4 className="mb-2 font-semibold">📱 Decentralized Apps (Dapps)</h4>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            Any type of app such as games, lending &amp; borrowing platforms,
            NFT marketplaces etc.. An app can only be decentralized (not owned
            by anyone), if it is built on a decentralized &apos;app store&apos;
            (i.e : Ethereum) Examples of Dapps: Compound, Rarible, AAVE.
          </p>
        </div>
      </>
    ),
  },
} as const;

export const lesson3 = {
  type: "EXPLANING",
  question: "Hello world",
  content: {
    image: (
      <Image
        style={{ width: "100%", height: "auto" }} // optional
        src="/wallet.jpg"
        width={0}
        height={0}
        sizes="100vw"
        alt="Picture of the author"
      />
    ),
    text: (
      <>
        <h2 className="pb-4 text-4xl font-bold">Crypto Wallets</h2>
        <div className="py-3">
          <h4 className="mb-2 font-semibold">
            ⛓️ Your New Personal Bank Account
          </h4>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            A crypto wallet is like a bank account on steroids. Think about it,
            any financial service you use, (PayPal, Credit Card, Stripe...)
            needs to be linked to a bank account. Not just for funding, but for
            verification. In crypto, your wallet is what connects you to the
            DeFi applications that are out.
          </p>
        </div>
        <div className="py-3">
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            Your wallet acts as your log-in for crypto apps. Just like when a
            website asks you &quot;Would you like to log-in with Facebook /
            Google?&quot;
          </p>
        </div>

        <div className="py-3">
          <h4 className="mb-2 font-semibold">🏦 Concepts</h4>
          <section className="leading-relaxed text-gray-600 dark:text-gray-400">
            <ul className="list-disc">
              <li>
                {" "}
                Cold Storage = a hardware wallet, not connected to internet
                (Ledger)
              </li>
              <li>Hot Storage = online facing wallet, such as MetaMask. </li>
              <li>
                Hardware wallet = physical crypto wallet device, like a ledger
                nano x.
              </li>
              <li>
                EVM = Ethereum Virtual Machine is what most networks are built
                on. Browser
              </li>
              <li>
                Wallet = A wallet in the form of a browser extension. (i.e
                MetaMask)
              </li>
              <li>KYC = Real world verification required to use. </li>
              <li>
                Custodial = Thewallet providers holds your secret key. (if they
                get hacked, so do you){" "}
              </li>
              <li>
                Non-Custodial = Your wallet is as safe as you not losing your
                password / seedphrase.{" "}
              </li>
              <li>
                Self-Custody = Keeping your crypto inside a wallet that only YOU
                have the key to.
              </li>
            </ul>
          </section>
        </div>
      </>
    ),
  },
} as const;

const lessons = [lesson1, lesson2, lesson3];

interface PageProps {
  course: Unit;
}


export default function Lesson({ course } : PageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentLesson, setLesson] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null);
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false);
  const [quitMessageShown, setQuitMessageShown] = useState(false);

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const startTime = useRef(Date.now());
  const endTime = useRef(startTime.current + 1000 * 60 * 3 + 1000 * 33);

  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
  const [reviewLessonShown, setReviewLessonShown] = useState(false);

  const problem = lessons[currentLesson] ?? lesson1;
  console.log(problem, currentLesson);
  const { correctAnswer } = lesson1;
  const isAnswerCorrect = Array.isArray(correctAnswer)
    ? numbersEqual(selectedAnswers, correctAnswer)
    : selectedAnswer === correctAnswer;

  const totalLessons = lessons.length;

  const [isStartingLesson, setIsStartingLesson] = useState(true);
  const hearts =
    "fast-forward" in searchParams &&
    !isNaN(Number(searchParams["fast-forward"]))
      ? 3 - incorrectAnswerCount
      : null;

  const onNext = () => {
    setCorrectAnswerShown(true);
    setCorrectAnswerCount((x) => x + 1);
  };

  const onExit = () => {
    void router.push(routes.main.dashboard);
    return;
  };

  const onCheckAnswer = () => {
    setCorrectAnswerShown(true);
    if (isAnswerCorrect) {
      setCorrectAnswerCount((x) => x + 1);
    } else {
      setIncorrectAnswerCount((x) => x + 1);
    }
    setQuestionResults((questionResults) => [
      ...questionResults,
      {
        question: problem.question,
        yourResponse:
          problem.type === "QUIZ"
            ? problem.answers[selectedAnswer ?? 0]?.name ?? ""
            : "",
        correctResponse:
          problem.type === "QUIZ"
            ? problem.answers[problem.correctAnswer].name
            : "",
      },
    ]);
  };

  const onFinish = () => {
    setSelectedAnswer(null);
    setSelectedAnswers([]);
    setCorrectAnswerShown(false);
    setLesson((x) => (x + 1) % lessons.length);
    endTime.current = Date.now();
  };

  const onSkip = () => {
    setSelectedAnswer(null);
    setCorrectAnswerShown(true);
  };

  const unitNumber = Number(searchParams.get("fast-forward"));

  if (hearts !== null && hearts < 0 && !correctAnswerShown) {
    return (
      <LessonFastForwardEndFail
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (
    hearts !== null &&
    hearts >= 0 &&
    !correctAnswerShown &&
    correctAnswerCount >= totalLessons
  ) {
    return (
      <LessonFastForwardEndPass
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (hearts !== null && isStartingLesson) {
    return (
      <LessonFastForwardStart
        unitNumber={unitNumber}
        setIsStartingLesson={setIsStartingLesson}
      />
    );
  }

  if (correctAnswerCount >= totalLessons && !correctAnswerShown) {
    return (
      <LessonComplete
        correctAnswerCount={correctAnswerCount}
        incorrectAnswerCount={incorrectAnswerCount}
        startTime={startTime}
        endTime={endTime}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  switch (problem.type) {
    case "QUIZ": {
      return (
        <ProblemSelect1Of3
          problem={problem}
          currentLesson={currentLesson}
          totalLessons={totalLessons}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onExit={onExit}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "EXPLANING": {
      return (
        <ProblemWriteInEnglish
          content={problem.content}
          currentLesson={currentLesson}
          totalLessons={totalLessons}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onNext}
          onFinish={onFinish}
          onExit={onExit}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }
  }
}
