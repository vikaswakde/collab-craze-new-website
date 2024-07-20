import React from "react";

const cardRow1 = [
  {
    id: 1,
    name: "Front-end Developer",
  },
  {
    id: 2,
    name: "Back-end Developer",
  },
  {
    id: 3,
    name: "Java Developer",
  },
];

const cardRow2 = [
  {
    id: 4,
    name: "C++ Developer",
  },
  {
    id: 5,
    name: "Software Engineer",
  },
  {
    id: 6,
    name: "Software Application Developer",
  },
];

const cardRow3 = [
  {
    id: 7,
    name: "OS Developer",
  },
  {
    id: 8,
    name: "Kernel Developer",
  },
  {
    id: 9,
    name: "Software Manager",
  },
];

const OppAfterCourse = () => {
  return (
    <div className=" py-[5rem] px-[1rem] overflow-hidden align-baseline lg:min-w-[60rem]">
      <div className="max-w-[37.5rem]  my-0 mx-auto  w-[20rem] md:w-[30rem] lg:min-w-[60rem] flex flex-col items-center ">
        <div className="mb-[5rem] text-center p-0">
          <h2 className="font-semibold leading-[140%] text-3xl text-center">
            Job Opportunites After the Course
          </h2>
          <p className="mt-5 mx-1 text-[1rem] leading-[160%] text-gray-200 align-baseline list-none text-center font-medium">
            Learning full-stack web development opens up potential career paths
            and opportunites.
            <br />
            Here are some of the roles you can pursue:
          </p>
        </div>
        <div className="overflow-hidden my-0 mx-[-1rem] py-0 px-[1rem] max-w-[40rem]">
          <div className="flex justify-start">
            <div className="animate-x-scroll-animation flex justify-center">
              {cardRow1.map((card) => (
                <div className="" key={card.id}>
                  <div className="flex items-center w-auto rounded-2xl shadow-lg  ml-2.5 relative bg-pink-500 shadow-[#97a1a5] py-3.5 px-[1.6rem] text-lg font-semibold border-transparent border-solid border-[2px] whitespace-nowrap">
                    {card.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-x-scroll-animation2 flex justify-center ml-0">
              {cardRow1.map((card) => (
                <div className="" key={card.id}>
                  <div className="flex items-center w-auto rounded-2xl shadow-lg  ml-2.5 relative bg-pink-500 shadow-[#97a1a5] py-3.5 px-[1.6rem] text-lg font-semibold border-transparent border-solid border-[2px] whitespace-nowrap">
                    {card.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-start mt-6">
            <div className="animate-x-scroll-animation flex justify-center">
              {cardRow2.map((card) => (
                <div className="" key={card.id}>
                  <div className="flex items-center w-auto rounded-2xl shadow-lg  ml-2.5 relative bg-pink-500 shadow-[#97a1a5] py-3.5 px-[1.6rem] text-lg font-semibold border-transparent border-solid border-[2px] whitespace-nowrap">
                    {card.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-x-scroll-animation2 flex justify-center ml-0">
              {cardRow2.map((card) => (
                <div className="" key={card.id}>
                  <div className="flex items-center w-auto rounded-2xl shadow-lg  ml-2.5 relative bg-pink-500 shadow-[#97a1a5] py-3.5 px-[1.6rem] text-lg font-semibold border-transparent border-solid border-[2px] whitespace-nowrap">
                    {card.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-start mt-6">
            <div className="animate-x-scroll-animation flex justify-center">
              {cardRow3.map((card) => (
                <div className="" key={card.id}>
                  <div className="flex items-center w-auto rounded-2xl shadow-lg  ml-2.5 relative bg-pink-500 shadow-[#97a1a5] py-3.5 px-[1.6rem] text-lg font-semibold border-transparent border-solid border-[2px] whitespace-nowrap">
                    {card.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-x-scroll-animation2 flex justify-center ml-0">
              {cardRow3.map((card) => (
                <div className="" key={card.id}>
                  <div className="flex items-center w-auto rounded-2xl shadow-lg  ml-2.5 relative bg-pink-500 shadow-[#97a1a5] py-3.5 px-[1.6rem] text-lg font-semibold border-transparent border-solid border-[2px] whitespace-nowrap">
                    {card.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-16 mx-1 text-[0.9rem] leading-[160%] text-gray-400 align-baseline list-none text-center font-normal ">
          {" "}
          This course will be a good stepping stone for any specialised and
          <br />
          extended fields such as{" "}
          <b className="p-1"> AI, Machine Learning, DevOps, Web Security,</b>
          or
          <b className="p-1">Data Analysis.</b>
        </p>
      </div>
    </div>
  );
};

export default OppAfterCourse;
