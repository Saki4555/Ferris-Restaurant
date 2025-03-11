import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
    const location = useLocation();

    useEffect(() => {
        // Get the saved scroll position for this path
        const savedScrollPosition = sessionStorage.getItem(`scrollPosition-${location.pathname}`);
        
        if (savedScrollPosition !== null) {
            window.scrollTo(0, parseInt(savedScrollPosition)); // Restore scroll position
        } else {
            window.scrollTo(0, 0); // Default: Scroll to top
        }

        return () => {
            // Save the current scroll position before unmounting
            sessionStorage.setItem(`scrollPosition-${location.pathname}`, window.scrollY);
        };
    }, [location]);

    return null;
};

export default ScrollRestoration;
