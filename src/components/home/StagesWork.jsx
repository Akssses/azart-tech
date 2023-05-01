import React, { useState } from 'react';
import s from '@/styles/main/StagesWork.module.css';
import AdaptiveSlider from './AdaptiveSlider';

const stagesData = [
  {
    text: "brief",
    image: "./assets/images/01.png"
  },
  {
    text: "business-analysis & creating a CJM",
    image: "./assets/images/02.png"
  },
  {
    text: "prototype and its testing (CustDevs)",
    image: "./assets/images/03.png"
  },
  {
    text: "brending",
    image: "./assets/images/04.png"
  },
  {
    text: "visual concept (ux-ui MVP/MLP)",
    image: "./assets/images/05.png"
  },
  {
    text: "development through testing",
    image: "./assets/images/06.png"
  },
  {
    text: "correcting MLP & Final launch",
    image: "./assets/images/07.png"
  },
  {
    text: "digital-marketing",
    image: "./assets/images/08.png"
  },
];

const StagesWork = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const renderItem = (index) => {
    const stage = stagesData[index];

  if (!stage) return null;

  let className = s.inactive;
  let itemTextClassName = s['item-text'];
  let itemNumberClassName = s['item-number'];

  if (index === activeIndex) {
    className = s['active-center'];
    itemTextClassName = s['item-text-center'];
    if (index === 5) {
      itemNumberClassName = `${s['item-number-active']} ${s['item-number-special']}`;
    } else {
      itemNumberClassName = s['item-number-active'];
    }
  } else if (
    (index === activeIndex - 1 && activeIndex !== 0) ||
    (index === activeIndex + 1 && activeIndex !== 7)
  ) {
    className = s.active;
    itemTextClassName = s['item-text-side'];
    if (index === 5) {
      itemNumberClassName += ` ${s['item-number-special']}`;
    }
  } else if (index === 5) {
    itemNumberClassName += ` ${s['item-number-special']}`;
  }
  
    return (
      <div
        key={index}
        className={`${s.item} ${className}`}
        onClick={() => handleClick(index)}
        data-text={stage.text}
      >
        {(index === activeIndex || index === activeIndex - 1 || index === activeIndex + 1) && (
          <img src={stage.image} alt={`Block ${index}`} className={s['item-image']} />
        )}
        <div className={itemNumberClassName}>
          0{index + 1}
        </div>
        <div className={`${s['item-text']} ${itemTextClassName}`}>
          {index === activeIndex - 1 || index === activeIndex + 1 ? stage.text : null}
        </div>
      </div>
    );
  };
  

  return (
    <section className={`${s.stages_work} ${s.container}`}>
        <div className={s.slider}>
            {Array.from({ length: 8 }, (_, index) => renderItem(index, stagesData[index]))}
        </div>

        <div className={s.adaptive_slider}>
          <AdaptiveSlider/>
        </div>

          <div className={s.zoom}>
                <div>
                    <img src="./assets/icons/people.png" alt="people" />
                    <p>Have a zoom meeting with an expert!</p>
                </div>
                <button>go zoom</button>
          </div>

        <div className={s.glow}/>
        <div className={s.glow2}/>
    </section>
  );
};

export default StagesWork;
