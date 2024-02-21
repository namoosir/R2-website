import React, { type ReactNode, createContext, useState } from 'react'

interface MouseProviderProps {
  children: ReactNode
}

interface MouseContextType {
  mouseVariant: string[]
  setMouseVariant: React.Dispatch<React.SetStateAction<string[]>>
  mouseChildren: ReactNode
  setMouseChildren: React.Dispatch<React.SetStateAction<ReactNode>>
  resetToDefault: () => void
}

const defaultValues = {
  mouseVariant: ['default'],
  setMouseVariant: () => {},
  mouseChildren: undefined,
  setMouseChildren: () => {},
  resetToDefault: () => {}
}

const MouseContext = createContext<MouseContextType>(defaultValues)

const MouseProvider = (props: MouseProviderProps): JSX.Element => {
  const [mouseVariant, setMouseVariant] = useState<string[]>(['default'])
  const [mouseChildren, setMouseChildren] = useState<ReactNode | undefined>(undefined)

  const resetToDefault = (): void => {
    setMouseVariant(['default'])
    setMouseChildren(undefined)
  }

  return (
        <MouseContext.Provider value={{ mouseVariant, setMouseVariant, mouseChildren, setMouseChildren, resetToDefault }}>
            { props.children }
        </MouseContext.Provider>
  )
}

export { MouseContext, MouseProvider }
