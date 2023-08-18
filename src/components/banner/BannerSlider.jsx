import React, {useEffect, useState} from "react";
import bannerJson from "../../data/featured-banners.json"
import Banner from "./Banner";



const Banners = props => {
    const [count, setCount] = useState(0);
    const [banners, setBanners] = useState();
    const [id, setId] = useState(0);
    
    useEffect(() => {
        setCount(bannerJson.results_size);
        setBanners(bannerJson.results);
    }, []);

    const handleChange = (eve) => {
        console.log(banners);
        setId(eve.target.value);
    };

    return (
        <div>
            <p>Show more:</p>
            <input type="range" min="0" max={count-1} value={id} onChange={handleChange}/>    
            <Banner bans={banners} element={id}></Banner>
        </div>
    );
};

export default Banners;