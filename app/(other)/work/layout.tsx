import NameHeader from "@/components/Header/Name";

export const metadata = {
  title: "Work -Fawas am",
  description:
    "I am a Calicut-based UX/UI designer and Software developer with an MSc in Computer Science.",

  icons: {
    icon: `/images/logo.png`,
  },
};

const WorkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default WorkLayout;
