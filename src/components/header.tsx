import Hamburger from "./icons/hamburger";
import Logo from "./icons/logo";

export default function Header() {
    return (
        <header className="w-full fixed z-50 top-0 backdrop-filter backdrop-blur-sm border-b border-border/40 bg-opacity-20">
            <div className="flex p-5 flex-row justify-between items-center">
                <Logo />
                <Hamburger />
            </div>
        </header>
    );
}