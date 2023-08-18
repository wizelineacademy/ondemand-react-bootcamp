import React, {useEffect, useState} from "react";
import ContentContainer from "../layout/ContentContainer.styled";
import bannerJson from "../../data/featured-banners.json"
import Banner from "./Banner";

const Banners = props => {
    const [count, setCount] = useState(0);
    const [banner, setBanner] = useState(bannerJson.results[0]);
    const [currentClassName, setCurrentClassName] = useState("fade-in");
    const bannersLength = bannerJson.results.length - 1;
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentClassName("fade-out");
        }, 3000);
    
        return () => clearTimeout(timer);
    }, [banner]);

    const handleTransition = (event) => {
        if (event.target.classList.contains("fade-out")) {
            let nextCount;
            if (count + 1 > bannersLength) {
                nextCount = 0;
            } else {
                nextCount = count + 1;
            }
            setCount(nextCount);
            setBanner(bannerJson.results[nextCount]);
            setCurrentClassName("fade-in");
        }
      };

    return (  
        <ContentContainer>
        <Banner 
            bann={banner} 
            className={currentClassName} 
            onTransitionEnd={handleTransition}
        ></Banner>
        </ContentContainer>
    );
};

export default Banners;