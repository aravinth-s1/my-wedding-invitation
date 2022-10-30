/*eslint-disable*/
import {useEffect, useRef, useState} from "react";
import './style.scss';

import { motion } from "framer-motion/dist/framer-motion";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "../../assets/images/pexels-evie-shaffer-2395249.jpg";
import DefaultNavbar from "../../addons/Navbars/DefaultNavbar";
import routes from "../../routes";
import GitHubIcon from "@mui/icons-material/GitHub";
import Snowfall from "react-snowfall";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const typedJSRef = useRef(null);
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
                        <img src={aravinthFile} style={{ transform: 'rotate(-10deg)', marginTop: '100px'}} />
                        <img src={connectorFile} style={{ transform: 'rotate(-10deg)'}} />
                        <img src={aswiniFile} style={{ transform: 'rotate(-10deg)'}} />

                        {/*<MKTypography variant="body1" color="white" mt={1} mb={6} px={{ xs: 3, lg: 6 }}>*/}

                        {/*</MKTypography>*/}
                        {/*<MKButton color="white">contact us</MKButton>*/}
                        <div className="down-arrow floating-arrow" onClick={() => navigate('/invitation')}><ArrowDownwardIcon color="black" /></div>
                    </Grid>
                </Container>
            </MKBox>
        </MKBox>
        </motion.div>
    );
}

export default Home;
