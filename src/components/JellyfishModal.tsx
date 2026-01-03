"use client";

import { useState } from "react";

export default function JellyfishModal({
  onResolve,
}: {
  onResolve: (v: "verified" | "denied") => void;
}) {
  const [answer, setAnswer] = useState("");

  const submit = () => {
    const isJellyfish = answer.trim().toLowerCase() === "jellyfish";

    // sessionStorage：仅当前 tab 有效
    sessionStorage.setItem(
      "jellyfish_verified",
      isJellyfish ? "true" : "false"
    );

    onResolve(isJellyfish ? "verified" : "denied");
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        pt-[25vh]
        bg-black/40 dark:bg-black/60
      "
    >
      <div
        className="
          w-[360px]
          self-start
          h-auto
          max-h-fit
          rounded-lg px-6 pt-6 pb-5
          text-[var(--brand-contrast)]
          bg-[var(--background)]
          shadow-lg
          opacity-95
        "
      >
        <h2 className="text-lg font-medium mb-4 opacity-70 font-semibold ">
          Before you read
        </h2>

        <p className="text-sm mb-2 opacity-60 font-semibold">
          Who are you?
        </p>

        <input
          className="
            w-full mb-4 px-3 py-2 rounded
            text-sm
            border border-neutral-300 dark:border-neutral-700
            bg-white dark:bg-neutral-800
            text-neutral-900 dark:text-neutral-100
            placeholder:text-neutral-400 dark:placeholder:text-neutral-500
            focus:outline-none focus:ring-2
            focus:ring-neutral-400 dark:focus:ring-neutral-600
          "
          placeholder="Type your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          onClick={submit}
          className="
            w-full py-2 rounded text-sm font-medium
            bg-[var(--background)]
            text-[var(--brand-contrast)]
            border border-[var(--brand-contrast)]
            hover:opacity-90
            transition
          "
        >
          Enter
        </button>
      </div>
    </div>
  );
}
