import { useState, useEffect, useRef } from 'react';

const featuredImages = [
"/nyx-paint.png",
"/nyx/nyx-12.jpg", 
"/nyx/nyx-14.jpg", 
"/nyx/nyx-5.jpg", 
"/nyx/nyx-6.jpg", 
"/nyx/nyx-7.jpg",
"/nyx/nyx-13.jpg",
"/nyx/nyx-8.jpg",
"/nyx/nyx-10.jpg",
"/nyx/nyx-11.jpg",
"/nyx/nyx-3.jpg", 
"/nyx/nyx-15.jpg",  

]
let count = 0;
let slideInterval;

export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnNextClick = () => {
      count = (count + 1) % featuredImages.length;
      setCurrentIndex(count);
      slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
      const productsLength = featuredImages.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
      slideRef.current.classList.add("fade-anim");
    };
  
    useEffect(() => {
      startSlider();
      slideRef.current.addEventListener("animationend", removeAnimation);
      slideRef.current.addEventListener("mouseenter", pauseSlider);
      slideRef.current.addEventListener("mouseleave", startSlider);
  
      return () => {
          clearInterval(slideInterval);
      };
    }, []);
  
    const startSlider = () => {
      slideInterval = setInterval(() => {
        handleOnNextClick();
      }, 4000);
    };
  
    const removeAnimation = () => {
      slideRef.current.classList.remove("fade-anim");
    };
  
    const slideRef = useRef();
  
    const pauseSlider = () => {
      clearInterval(slideInterval);
    };

    return (
        <div ref={slideRef} className="w-full relative select-none">
            <img className="w-full shadow-lg"
            style={{
                height: '450px'
            }}
            src={featuredImages[currentIndex]} alt="" />

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button onClick={handleOnPrevClick}><i className="fa fa-chevron-left"></i></button>
            <button onClick={handleOnNextClick}><i className="fa fa-chevron-right"></i></button>
            </div>
        </div>
    )


}