import Rounded from "@/common/RoundedButton";
import { projects } from "@/data/Projects";
import Image from "next/image";
import React from "react";

const WorkComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div key={index} className=" items-center">
            <div className="col-span-2">
              <Image
                src={`/images/websites/${project.src}`}
                alt={project.title}
                className="w-full h-[300px] object-cover"
                width={500}
                height={500}
              />
              <h2 className="text-2xl mt-4">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[40px]">
        <Rounded>
          <p>View all projects</p>
        </Rounded>
      </div>
    </div>
  );
};

export default WorkComponent;
