import { Button } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Link href={"/Home"}>
        <Button className="bg-[#FF9F1C] hover:bg-[#FFBF69]">Login</Button>
        <Button className="bg-[#FF9F1C] hover:bg-[#FFBF69]">Sign Up</Button>
      </Link>
    </div>
  );
}
