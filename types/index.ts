import { StaticImageData } from "next/image";

export interface SliderProps {
  src: StaticImageData;
  left: string;
  progress: any;
  direction: "left" | "right";
}

export type ProjectProps = {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
};
