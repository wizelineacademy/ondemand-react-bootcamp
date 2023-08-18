import React from "react";

const Banner = (props) => {
    if (!props.bans) return null;
    const ban = props.bans[props.element].data;
    console.log(ban);
    return (
        <div>
            <img src={ban.main_image.url} alt="logo" width={200}></img>
            <h4>{ban.title}</h4>
            <span>{ban.description[0].text}</span>
        </div>
    );
};

export default Banner;