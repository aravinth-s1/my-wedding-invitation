import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import Presentation from "./layouts/pages/presentation";
import Home from "./pages/Home";
import Invitation from "./pages/Invitation";
import Venue from "./pages/Venue";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/presentation" element={<Presentation />} />
                <Route path="/home" element={<Home />} />
                <Route path="/invitation" element={<Invitation />} />
                <Route path="/venue" element={<Venue />} />

                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;
