import { Button, Navbar, NavbarBrand } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <div className="sticky top-0 z-40">
      <Navbar fluid className="border-solid border-b-4 border-[#2EC4B6] dark:border-[#2EC4B6] bg-white dark:bg-white">
        <NavbarBrand as={Link} href="#">
          <Image src="./assets/Kamino.svg" height={70} width={70} className="mr-3 h-20" alt="Kamino" />
        </NavbarBrand>
        <div className="flex gap-x-6">
          <Link href={"/Login"}>
          <Button className="bg-[#FF9F1C] hover:bg-[#FFBF69]">Login</Button>
          </Link>
          <Link href='/SignUp'>
          <Button className="bg-[#FF9F1C] hover:bg-[#FFBF69]">Sign Up</Button>
          </Link>
        </div>
      </Navbar>
    </div>
  );
}
