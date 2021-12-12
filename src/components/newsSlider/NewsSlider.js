import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import "./newsSlider.css";
import clubsPreview from "../../clubsPreview";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

export const NewsSlider = () => {
  const clubs = clubsPreview;
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    const lastIndex = clubs.length-1;
    if(index < 0)setIndex(lastIndex);
    if(index>lastIndex)setIndex(0);
  },[index,clubs])

  useEffect(()=>{
    let slider = setInterval(() => {
      setIndex(index+1)
    }, 3000);
    return ()=>clearInterval(slider)
  },[index])

  return (
    <>
      <section className="news-section">
      <a href="#" className="club-link">
          {clubs.map((club, clubIndex) => {
            const { id, name, img } = club;
            let position = "nextSlide";
            if (clubIndex === index) {
              position = "activeSlide";
            }
            if (
              clubIndex === index - 1 ||
              (index === 0 && clubIndex === clubs.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              
                <article className={position} style={{ backgroundImage: `url(${img})` }} key={id}>
                  <div className="text-container">
                    <h1>{name}</h1>
                  </div>
                </article>
               
            );
          })}
        </a>
        <button className="prev" onClick={()=>setIndex(index-1)}>
        <FiChevronLeft size={40}/>
      </button>
      <button className="next" onClick={()=>setIndex(index+1)}>
        <FiChevronRight size={40}/>
      </button>
      </section>
    </>
  );
};
