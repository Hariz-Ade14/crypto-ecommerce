import React from 'react'
import kuda from "../../public/kuda.png";
import interswitch from "../../public/interswitch.png";
import positivus from "../../public/positivus.png";
import verona from "../../public/verona.png";
import coinMC from "../../public/coinMC.png";
import ebuy from "../../public/ebuy.png";
import gymix from "../../public/gymix.png";
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="flex flex-col mt-20 justify-center gap-10 mt-8">
        <h1 className="font-bold text-[30px]">Projects</h1>
        <div className="flex flex-col w-full gap-14 md:mx-auto">
          <a href="https://kuda-landing-page-rho.vercel.app/">
            <Image
              src={kuda}
              alt="kuda"
              className="w-full md:w-[800px] md:w-full shadow-lg md:h-[500px]"
            />
          </a>
          <a href="https://interswitch-six.vercel.app/">
            <Image
              src={interswitch}
              alt="interswitch"
              className="w-full md:w-[800px] md:w-full shadow-lg md:h-[500px]"
            />
          </a>
          <a href="https://coinmarket-cap-clone-beta.vercel.app/">
            <Image
              src={coinMC}
              alt="coinMC"
              className="w-full md:w-[800px] md:w-full shadow-lg md:h-[500px]"
            />
          </a>
          <a href="https://positivus-roan.vercel.app/">
            <Image
              src={positivus}
              alt="positivus"
              className="w-full md:w-[800px] md:w-full shadow-lg md:h-[500px]"
            />
          </a>
          <a href="https://delightful-bombolone-1a5543.netlify.app/">
            <Image
              src={verona}
              alt="verona"
              className="w-full md:w-[800px] md:w-full shadow-lg md:h-[500px]"
            />
          </a>
          <a href="https://euphonious-blini-e9483b.netlify.app/">
            <Image
              src={ebuy}
              alt="ebuy"
              className="w-full md:w-[800px] md:w-full shadow-lg md:h-[500px]"
            />
          </a>
          <a href="https://radiant-gumdrop-2e9f76.netlify.app/">
            <Image
              src={gymix}
              alt="gymix"
              className="w-full md:w-[800px] md:w-full shadow-lg md:h-[500px]"
            />
          </a>
        </div>
      </div>
  )
}

export default Projects