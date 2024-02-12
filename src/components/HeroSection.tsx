import LogoScene from "./3D/logoScene";
import { Button } from "./ui/button";

export default function HeroSection() {
    return (
        <>
            <LogoScene />
                <h1 className="text-5xl text-center font-black">Product Design and Development</h1>
                <p className="text-l text-center">We are a software development agency, specialized in product design and full-stack development.</p>
                <div className="flex flex-row gap-5">
                    <Button variant={"secondary"}>View Our Work</Button>
                    <Button>Work With Us</Button>
                </div>
        </>
    )
}