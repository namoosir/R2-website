import { ReactNode, createContext, useState } from 'react';

type MouseProviderProps = {
    children: ReactNode
}

type MouseContextType = {
    mouseVariant: string[];
    setMouseVariant: React.Dispatch<React.SetStateAction<string[]>>;
};

const defaultValues = {
    mouseVariant: ["default"],
    setMouseVariant: () => {}
};

const MouseContext = createContext<MouseContextType>(defaultValues);

const MouseProvider = (props: MouseProviderProps) => {
    const [mouseVariant, setMouseVariant] = useState<string[]>(["default"]);

    return (
        <MouseContext.Provider value={{ mouseVariant, setMouseVariant }}>
            { props.children }
        </MouseContext.Provider>
    )
}

export { MouseContext, MouseProvider };