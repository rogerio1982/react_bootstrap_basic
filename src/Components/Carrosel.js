import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src:
      "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg",
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src:
      "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

const Carrosel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Carrosel;
