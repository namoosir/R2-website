import Header from "../components/header";
import Logo from "../public/Logo.png";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-5 pb-5 pt-[72px] gap-5">
      <Header />
      <Image src={Logo} alt="" />
      <h1 className="text-5xl text-center font-black">Product Design and Development</h1>
      <p className="text-l text-center">We are a software development agency, specialized in product design and full-stack development.</p>
      <div className="flex flex-row gap-5">
        <Button variant={"secondary"}>View Our Work</Button>
        <Button>Work With Us</Button>
      </div>
    </main>
  );
}
