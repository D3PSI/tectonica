import React, { useEffect } from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    Flex,
    Image,
    Link,
    Spacer,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import Router from 'next/router';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { NavBar } from '@sections/NavBar';

export default function Home() {
    const [slider, setSlider] = React.useState<Slider | null>(null);
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });
    const pdfs = [
        '2003_Heckenried_Meggen',
        '2006_Wilstrasse_Dübendorf',
        '2008_VKU_Flughafen',
        '2009_Hochdorf_Nutritec_Sulgen',
        '2012_HLM_Einsiedeln_Halle_70-80',
        '2012_SCK_Kloten',
        '2012_HLM_Einsiedeln_Verwaltung',
        '2012_Zypressenhof_Dietikon',
        '2014_EAH_Hotel_25Hours',
        '2017_EFH_Amanjiwo_2_Luzern',
        '2017_Biozentrum_Basel-2',
    ];
    const projects = [
        {
            title: 'Heckenried Meggen',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            background:
                'https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
            file:
                pdfs[0],
        },
        {
            title: 'Wilstrasse Dübendorf',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            background:
                'https://images.unsplash.com/photo-1510507024924-fc3847d49ae2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            file:
                pdfs[1],
        },
        {
            title: 'VKU Flughafen',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            background:
                'https://images.unsplash.com/photo-1529607697227-d616efef768f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            file:
                pdfs[2],
        },
    ];
    return (
        <Flex flexDirection="column" w={'full'} minHeight="100vh" height="100%">
            <NavBar />
            <Box
                bgGradient={'radial(blackAlpha.700, transparent)'}
                height={'100vh'}
                width={'full'}
                overflow={'hidden'}>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <IconButton
                    aria-label="left-arrow"
                    variant="ghost"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}>
                    <BiLeftArrowAlt size="40px" />
                </IconButton>
                <IconButton
                    aria-label="right-arrow"
                    variant="ghost"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt size="40px" />
                </IconButton>
                <Slider
                    dots={true}
                    arrows={true}
                    infinite={true}
                    autoplay={false}
                    speed={500}
                    autoplaySpeed={5000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    ref={(slider) => setSlider(slider)}
                >
                    {projects.map((project, index) => (
                        <Box
                            key={index}
                            height={'6xl'}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundImage={`url(${project.background})`}
                        >
                            <Flex justify="center">
                                <Stack key={index}
                                    w={'50%'}
                                    position="absolute"
                                    top="50%"
                                    transform="translate(0, -70%)"
                                >
                                    <Flex width={"100%"} backgroundColor={"rgba(16,16,16,0.9)"} p={"1%"} borderRadius={"1%"}>
                                        <Flex flexDir={"column"} mr="2%">
                                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                                {project.title}
                                            </Heading>
                                            <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                                                {project.text}
                                            </Text>
                                            <Spacer />
                                            <Button onClick={() => { Router.push(`/pdf/${project.file}.pdf`) }}>
                                                Download PDF
                                            </Button>
                                        </Flex>
                                        <Flex width={"80%"}>
                                            <Image src={`/img/${project.file}.jpg`} alt="Preview" />
                                        </Flex>
                                    </Flex>
                                </Stack>
                            </Flex>
                        </Box>
                    ))}
                    <Box
                        key={4}
                        height={'6xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(https://images.unsplash.com/photo-1646670966636-26b582be8581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80)`}
                    >
                        <Flex justify="center">
                            <Stack key={4}
                                w={'50%'}
                                position="absolute"
                                top="50%"
                                transform="translate(0, -70%)"
                            >
                                <Flex flexDir={"column"} mr="2%" backgroundColor={"rgba(16,16,16,0.9)"} p={"1%"} borderRadius={"1%"}>
                                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                        Alle Projekte
                                    </Heading>
                                    <Flex flexDir={"column"}>
                                        {
                                            pdfs.map((pdf, index) => {
                                                return (<Link target="_blank" href={'/pdf/' + pdf + '.pdf'} key={index}>{pdf.replaceAll('_', ' ')}</Link>)
                                            })
                                        }
                                    </Flex>
                                </Flex>
                            </Stack>
                        </Flex>
                    </Box>
                </Slider>
            </Box>
        </Flex>
    );
}