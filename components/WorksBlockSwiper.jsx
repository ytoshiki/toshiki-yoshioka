import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperNav from "./SwiperNav";

// SwiperCore.use([Navigation]);

const WorksBlockSwiper = (props) => {
  const { title, texts, images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="c-works-block-swiper">
      {title && <h2>{title}</h2>}

      <div>
        <div className="c-works-block-swiper__gallery">
          <Swiper
            slidesPerView={1}
            speed=".6s"
            onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
          >
            {images.map((image, i) => (
              <SwiperSlide key={image}>
                <div
                  className="is-bg"
                  style={{
                    backgroundImage: `url(/${image})`,
                  }}
                />
              </SwiperSlide>
            ))}
             <SwiperNav />
          </Swiper>
         
        </div>
        <div className="c-works-block-swiper__captions">
          <p>{texts[currentIndex]}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksBlockSwiper;
