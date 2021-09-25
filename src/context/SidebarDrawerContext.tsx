import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()
    
    //toda vez que a rota é alterada, a sidebar será fechada
    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])
    
    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () =>  useContext(SidebarDrawerContext)