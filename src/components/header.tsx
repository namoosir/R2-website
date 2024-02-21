import React, { useContext, useEffect, useState } from 'react'
import { MouseContext } from '@/contexts/MouseContext'
import { useLenis } from '@studio-freight/react-lenis'
import { useWindowSize, useClickAway } from '@uidotdev/usehooks'
import { motion, AnimatePresence } from 'framer-motion'

import Hamburger from 'hamburger-react'
import UpArrow from './icons/UpArrow'
import Logo from '../assets/Logo.png'
import { Button } from './ui/button'

import ContactIcon from './icons/Contact'
import ServiceIcon from './icons/Service'
import WorkIcon from './icons/Work'
import AboutIcon from './icons/About'
import AnimateMouse from './AnimateMouse'

interface menu {
  name: string
  section: string
  icon: JSX.Element
}

export default function Header (): JSX.Element {
  const { setMouseVariant, mouseVariant, setMouseChildren, resetToDefault } = useContext(MouseContext)
  const lenis = useLenis(() => { })
  const window = useWindowSize()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [options, setOptions] = useState({ offset: -92 })
  const mobileRef = useClickAway(() => { setIsOpen(false) })

  useEffect(() => {
    if ((window?.width) == null) return

    if (window.width < 1440) {
      setOptions({
        offset: -92
      })
    } else {
      setOptions({
        offset: -256
      })
    }
  }, [window])

  const onLogoOver = (): void => {
    const child = (
            <AnimateMouse
              iconChild={<UpArrow className='animate-bounce'/>}
            />
    )

    setMouseVariant([...mouseVariant, 'enlarged'])
    setMouseChildren(child)
  }

  const onLogoClick = (): void => {
    lenis?.scrollTo(0)
  }

  const menu: menu[] = [
    {
      name: 'Services',
      section: '#serviceSection',
      icon: <ServiceIcon className='fill-white p-1' />
    },
    {
      name: 'Our Work',
      section: '#ourWorkSection',
      icon: <WorkIcon className='fill-white p-1' />
    },
    {
      name: 'About Us',
      section: '#aboutUsSection',
      icon: <AboutIcon className='fill-white p-1' />
    },
    {
      name: 'Contact Us',
      section: '#contactSection',
      icon: <ContactIcon className='fill-white p-1' />
    }
  ]

  const onMenuClick = (section: string): void => {
    lenis?.scrollTo(section, options)
  }

  return (
        <header className="w-full fixed z-50 top-0 bg-background lg:backdrop-filter lg:backdrop-blur-md border-b border-border/40 lg:bg-background/40 flex justify-center">
            <div className="flex p-5 flex-row justify-between items-center w-[1120px]">
                <img onClick={onLogoClick} onMouseEnter={onLogoOver} onMouseLeave={resetToDefault} src={Logo} className="w-8 h-8 lg:w-10 lg:h-10 lg:hover:cursor-none" />
                <div className='hidden lg:flex'>
                    {menu.map((menuItem, index) => (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              type: 'spring',
                              stiffness: 260,
                              damping: 20,
                              delay: 0.5 + index / 10
                            }}
                            key={index}
                        >
                            <Button
                                className='hover:cursor-none'
                                variant={'ghost'}
                                onClick={() => { onMenuClick(menuItem.section) }}
                                key={index}
                            >
                                {menuItem.icon}
                                {menuItem.name}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div
                    // @ts-expect-error ref type is not matching
                    ref={mobileRef}
                    className='lg:hidden'
                >
                    <Hamburger color='hsl(var(--primary))' size={24} toggled={isOpen} toggle={setIsOpen} />
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
                                          delay: 0.1 + index / 10
                                        }}
                                        key={index}
                                    >
                                        <Button
                                            className='w-full p-[0.08rem]'
                                            variant={'ghost'}
                                            onClick={() => {
                                              setIsOpen((prev) => !prev)
                                              onMenuClick(menuItem.section)
                                            }}
                                            key={index}
                                        >
                                            {menuItem.icon}
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
