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

    // ✅ 写入 sessionStorage（不是 localStorage）
    sessionStorage.setItem(
      "jellyfish_verified",
      isJellyfish ? "true" : "false"
    );

    onResolve(isJellyfish ? "verified" : "denied");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 w-[360px]">
        <h2 className="text-lg font-medium mb-4">
          Before you read
        </h2>

        <p className="text-sm text-neutral-600 mb-2">
          Who are you?
        </p>

        <input
          className="w-full border border-neutral-300 rounded px-3 py-2 mb-4 text-sm"
          placeholder="Type your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          onClick={submit}
          className="w-full bg-black text-white py-2 rounded text-sm hover:bg-neutral-800"
        >
          Enter
        </button>
      </div>
    </div>
  );
}
