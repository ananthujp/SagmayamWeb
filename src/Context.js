import { createContext, useContext, useEffect, useMemo, useState } from "react";

const WrapContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [load, setLoad] = useState(false);

  const emails = [
    "sagmayam@gmail.com",
    "prasanth.n@iitgn.ac.in",
    "ananthu.jp@iitgn.ac.in",
  ];
  useEffect(() => {
    localStorage.user && emails.includes(JSON.parse(localStorage.user).email)
      ? setLogin(true)
      : setLogin(false);
  }, [login]);

  const memoedValue = useMemo(
    () => ({
      login,
      setLogin,
      load,
      setLoad,
    }),
    [login, load]
  );
  return (
    <WrapContext.Provider value={memoedValue}>{children}</WrapContext.Provider>
  );
};

export default function useReducer() {
  return useContext(WrapContext);
}
