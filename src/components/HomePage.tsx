import { Button } from "./ui/button";
import Logo from "../assets/Logo.png";
import ThreeScene from "./3D/scene";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start px-5 pb-5 pt-[72px] gap-5">
            <ThreeScene />
            {/* <img src={Logo} alt=""/>  */}
            <h1 className="text-5xl text-center font-black">Product Design and Development</h1>
            <p className="text-l text-center">We are a software development agency, specialized in product design and full-stack development.</p>
            <div className="flex flex-row gap-5">
                <Button variant={"secondary"}>View Our Work</Button>
                <Button>Work With Us</Button>
            </div>
        </main>
    );
}