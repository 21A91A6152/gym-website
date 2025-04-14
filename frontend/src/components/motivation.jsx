import { useState, useEffect } from "react";
 
import img1 from "../assets/images/motiv1.jpeg"
import img2 from "../assets/images/motiv2.jpeg"
import img3 from "../assets/images/motiv3.jpeg"
import img4 from "../assets/images/motiv4.jpeg"
import img5 from "../assets/images/motiv5.jpeg"


const images = [
  img1,img2,img3,img4,img5
];

export default function Motivation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-4/5 mx-auto mt-10">
      <div className="relative flex justify-center">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-[70vh] object-cover rounded-lg shadow-lg transition-opacity duration-700"
        />
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
        >
          ❯
        </button>
      </div>
    </div>
  );
}