/*eslint-disable*/
import {useEffect, useRef, useState} from "react";
import './style.scss';

// typed-js
import { motion } from "framer-motion/dist/framer-motion";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

import { GoogleMap, LoadScript } from '@react-google-maps/api';

// Images
import bgImage from "../../assets/images/pexels-evie-shaffer-2395249.jpg";
import DefaultNavbar from "../../addons/Navbars/DefaultNavbar";
import routes from "../../routes";
import Snowfall from "react-snowfall";
import {useNavigate} from "react-router-dom";
import MyMapComponent from "./MyMapComponent";

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};


function Venue() {
    const typedJSRef = useRef(null);
    const navigate = useNavigate();
    const [aswiniFile] = useState(
        "./text-1667030434157.png"
    );
    const [connectorFile] = useState(
        "./text-1667031009171.png"
    );
    const [aravinthFile] = useState(
        "./text-1667030442509.png"
    );

    // Setting up typedJS
    // useEffect(() => {
    //     const typedJS = new Typed(typedJSRef.current, {
    //         strings: [""],
    //         typeSpeed: 70,
    //         backSpeed: 70,
    //         backDelay: 200,
    //         startDelay: 500,
    //         loop: true,
    //     });
    //
    //     return () => typedJS.destroy();
    // }, []);

    return (
        <motion.div
            className={'home'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <MKBox component="header" position="relative">
                <DefaultNavbar
                    routes={routes}
                    sticky
                />
                <MKBox
                    display="flex"
                    alignItems="center"
                    minHeight="100vh"
                    sx={{
                        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.info.main, 0), rgba(gradients.info.state, 0))}, url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <Snowfall
                        color="#ffeb3b"
                        snowflakeCount={60}/>
                    <Container>
                        <Grid
                            container
                            item
                            xs={12}
                            lg={8}
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                            mx="auto"
                        >
                            {/*<MKTypography*/}
                            {/*    variant="h1"*/}
                            {/*    color="white"*/}
                            {/*    sx={({ breakpoints, typography: { size } }) => ({*/}
                            {/*        [breakpoints.down("md")]: {*/}
                            {/*            fontSize: size["3xl"],*/}
                            {/*        },*/}
                            {/*    })}*/}
                            {/*>*/}
                            {/*    <span ref={typedJSRef} />*/}
                            {/*</MKTypography>*/}
                            <LoadScript
                                googleMapsApiKey="YOUR_API_KEY"
                            >
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                >
                                    { /* Child components, such as markers, info windows, etc. */ }
                                    <></>
                                </GoogleMap>
                            </LoadScript>

                            {/*<MKTypography variant="body1" color="white" mt={1} mb={6} px={{ xs: 3, lg: 6 }}>*/}

                            {/*</MKTypography>*/}
                            {/*<MKButton color="white">contact us</MKButton>*/}
                            <div className="down-arrow floating-arrow" onClick={() => navigate('/home')}><a href="#invitation"><ArrowDownwardIcon color="black" /></a></div>
                        </Grid>
                    </Container>
                </MKBox>
            </MKBox>
        </motion.div>
    );
}

export default Venue;
