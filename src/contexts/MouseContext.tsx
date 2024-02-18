import { type ReactNode, createContext, useState } from 'react'

interface MouseProviderProps {
  children: ReactNode
}

interface MouseContextType {
  mouseVariant: string[]
  setMouseVariant: React.Dispatch<React.SetStateAction<string[]>>
  mouseChildren: ReactNode
  setMouseChildren: React.Dispatch<React.SetStateAction<ReactNode>>
}

const defaultValues = {
  mouseVariant: ['default'],
  setMouseVariant: () => {},
  mouseChildren: undefined,
  setMouseChildren: () => {}
}

const MouseContext = createContext<MouseContextType>(defaultValues)

const MouseProvider = (props: MouseProviderProps) => {
  const [mouseVariant, setMouseVariant] = useState<string[]>(['default'])
  const [mouseChildren, setMouseChildren] = useState<ReactNode | undefined>(undefined)

  return (
        <MouseContext.Provider value={{ mouseVariant, setMouseVariant, mouseChildren, setMouseChildren }}>
            { props.children }
        </MouseContext.Provider>
  )
}

export { MouseContext, MouseProvider }
