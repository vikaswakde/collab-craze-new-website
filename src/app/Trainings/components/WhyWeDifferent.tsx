import Image from "next/image";
import React from "react";

const wwdData = [
  {
    id: 1,
    img: "/wwd/img-1.png",
    title: "Learn In Your Own Pace",
    desc: "No more hassle between your university timetable and coding studies. It doesn’t matter which time of the day you wish to focus. Study from the comfort of your own room in your home or hostel at your free time.",
    credit: "",
  },
  {
    id: 2,
    img: "/wwd/img-2.jpg",
    title: "Motivating Learning Environment",
    desc: "Who says online courses are hard to focus on? Keep yourself motivated with Sparta’s learning platform. We don’t let you stay behind, procrastinate or study alone. Sparta will take good care of you throughout the journey.",
    credit:
      "Photo by Kampus Production: https://www.pexels.com/photo/multiethnic-students-doing-research-together-in-library-5940844/",
  },
  {
    id: 1,
    img: "/wwd/img-3.jpg",
    title: "Instant QnA System",
    desc: "Our team of expert tutors are ready to assist you whenever you encounter challenges. No more getting stuck for hours – simply ask your questions on Discord. Our tutors and your peers will guide you through.",
    credit:
      "Photo by Thirdman: https://www.pexels.com/photo/man-in-brown-crew-neck-t-shirt-sitting-beside-man-in-brown-crew-neck-t-shirt-5257757/",
  },
];

const WhyWeDifferent = () => {
  return (
    <div className="min-h-screen xl:min-h-[25vh] flex flex-col items-center my-10 w-[20rem] px-2 md:w-[37.5rem] lg:w-[55rem] xl:w-[60rem] 2xl:w-[70rem] mx-auto ">
      <h1 className="text-2xl font-bold  text-center">
        Why is CollabCraze Different?
      </h1>
      <div className="h-full py-5 flex flex-col  gap-y-5 md:w-[40rem] lg:w-[55rem] xl:w-[60rem] 2xl:w-[70rem]">
        {wwdData.map((data) => (
          <div
            className="flex flex-col lg:flex-row rounded-2xl bg-[#ec368b] shadow lg:gap-x-5"
            key={data.id}
          >
            {data.id == 2 ? (
              <>
                <div className="flex flex-col items-center justify-center md:items-start md:px-10 gap-y-5 py-5 lg:px-5">
                  <strong className="w-[15rem] text-2xl md:w-[25rem] lg:w-[30rem]">
                    {data.title}
                  </strong>
                  <p className="text-start w-[16rem] md:w-[30rem] lg:w-[25rem]">
                    {data.desc}
                  </p>
                </div>
                <div className="relative w-full h-[15rem] md:h-[20rem] rounded-2xl">
                  <Image
                    src={`${data.img}`}
                    alt={`${data.credit}`}
                    fill
                    className="rounded-b-2xl lg:rounded-2xl object-cover "
                  />
                </div>
              </>
            ) : (
              <>
                <div className="relative w-full h-[15rem] md:h-[20rem] rounded-2xl ">
                  <Image
                    src={`${data.img}`}
                    alt={`${data.credit}`}
                    fill
                    className="rounded-t-2xl lg:rounded-2xl object-cover "
                  />
                </div>
                <div className="flex flex-col items-center md:items-start md:px-10 justify-center gap-y-5 py-5 lg:px-5 ">
                  <strong className="w-[15rem] text-2xl md:text-[2rem] md:w-[23rem] lg:w-[25rem]">
                    {data.title}
                  </strong>
                  <p className="text-start w-[16rem] md:w-[30rem] md:text-base">
                    {data.desc}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWeDifferent;
