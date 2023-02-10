import Image from "next/image";
import { useState } from "react";
import Header from "./Header";
import Selection from "./Selection";

export default function WhosWatching() {
  const [user, setUser] = useState(false);
  return (
    <>
      <Header />

      {user ? (
        <Selection />
      ) : (
        <div className="relative z-30 flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-900">
          <p className="text-3xl text-white">Who's Watching?</p>
          <div className="flex flex-wrap justify-center gap-6 px-6 text-center text-zinc-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                className="cursor-pointer"
                aria-label={`select-user-${i}`}
                onClick={() => setUser((p) => !p)}
              >
                <Image
                  src="/images/avatar.png"
                  alt={`avatar${i}`}
                  className="mb-1 rounded"
                  width={100}
                  height={100}
                />
                <>User {i}</>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
