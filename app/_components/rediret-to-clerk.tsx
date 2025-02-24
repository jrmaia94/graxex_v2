"use client";

import { RedirectToSignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const RedirectToClerk = () => {
  const [time, setTime] = useState<number>(8000);

  useEffect(() => {
    setInterval(() => {
      setTime((e) => {
        const newTime = e - 500;
        return newTime;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <p className="text-justify text-primary">
        Você será redirecionado para a página de login em{" "}
        <span>{Math.round(time / 1000)} segundos</span>
      </p>
      {time <= 0 && <RedirectToSignIn />}
    </div>
  );
};

export default RedirectToClerk;
