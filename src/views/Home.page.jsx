import React, { useState } from 'react';
import mockData1 from '../utils/mock/featured_banners.json';
import mockData2 from '../utils/mock/product-categories.json';
import mockData3 from '../utils/mock/featured_products.json';

import Card from '../components/Card/Card.component';
import { Cards, Button, Title, ButtonContainer, ButtonBox } from './Home.style'

export default function MainView() { 
    const [nextSlide, setNextSlide] = useState(0);
    const clickNextSlide = () => {
        if (nextSlide === mockData1.results.length -1)
            return;
        else {
            setNextSlide(nextSlide + 1);
        }
    };

    const clickPrevSlide = () => {
        if (nextSlide === 0)
            return;
        else {
            setNextSlide(nextSlide - 1);
        }
        console.log(mockData1.results[nextSlide]?.id);
    };

    return (
        <div>
            <div >
                <Title> Slider </Title>
            </div>
            <Cards>
                {mockData1.results.map(image => (
                    mockData1.results[nextSlide]?.id === image.id && 
                    <Card
                        id={image.data.id}
                        key={image.id}
                        name={image.data.title}
                        description={image.data.description[0].text}
                        image={image.data.main_image.url}
                    />
                    ))    
                }
            </Cards>
            <ButtonBox>
                <ButtonContainer>
                    <Button onClick={clickPrevSlide} > Prev </Button>
                    <Button onClick={clickNextSlide}> Next </Button>
                </ButtonContainer>
            </ButtonBox>
            <div >
                <Title> Grid </Title>
            </div>
            <Cards>
                {mockData2.results.map(image => (
                    <Card
                        id={image.id}
                        key={image.id}
                        name={image.data?.name}
                        description={image.data.description}
                        image={image.data.main_image.url}
                    />
                    ))    
                }
            </Cards>
            <div >
                <Title> Grid </Title>
            </div>
            <Cards>
                {mockData3.results.map(image => (
                    <Card
                        id={image.id}
                        key={image.id}
                        name={image.data?.name}
                        description={image.data.description[0].text}
                        image={image.data.mainimage.url}
                    />
                    ))    
                }
            </Cards>
        </ div>
    );
}