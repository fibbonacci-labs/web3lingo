import React from "react";

import type { LoginScreenState } from "./LoginScreen";

const CreateAProfileSection = ({
  setLoginScreenState,
}: {
  setLoginScreenState: React.Dispatch<React.SetStateAction<LoginScreenState>>;
}) => {
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold">
      <h2 className="text-xl">Create a profile to save your progress!</h2>
      <button
        className="rounded-2xl border-b-4 border-green-600 bg-green-500 py-3 uppercase text-white transition hover:border-green-500 hover:bg-green-400"
        onClick={() => setLoginScreenState("SIGNUP")}
      >
        Create a profile
      </button>
      <button
        className="rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 uppercase text-white transition hover:border-blue-400 hover:bg-blue-300"
        onClick={() => setLoginScreenState("LOGIN")}
      >
        Sign in
      </button>
    </article>
  );
};
