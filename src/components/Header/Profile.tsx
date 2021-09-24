import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align='center'
        >
            <Box mr='4' textAlign='right'>
                <Text>Erika Perciliano</Text>
                <Text 
                    color='gray.300'
                    fontSize='small'
                >
                    erikaperciliano.developer@gmail.com
                </Text>
            </Box>

            <Avatar size='md' name='Erika Perciliano' src='https://avatars.githubusercontent.com/u/48223561?v=4'/>
        </Flex>
    );
}