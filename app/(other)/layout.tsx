import PageTransitionEffect from "../PageTransitionEffect";

const PageTransitionLayout = ({ children }: { children: React.ReactNode }) => {
  return <PageTransitionEffect>{children}</PageTransitionEffect>;
};

export default PageTransitionLayout;
