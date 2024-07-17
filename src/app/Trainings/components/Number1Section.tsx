import React from "react";

const cardData = [
  {
    id: 1,
    title: "Ranked Technical Institue of Pune",
    numValue: 1,
    numValueSuff: "st",
    img: "",
  },
  {
    id: 1,
    title: "Course Completion Rate",
    numValue: 90.8,
    numValueSuff: "%",
    img: "",
  },
  {
    id: 1,
    title: "Total Number of Alumni",
    numValue: 100,
    numValueSuff: "+",
    img: "",
  },
  {
    id: 1,
    title: "Students Become Software Developers",
    numValue: 30,
    numValueSuff: "+",
    img: "",
  },
];

const Number1Section = () => {
  return (
    <div className="min-h-screen lg:my-16 lg:min-h-fit max-w-7xl lg:mt-16" id="number1section">
      <div className="px- flex flex-col w-full text-center md:w-[40rem] lg:w-[60rem] xl:w-[80rem]">
        <h2 className="text-[2rem] font-semibold">Learn from Pimpri&apos;s</h2>
        <span className=" text-[1.9rem] text-[#ac0b53] font-bold italic">
          No.1
        </span>
        <p className="px-1 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, in,
          corrupti velit consequuntur, consequatur culpa inventore tenetur vero
          perspiciatis odio quisquam unde!
        </p>
        <div className="my-12 mx-5 flex flex-col  gap-y-5 lg:grid lg:grid-cols-2 lg:col-span-2 lg:gap-4 ">
          {cardData.map((card) => (
            <div
              className="h-[12rem]  flex flex-col px-4 py-4 rounded-2xl shadow-md  text-start bg-[#bb9fa5] "
              key={card.id}
            >
              <div className="w-[18rem]">
                <h4>{card.title}</h4>
              </div>
              <div className="w-[18rem] h-[4rem] flex items-center justify-start">
                <span className="text-[2.8rem] font-mono">{card.numValue}</span>
                <span className="text-center">{card.numValueSuff}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Number1Section;
