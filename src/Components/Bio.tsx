import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import Image from "next/image";
import picture from "../../public/portfolio-pic.jpg";
const Bio = () => {
  return (
    <div>
      <div className="flex w-full flex-col md:flex-row items-center sm:justify-center justify-between gap-10">
        <p className="w-[300px] md:w-[500px] text-[20px] md:text-[24px] fomt-semibold">
          I am a software engineer who specializes in frontend development. Well
          proficient and skilled in using frontend technologies like react,next
          js,tailwind,bootstrap and a host of other tools. I write scalable and
          efficient codes adhering to best practices and industry standards
          which makes me best fit for the job.
        </p>
        <Image
          src={picture}
          alt="picture"
          className="md:w-[530px] shadow md:h-[500px] w-[330px] h-[280px] rounded-[50%]"
        />
      </div>
      {/* <a
        href="../../public/HARIZADEBAYOCV.pdf"
        download
        className="inline-block my-12"
      >
        <Button variant="outline" className="flex text-[15px] gap-5">
          Download CV
        </Button>
      </a> */}
    </div>
  );
};

export default Bio;
