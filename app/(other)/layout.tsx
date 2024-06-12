import { Metadata } from "next";
import PageTransitionEffect from "../PageTransitionEffect";

export const metadata: Metadata = {
  title: "Fawas am",
  description:
    "I am a Calicut-based UX/UI designer and Software developer with an MSc in Computer Science.",

  icons: {
    icon: `/images/logo.png`,
  },
};
const PageTransitionLayout = ({ children }: { children: React.ReactNode }) => {
  return <PageTransitionEffect>{children}</PageTransitionEffect>;
};

export default PageTransitionLayout;
