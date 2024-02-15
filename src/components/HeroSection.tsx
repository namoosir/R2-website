import LogoScene from "./3D/logoScene";
import { Button } from "./ui/button";
import { useLenis } from "@studio-freight/react-lenis";

export default function HeroSection() { 
    const lenis = useLenis(() => {});

    const onContactClick = () => {
        lenis?.scrollTo('#contactSection');
    };

    //TODO
    const onWorkClick = () => {

    };

    return (
        <>
            <LogoScene />
            <h1 className="text-5xl text-center font-black">Product Design and Development</h1>
            <p className="text-lg text-semibold text-center text-muted-foreground">We are a software development agency, specialized in product design and full-stack development.</p>
            <div className="flex flex-row gap-5">
                <Button className="min-w-[150px]" onClick={onContactClick}>Work With Us</Button>
                <Button className="min-w-[150px]" onClick={onWorkClick} variant={"secondary"}>View Our Work</Button>
            </div>
        </>
    )
}