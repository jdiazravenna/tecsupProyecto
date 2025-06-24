import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        interval={7000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        stopOnHover={false}
        swipeable
        emulateTouch
        className="rounded-lg overflow-hidden"
      >
        <div>
          <img src="../img/slide1.png" alt="Hero 1" className="h-60 lg:h-[500px] object-cover w-full" />
        </div>
        <div>
          <img src="../img/slide2.png" alt="Hero 2" className="h-60 lg:h-[500px] object-cover w-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
