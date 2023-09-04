import React, {useEffect, useState} from "react";
import ContentContainer from "../layout/ContentContainer.styled";
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import Banner from "./Banner";

const Banners = props => {
    const [count, setCount] = useState(0);
    const { data, isLoading } = useFeaturedBanners();
    const [currentClassName, setCurrentClassName] = useState("fade-in");
    const bannersLength = isLoading ? 0 : data.results.length - 1;
    const [banner, setBanner] = useState();

    useEffect(() => {
        setBanner(data.results && data.results[0]);
    }, [data]);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentClassName("fade-out");
        }, 3000);
    
        return () => clearTimeout(timer);
    }, [banner]);

    const handleTransition = (event) => {
        if ( !isLoading && event.target.classList.contains("fade-out")) {
            let nextCount;
            if (count + 1 > bannersLength) {
                nextCount = 0;
            } else {
                nextCount = count + 1;
            }
            setCount(nextCount);
            setBanner(data.results[nextCount]);
            setCurrentClassName("fade-in");
        }
      };

    return (  
        <ContentContainer>
            {isLoading ? (<span>Is Loading . . .</span>) : (
                <Banner 
                    bann={banner} 
                    className={currentClassName} 
                    onTransitionEnd={handleTransition}
                ></Banner>
            )}
        </ContentContainer>
    );
};

export default Banners;