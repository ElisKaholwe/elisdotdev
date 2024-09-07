'use client';
import styles from './experience.module.css';
import { IoLinkOutline } from 'react-icons/io5';
import { RoughNotation } from 'react-rough-notation';
import { data } from '../../data/card.js';

const ExperienceCard = () => {
  return (
    <>
      {data.map((e, index) => (
        <div key={index} className={`${styles.card}`}>
          <div className={`${styles.timeline}`}>
            <h4 className={`${styles.duration}`}>{e.timeline}</h4>
          </div>
          <div className={`${styles.details}`}>
            <h4 className={`${styles.professionTitle}`}> {e.profession}</h4>
            <h6 className={`${styles.professionLocation}`}>
              <RoughNotation className={`inline-flex items-center gap-[3px] text-theme-black-gray`} type='underline' show={true}>
                {e.location} <span>{e.icon}</span>
              </RoughNotation>
            </h6>
            <p className={`${styles.professionDescription}`}>{e.description}</p>
            <ul className={styles.buttonList}>
              {e.button.map((ee, index) => (
                <li className={styles.buttonItem} key={index}>
                  <IoLinkOutline className={`transform -rotate-45`} /> {ee}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceCard;
