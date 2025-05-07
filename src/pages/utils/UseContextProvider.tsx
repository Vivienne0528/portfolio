import { createContext, useEffect, useState } from "react";

export const UseContext = createContext(null);

const UseContextProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClickMenu = () => {
    setIsScrolled(() => true);
    setIsMenuOpened(() => !isMenuOpened);
    console.log(isMenuOpened);
  };

  return (
    <UseContext.Provider
      value={{
        isScrolled,
        setIsScrolled,
        isMenuOpened,
        setIsMenuOpened,
        handleClickMenu,
      }}
    >
      {children}
    </UseContext.Provider>
  );
};

export default UseContextProvider;
