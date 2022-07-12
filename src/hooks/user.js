import { useState } from "react";

export function useUser() {
  const [user, setUser] = useState({
    score: 0,
  });

  const addScore = (value) => {
    setUser({ score: user.score + value });
  };

  return { user, addScore };
}
