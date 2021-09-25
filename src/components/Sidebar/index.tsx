import { DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { Box, Drawer, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    //mobile or tablet
    if (isDrawerSidebar) {
        return(
            <Drawer isOpen={true} placement='left' onClose={() => {}}>
                <DrawerOverlay>
                    <DrawerContent bg='gray.800' p='4'>
                        <DrawerCloseButton mt='6'/>
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SidebarNav/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        );
    }

    // desktop
    return (
        <Box as='aside' w='64' mr='8'>
            <SidebarNav/>
        </Box>
    )
}