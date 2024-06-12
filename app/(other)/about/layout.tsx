export const metadata = {
  title: "About -Fawas am",
  description:
    "I am a Calicut-based UX/UI designer and Software developer with an MSc in Computer Science.",

  icons: {
    icon: `/images/logo.png`,
  },
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default AboutLayout;
