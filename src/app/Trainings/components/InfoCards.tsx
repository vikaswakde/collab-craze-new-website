import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardData = [
  {
    no: 1,
    title: "Learn",
    subTitle: "Full-Stack Web Development Basics",
    tags: ["HTML", "CSS", "JavsScript", "Python", "MongoDB"],
  },
  {
    no: 2,
    title: "Learn",
    subTitle: "Full-Stack Web Development Basics",
    tags: ["HTML", "CSS", "JavsScript", "Python", "MongoDB"],
  },
  {
    no: `3`,
    title: "Learn",
    subTitle: "Full-Stack Web Development Basics",
    tags: ["- Start your Career in IT Field."],
  },
];

const InfoCards = () => {
  return (
    <div id="InfoCards" className="px-2 py-10  w-full flex mx-auto">
      <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:bg-pink-300 xl:bg-none lg:text-black lg:gap-x-10 lg:justify-center rounded items-center justify-center w-full my-10">
        <div className="lg:w-[120rem] lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:rounded flex flex-col gap-y-2">
          <div className="lg:w-[17rem] lg:pl-10">
            <Image
              src={"/collabcraze-circular-logo.png"}
              alt="logo"
              width={80}
              height={40}
            />
            <span className="font-bold text-2xl leading-none">
              Technical Skills Mastery Course
            </span>
          </div>
          <div className="flex flex-col gap-y-3 mt-5 lg:flex-row lg:py-10">
            {cardData.map((card) => (
              <div
                className="h-[16rem] max-w-xs bg-pink-300 rounded-lg text-black flex flex-col mx-auto items-start justify-evenly px-7 shadow lg:shadow-none lg:border-r-[#A2074D] lg:border-r lg:rounded-none lg:gap-x-2"
                key={card.no}
              >
                <div className="flex flex-col flex-wrap gap-y-2 items-start justify-evenly ">
                  <div className="flex flex-col gap-y-2 items-start justify-evenly h-[16rem]">
                    <span className="bg-pink-500 rounded-full px-4 text-white  font-bold text-xl  h-[3rem] w-[3rem] text-center flex items-center  justify-center p-2 m-2">
                      {card.no}
                    </span>
                    <div className="flex flex-col flex-wrap mb-2">
                      <span className="font-bold text-2xl">{card.title}</span>
                      <span className="lg:text-[1.1rem]">{card.subTitle}</span>
                    </div>
                    {card.tags.length > 1 ? (
                      <div className="flex  flex-wrap gap-x-1 gap-y-1 text-sm lg:text-xs">
                        {card.tags.map((tag, i) => (
                          <span
                            key={i}
                            className=" bg-gray-600 px-3 py-2 rounded-lg text-neutral-200 "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="flex lex-wrap gap-x-1 gap-y-1 text-sm">
                        {card.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-lg px-3 py-2 rounded-lg font-medium text-gray-700 "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
