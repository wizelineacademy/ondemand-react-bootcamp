import { useState } from "react";

const Carousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const handledClickPrevious = () => {
    setCurrentItem(currentItem == 0 ? items.length - 1 : currentItem - 1);
  };

  const handledClickNext = () => {
    setCurrentItem(currentItem == items.length - 1 ? 0 : currentItem + 1);
  };

  return (
    <>
      <h1>Carousel Section</h1>
      <article>
        <section className="carousel_main">
          <h3>{items[currentItem].data.name}</h3>
          <img
            src={items[currentItem].data.main_image.url}
            alt={items[currentItem].data.main_image.alt}
          />
        </section>

        <section className="carousel_controls">
          <button onClick={handledClickPrevious}>Previous</button>
          <button onClick={handledClickNext}>Next</button>
        </section>
      </article>
    </>
  );
};

export default Carousel;
