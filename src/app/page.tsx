import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-y-7">
        <Link
          href={"/Trainings"}
          className={buttonVariants({ variant: "default" })}
        >
          Trainings
        </Link>
        <Link
          href={"/Softwares"}
          className={buttonVariants({ variant: "default" })}
        >
          Softwares
        </Link>
      </div>
    </main>
  );
}
