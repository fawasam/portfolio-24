import Rounded from "@/common/RoundedButton";
import Image from "next/image";
import React from "react";

const WorkComponent = () => {
  const projects = [
    {
      title: "My Degree",
      src: "c2montreal.png",
      color: "#000000",
    },
    {
      title: "Office Studio",
      src: "officestudio.png",
      color: "#8C8C8C",
    },
    {
      title: "Locomotive",
      src: "locomotive.png",
      color: "#EFE8D3",
    },
    {
      title: "Silencio",
      src: "silencio.png",
      color: "#706D63",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div key={index} className=" items-center">
            <div className="col-span-2">
              <Image
                src={`/images/${project.src}`}
                alt={project.title}
                className="w-full h-[300px] object-cover"
                width={300}
                height={300}
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
