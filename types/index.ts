import { StaticImageData } from "next/image";

export interface SliderProps {
  src: StaticImageData;
  text: string;
  left: string;
  progress: any;
  direction: "left" | "right";
}

export type ProjectProps = {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
};

export interface LinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}
