import { useState } from "react";
import { addDoc, collection, db } from "../plugins/firebase";

export function useUser() {
  const [user, setUser] = useState({
    score: 0,
  });

  const addScore = () => setUser({ score: ++user.score });

  async function saveScore(questionaryName) {
    await addDoc(collection(db, "score"), {
      score: user.score,
      questionaryName,
      date: new Date().toLocaleDateString("pt-BR"),
    });
  }

  return { user, addScore, saveScore };
}
