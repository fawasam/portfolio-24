import DetailesCard from "@/components/Cards/DetailsCard";
import React from "react";

let myDatas = [
  {
    title: "Web Development",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    img: "/images/web-development.svg",
    alt: "web development",
  },
  {
    title: "Mobile Development",
    description:
      "Having developed applications for various industries, our professionals are efficient in utilizing vast scope of android and iOS.",
    img: "/images/mobile-development.svg",
    alt: "mobile development",
  },
  {
    title: "UI/UX Design",
    description:
      "Our team of experts build intelligent websites that actually perform & exceed your expectations. We offer completely customized interactive web solutions to turn your online presence into a profitable entity.",
    img: "/images/ui-ux.svg",
    alt: "ui/ux design",
  },
  {
    title: "QA & Testing",
    description:
      "Our team of experts build intelligent websites that actually perform & exceed your expectations. We offer completely customized interactive web solutions to turn your online presence into a profitable entity.",
    img: "/images/qa-testing.svg",
    alt: "qa/testing",
  },
];
const ContactPage = () => {
  return (
    <>
      <main className="max-w-[1000px] m-auto mt-[200px] max-sm:px-4">
        <div>
          <h1
            className="  text-6xl md:text-7xl lg:text-8"
            style={{ fontSize: "calc(clamp(3.25em, 7vw, 8em) * .875)" }}
          >
            <span className="">Let&apos;s start a</span>
            <span>project together</span>
          </h1>
        </div>
        <section className="mt-[200px]">
          <div className="flex">
            <div>
              <div>
                {myDatas.map((data, index) => (
                  <DetailesCard key={index} data={data} />
                ))}
                {/* <DetailesCard /> */}
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
