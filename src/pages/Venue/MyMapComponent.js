import {useEffect, useRef} from "react";

function MyMapComponent({
                            center,
                            zoom,
                        })
{
    const ref = useRef();

    useEffect(() => {
        window.google?.maps.Map(ref.current, {
            center,
            zoom,
        });
    });

    return <div ref={ref} id="map" />;
}

export default MyMapComponent;
