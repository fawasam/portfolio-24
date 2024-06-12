import React from "react";
const About = () => {
  return (
    <main className="max-w-[1000px] m-auto mt-[200px] max-sm:px-4">
      <div>
        <div>
          <h1
            className="  text-6xl md:text-7xl lg:text-8"
            style={{ fontSize: "calc(clamp(3.25em, 7vw, 8em) * .875)" }}
          >
            {" "}
            Fawas am
          </h1>
          <p className="my-4 mt-10 max-sm:mt-[6]  text-3xl max-sm:text-xl  ">
            I am a Calicut-based UX/UI designer and Software developer with an
            MSc in Computer Science.
          </p>
          <span className="my-4 mt-10 max-sm:mt-[6]  text-2xl max-sm:text-lg text-pretty">
            I think understanding the human experience is essential for creating
            useful and effective products that make life easier. I enjoy using
            my skill-set to empower people to accomplish their goals. My
            development stack is focused on performance & accessibility with
            delightful interactions. I create blazing fast web experience using
            <span className="bg-[#3178C6] text-show ">Typescript</span> with the
            help of <span className="bg-[#5ED3F3] text-show ">ReactJs</span> . I
            am also a big fan of{" "}
            <span className="bg-black text-show ">NextJs</span> &
            <span className="bg-[#36B7F0] text-show ">Tawilwind Css</span> for
            styling.
          </span>
        </div>
      </div>
    </main>
  );
};

export default About;
