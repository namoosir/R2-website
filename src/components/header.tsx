import Hamburger from "./icons/hamburger";
import Logo from "../assets/Logo.png"

export default function Header() {
    return (
        <header className="w-full fixed z-50 top-0 backdrop-filter backdrop-blur-md border-b border-border/40 bg-background/40">
            <div className="flex p-5 flex-row justify-between items-center">
                <img src={Logo} className="w-8 h-8"/>
                <Hamburger />
            </div>
        </header>
    );
}