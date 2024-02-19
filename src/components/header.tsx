import { useContext, useEffect, useState } from 'react'
import { MouseContext } from '@/contexts/MouseContext'
import { useLenis } from '@studio-freight/react-lenis'
import { useWindowSize } from '@uidotdev/usehooks'
import { useClickAway } from '@uidotdev/usehooks'
import { motion, AnimatePresence } from 'framer-motion'

import Hamburger from 'hamburger-react'
import UpArrow from './icons/UpArrow'
import DownArrow from './icons/DownArrow'
import Logo from '../assets/Logo.png'
import { Button } from './ui/button'


type menu = {
    name: string,
    section: string
}

export default function Header() {
    const { setMouseVariant, mouseVariant, setMouseChildren, resetToDefault } = useContext(MouseContext)
    const lenis = useLenis(() => { })
    const window = useWindowSize();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [options, setOptions] = useState({ offset: -92 });
    const mobileRef = useClickAway(() => setIsOpen(false));

    useEffect(() => {
        if (!window || !window.width) return;

        if (window.width < 1440) {
            setOptions({
                offset: -92,
            });
        } else {
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

    const onMenuMouseEnter = (name: string) => {
        const child = (
            <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-primary-foreground font-bold">{name}</p>
                <DownArrow className="fill-primary-foreground"/>
            </div>
        )

        setMouseVariant([...mouseVariant, 'enlarged'])
        setMouseChildren(child)
    }

    return (
        <header className="w-full fixed z-50 top-0 bg-background lg:backdrop-filter lg:backdrop-blur-md border-b border-border/40 lg:bg-background/40 flex justify-center">
            <div className="flex p-5 flex-row justify-between items-center w-[1120px]">
                <img onClick={onLogoClick} onMouseEnter={onLogoOver} onMouseLeave={resetToDefault} src={Logo} className="w-8 h-8 lg:w-10 lg:h-10 hover:cursor-none" />
                <div className='hidden lg:flex'>
                    {menu.map((menuItem, index) => (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                                delay: 0.5 + index / 10,
                            }}
                        >
                            <Button 
                                className='hover:cursor-none'
                                variant={"ghost"} 
                                onClick={() => onMenuClick(menuItem.section)}
                                onMouseEnter={() => onMenuMouseEnter(menuItem.name)}
                                onMouseLeave={resetToDefault}
                                key={index}
                            >
                                {menuItem.name}
                            </Button>
                        </motion.div>
                    ))}
                </div>
                
                <div ref={mobileRef} className='lg:hidden'>
                    <Hamburger color='hsl(var(--primary))' size={24} toggled={isOpen} toggle={setIsOpen}/>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className='fixed left-0 shadow-4xl right-0 top-[88px] p-5 pt-0 bg-background border-b/40 grid gap-2'
                            >
                                {menu.map((menuItem, index) => (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + index / 10,
                                        }}
                                    >
                                        <Button 
                                            className='w-full p-[0.08rem]'
                                            variant={"ghost"} 
                                            onClick={() => {
                                                setIsOpen((prev) => !prev)
                                                onMenuClick(menuItem.section)
                                            }}
                                            key={index}
                                        >
                                            {menuItem.name}
                                        </Button>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    )
}
