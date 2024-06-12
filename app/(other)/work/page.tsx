import Rounded from "@/common/RoundedButton";
import AnimatedTextWord from "@/common/TextAnimation";
import WorkComponent from "@/components/work";
import React from "react";
const Work = () => {
  return (
    <>
      <main className="max-w-[1000px] m-auto mt-[200px] max-sm:px-4">
        <div>
          <h1
            className="  text-6xl md:text-7xl lg:text-8"
            style={{ fontSize: "calc(clamp(3.25em, 7vw, 8em) * .875)" }}
          >
            <AnimatedTextWord text="Creating next level- digital products" />
          </h1>
        </div>
        <div className="my-8">
          <div className="flex gap-4">
            <Rounded>
              <p>All</p>
            </Rounded>
            <Rounded>
              <p>Design</p>
            </Rounded>
            <Rounded>
              <p>Development</p>
            </Rounded>
          </div>
        </div>
        <div className="mt-34px]">
          <WorkComponent />
        </div>
      </main>
    </>
  );
};

export default Work;
