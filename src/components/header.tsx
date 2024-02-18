import { useContext, useEffect, useState } from 'react'
import { MouseContext } from '@/contexts/MouseContext'
import { useLenis } from '@studio-freight/react-lenis'
import { useWindowSize } from '@uidotdev/usehooks'

import Hamburger from './icons/hamburger'
import UpArrow from './icons/UpArrow'
import Logo from '../assets/Logo.png'
import { Button } from './ui/button'


type menu = {
    name: string,
    section: string
}

export default function Header() {
    const { setMouseVariant, mouseVariant, setMouseChildren } = useContext(MouseContext)
    const lenis = useLenis(() => { })
    const window = useWindowSize();

    const [showLargeMenu, setShowLargeMenu] = useState<boolean>(false);
    const [options, setOptions] = useState({ offset: -92 });

    useEffect(() => {
        if (!window || !window.width) return;

        if (window.width < 1440) {
            setShowLargeMenu(false);
            setOptions({
                offset: -92,
            });
        } else {
            setShowLargeMenu(true);
            setOptions({
                offset: -256
            })
        }
    }, [window]);

    const onLogoOver = () => {
        const child = <UpArrow />

        setMouseVariant([...mouseVariant, 'enlarged'])
        setMouseChildren(child)
    };

    const onLogoLeave = () => {
        setMouseVariant(['default'])
        setMouseChildren(undefined)
    };

    const onLogoClick = () => {
        lenis?.scrollTo(0)
    };

    const menu: menu[] = [
        {
            name: 'Services',
            section: '#serviceSection'
        },
        {
            name: 'Our Work',
            section: '#ourWorkSection'
        },
        {
            name: 'About Us',
            section: '#aboutUsSection'
        },
        {
            name: 'Contact Us',
            section: '#contactSection'
        },
    ];

    const onMenuClick = (section: string) => {
        lenis?.scrollTo(section, options);
    };

    return (
        <header className="w-full fixed z-50 top-0 backdrop-filter backdrop-blur-md border-b border-border/40 bg-background/40">
            <div className="flex p-5 flex-row justify-between items-center">
                <img onClick={onLogoClick} onMouseEnter={onLogoOver} onMouseLeave={onLogoLeave} src={Logo} className="w-8 h-8 hover:cursor-none" />
                {showLargeMenu ?
                    <div>
                        {menu.map((menuItem) => (
                            <Button variant={"ghost"} onClick={() => onMenuClick(menuItem.section)}>{menuItem.name}</Button>
                        ))}
                    </div>
                    :
                    <Hamburger />
                }
            </div>
        </header>
    )
}
