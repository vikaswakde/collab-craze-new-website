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
    no: 2,
    title: "Learn",
    subTitle: "Full-Stack Web Development Basics",
    tags: ["HTML", "CSS", "JavsScript", "Python", "MongoDB"],
  },
];

const InfoCards = () => {
  return (
    <div id="InfoCards" className="px-2 py-10">
      <div className="flex flex-col gap-y-2">
        <div>
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
        <div className="flex flex-col gap-y-3 mt-5">
          {cardData.map((card) => (
            <div
              className="h-[18rem] max-w-xs bg-gray-100 rounded-lg text-black flex flex-col mx-auto items-start justify-evenly px-7 shadow "
              key={card.no}
            >
              <div className="flex flex-col flex-wrap gap-y-2 items-start justify-evenly ">
                <div className="flex flex-col gap-y-2 items-start justify-evenly">
                  <span className="bg-pink-500 rounded-full px-4 text-white w-fit font-bold text-xl py-2 mb-2">
                    {card.no}
                  </span>
                  <div className="flex flex-col flex-wrap mb-2">
                    <span className="font-bold text-2xl">{card.title}</span>
                    <span>{card.subTitle}</span>
                  </div>
                  <div className="flex  flex-wrap gap-x-1 gap-y-1 text-sm">
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        className=" bg-gray-600 px-3 py-2 rounded-lg text-neutral-200 "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
