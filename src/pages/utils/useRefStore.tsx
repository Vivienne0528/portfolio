import { createContext, RefObject } from "react";
interface RefStore {
  heroRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

// 创建默认上下文值
const defaultRefStore: RefStore = {
  heroRef: { current: null },
  projectRef: { current: null },
  aboutRef: { current: null },
  contactRef: { current: null },
};

// 创建上下文
export const useRefStore = createContext<RefStore>(defaultRefStore);
