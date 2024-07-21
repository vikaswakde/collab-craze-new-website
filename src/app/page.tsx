import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-5 bg-pink-500">
      <Link href={"/Trainings"} className="w-full">
        <div
          className=" min-h-[50vh] w-full flex items-center justify-center bg-white/30 bg-[url(/trainings.avif)] hover:backdrop-blur-lg   border-gray-400 rounded-xl p-5 m-5 bg-cover border
        "
        >
          <h1 className="text-4xl text-center font-extrabold ">
            Training Courses
          </h1>
        </div>
      </Link>
      <Link href={"/Softwares"} className="w-full">
        <div
          className=" min-h-[50vh] w-full flex items-center justify-center bg-white/30 bg-[url(/software-services.jpg)] backdrop-blur-lg   border-gray-400 rounded-xl p-5 m-5 bg-cover border
        "
        >
          <h1 className="text-4xl text-center font-extrabold ">
            Software Services
          </h1>
        </div>
      </Link>
    </main>
  );
}
