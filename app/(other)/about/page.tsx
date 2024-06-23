import AnimatedTextWord from "@/common/TextAnimation";
import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <main className="max-w-[1000px] m-auto mt-[200px] max-sm:px-4">
      <div>
        <div>
          <p
            className="  text-6xl md:text-7xl lg:text-8"
            style={{ fontSize: "calc(clamp(3.25em, 7vw, 8em) * .875)" }}
          >
            <AnimatedTextWord text="Fawas a m" />
          </p>
          <p className="my-4 mt-10 max-sm:mt-[6]  text-3xl max-sm:text-xl  ">
            I am a Calicut-based UX/UI designer and Software developer with an
            MSc in Computer Science.
          </p>
          <p className="text-justify max-sm:text-start">
            {/* <AnimatedTextWord text="" /> */}
            <span className="my-4 mt-10 max-sm:mt-[6]  text-2xl max-sm:text-lg">
              Versatile developer with a{" "}
              <span className="bg-black text-show ">
                Master&apos;s in Computer Science,
              </span>{" "}
              distinguished for collaborative skills and a track record of
              independently delivering impactful results. Ample experience in
              full-stack development, delivering well-documented, tested, and
              operable code. Efficient in collaborating and communicating new
              ideas and opinions.
              <br />
              <br />I think understanding the human experience is essential for
              creating useful and effective products that make life easier. I
              enjoy using my skill-set to empower people to accomplish their
              goals. My development stack is focused on performance &
              accessibility with delightful interactions. I create blazing fast
              web experience using
              <span className="bg-[#EFD81D] text-show "> Javascript</span>
              <span className="bg-[#3178C6] text-show "> Typescript</span> with
              the help of{" "}
              <span className="bg-[#5ED3F3] text-show ">ReactJs.</span>I am also
              a big fan of <span className="bg-black text-show ">NextJs</span> &
              <span className="bg-[#36B7F0] text-show ">Tawilwind Css</span> for
              styling.
            </span>
          </p>

          {/* <div className="mt-10">
            <p
              className="  text-6xl md:text-7xl lg:text-8 mb-6"
              style={{ fontSize: "calc(clamp(3.25em, 7vw, 8em) * .375)" }}
            >
              Stack Familiar
            </p>
            <div className="flex gap-4 ">
              <Image
                src={"/images/icons/mern.png"}
                width={100}
                height={100}
                alt="logo"
              />
              <Image
                src={"/images/icons/typescript.png"}
                width={100}
                height={100}
                alt="logo"
              />
              <Image
                src={"/images/icons/nextjs.png"}
                width={100}
                height={100}
                alt="logo"
              />
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default About;
