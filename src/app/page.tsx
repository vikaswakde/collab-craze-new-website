import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-y-2">
        <Link
          href={"/Trainings"}
          className="hover:bg-gray-300 h-fit w-fit px-2 py-4"
        >
          Trainings
        </Link>
        <Link
          href={"/Softwares"}
          className="hover:bg-gray-300 h-fit px-2 py-4 w-fit"
        >
          Softwares
        </Link>
      </div>
    </main>
  );
}
