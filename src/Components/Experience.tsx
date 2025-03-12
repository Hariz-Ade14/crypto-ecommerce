import React from "react";

const Experience = () => {
  return (
    <div>
      <h1 className="font-bold text-[30px] my-10">
        Professional Experience
      </h1>
      <div className="div">
        <p className="text-[20px] font-semibold">Makkan Innovations</p>
        <p className="text-[14px] mb-3 text-blue-600 font-bold">
          Frontend Developer
        </p>
        <p>
          <span className="font-bold ">-</span>Collaborated closely with the
          frontend team and designers to build a web application consisting of a
          dashboard,user authentication and state Management.
          <br />
          <br />
          <span className="font-bold">-</span>The web application turns out to
          be the Company’s Flagship Product. A real estate listing site.
          <br />
          <a
            href="https://makkanpropertylisting.ng"
            className="underline text-blue-500"
          >
            Makkan Property Listing
          </a>
          <br />
          <br />
          <span className="font-bold">-</span>I single handedly built the Agents
          page,Authentication pages(signup and sign in pages) and ensured smooth flow of user authentication,subscriptions and
          billing pages. Also,I took part in building the dashboard page and
          other components that made up the product.
        </p>
      </div>

      <div className="my-10">
        <p className="text-[20px] font-semibold">FlologPharma </p>
        <p className="text-[14px] mb-3 text-green-600 font-bold">
          Frontend Developer
        </p>

        <p>
        <span className="font-bold">-</span>Currently working as a web developer
          for FlologPharma. A Pharmaceutical company that focuses on making
          consultations easier for patients. By providing a platform that allows
          for easier access to Pharmacists, get stress free consultations as
          well as easier and better drug dispensation.
        </p>
      </div>
      <div className="my-10">
        <p className="text-[20px] font-semibold">Tracheids Tech Hub </p>
        <p className="text-[14px] mb-3 text-red-600 font-bold">
          Frontend Developer and Co-Founder
        </p>

        <p>
        <span className="font-bold">-</span>Currently working as a web developer and co-founder
          at Tracheids Tech Hub. 
          <br/>
          <br/>
          <span className="font-bold">-</span>A Startup company that focuses on providing better solution in the Educational Sector.
          <br/>
          <br/>
          <span className="font-bold">-</span>Transforming figma designs into live applications and building complex UIs with modern tools
        </p>
      </div>
    </div>
  );
};

export default Experience;
