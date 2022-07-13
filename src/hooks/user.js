import { useState } from "react";

export function useUser() {
  const [user, setUser] = useState({
    score: 0,
  });

  const addScore = () => setUser({ score: ++user.score });

  return { user, addScore };
}
