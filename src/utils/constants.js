import React, {useEffect, useState} from "react";


export const Constants = ()=>{

    const [fullHeight, setFullHeight] = useState(window.innerHeight);
    useEffect(() => {

        const updateFullHeight = () => {
            setFullHeight(window.innerHeight);
        };
        window.addEventListener("resize", updateFullHeight);
        return () => window.removeEventListener("resize", updateFullHeight);
    }, []);



}

export const heightLevels ={
    fullHeight:Constants.fullHeight,
    heightLevel1:Constants.fullHeight*5/100,
    heightLevel2:Constants.fullHeight*10/100,
    heightLevel3:Constants.fullHeight*15/100,
    heightLevel4:Constants.fullHeight*20/100,
    heightLevel5:Constants.fullHeight*25/100,
    heightLevel6:Constants.fullHeight*30/100,
    heightLevel7:Constants.fullHeight*35/100,
    heightLevel8:Constants.fullHeight*40/100,
    heightLevel9:Constants.fullHeight*45/100,
    heightLevel10:Constants.fullHeight*50/100,
    heightLevel11:Constants.fullHeight*55/100,
    heightLevel12:Constants.fullHeight*60/100,
    heightLevel13:Constants.fullHeight*65/100,
    heightLevel14:Constants.fullHeight*70/100,
    heightLevel15:Constants.fullHeight*75/100,
    heightLevel16:Constants.fullHeight*80/100,
    heightLevel17:Constants.fullHeight*85/100,
    heightLevel18:Constants.fullHeight*90/100,
    heightLevel19:Constants.fullHeight*95/100,
};
