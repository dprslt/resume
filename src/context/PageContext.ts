import { TheoResume } from "./data/theo/index";
import { Resume } from "./types/infos/Resume";
import { createContext } from "react";

export interface PageContextType {
  resume: Resume;
}

export const PageContext = createContext<PageContextType>({
  resume: TheoResume,
});
