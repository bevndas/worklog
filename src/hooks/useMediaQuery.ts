import React, {useEffect, useState} from "react";

const useMediaQuery = (breakpoint: number) => {
    const [isLessThanBreakPoint, setBreakPoint] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [])

    const handleWindowResize = () => {
        if (window.innerWidth < breakpoint) {
            setBreakPoint(true)
        } else {
            setBreakPoint(false);
        }
    }

    return [isLessThanBreakPoint] as const;

}
export default useMediaQuery;