import React from "react";
import html from "../../public/html.png";
import css from "../../public/CSS.png";
import node from "../../public/node.png";
import js from "../../public/js.png";
import redux from "../../public/redux.png";
import tailwind from "../../public/tailwind.jpg";
import git from "../../public/git.png";
import react from "../../public/react.png";
import next from "../../public/next.png";
import bootstrap from "../../public/bootstrap.png";
import Image from "next/image";
const Skills = () => {
  return (
    <>
      <h1 className="font-bold text-[30px] my-10">Skills</h1>
      <div className="flex flex-col w-[100%] md:w-[70%] mx-auto justify-center gap-10 mt-8">
        <div className="flex flex-col md:flex-row items-center md:gap-0 gap-10 justify-between md:w-full md:p-10 p-0 mx-auto">
          <Image
            src={html}
            alt="html"
            className="md:w-[150px] md:h-[100px] w-[60%]"
          />
          <Image
            src={css}
            alt="css"
            className="md:w-[150px] md:h-[100px] w-[60%]"
          />
        </div>
        <div className="flex items-center flex-col md:flex-row md:gap-0 gap-10 justify-between md:w-full md:p-10 p-0 mx-auto">
          <Image
            src={js}
            alt="js"
            className="md:w-[150px] md:h-[100px] w-[60%]"
          />
          <Image
            src={react}
            alt="react"
            className="md:w-[150px] md:h-[100px] w-[60%]"
          />
        </div>
        <div className="flex items-center flex-col md:flex-row md:gap-0 gap-10 justify-between md:w-full md:p-10 p-0 mx-auto">
          <Image
            src={next}
            alt="next"
            className="md:w-[150px] md:h-[100px] w-full"
          />
          <Image
            src={node}
            alt="node"
            className="md:w-[150px] md:h-[100px] w-full"
          />
        </div>
        <div className="flex items-center flex-col md:flex-row md:gap-0 gap-10 justify-between md:w-full md:p-10 p-0 mx-auto">
          <Image
            src={redux}
            alt="redux"
            className="md:w-[170px] md:h-[100px] w-full"
          />
          <Image
            src={tailwind}
            alt="tailwind"
            className="md:w-[150px] md:h-[100px] w-[60%]"
          />
        </div>
        <div className="flex items-center flex-col md:flex-row md:gap-0 gap-5 justify-between md:w-full md:p-10 p-0 mx-auto">
          <Image
            src={git}
            alt="git"
            className="md:w-[150px] md:h-[100px] w-[60%]"
          />
          <Image
            src={bootstrap}
            alt="bootstrap"
            className="md:w-[150px] md:h-[100px] w-[50%]"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
