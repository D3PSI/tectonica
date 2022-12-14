import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
} from '@chakra-ui/icons';
import Router from 'next/router';

export const NavBar = () => {
    return (
        <Box
            position={["absolute", "fixed"]}
            width="100%"
            padding={["0%", "2%"]}
            zIndex={1}
        >
            <Flex
                backgroundColor={"rgba(0,0,0,0)"}
                color={'white'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}>
                <Flex flex={{ base: 1 }} justify={"start"}>
                    <Text
                        textAlign={["left", "center", "center"]}
                        fontSize="3xl">
                        tectonica
                    </Text>
                </Flex>
                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <HamburgerIcon w={6} h={6} color='white' />
                        </MenuButton>
                        <MenuList bgColor='black' >
                            <MenuItem bgColor='black' onClick={() => Router.push('/projects')}>Projekte</MenuItem>
                            <MenuItem bgColor='black' onClick={() => Router.push('/team')}>Team</MenuItem>
                            <MenuItem bgColor='black' onClick={() => Router.push('/jobs')}>Jobs</MenuItem>
                            <MenuDivider />
                            <MenuItem bgColor='black' onClick={() => Router.push('/contact')}>Kontakt</MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
            </Flex>
        </Box >
    )
}
