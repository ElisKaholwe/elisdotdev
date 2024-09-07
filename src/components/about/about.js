import Link from 'next/link';
import styles from './about.module.css';

const AboutPage = () => {
  const js = 'https://youtu.be/aXOChLn5ZdQ';
  const udsm = 'https://www.udsm.ac.tz/';
  const web = 'https://en.wikipedia.org/wiki/World_Wide_Web';
  return (
    <>
      <div>
        <p className={`${styles.paragraph}`}>
          Back in 2020, I started learning programming during the COVID-19 lockdown.Having a foundation in ICT Studies from
          secondary school and knowing what I wanted, I dived headfirst into learning the
          <Link href={web} className={`${styles.special}`}>
            {' '}
            web
          </Link>{' '}
          I began with{' '}
          <Link href={js} className={`${styles.special}`}>
            JavaScript
          </Link>{' '}
          and built the skeleton of my first web app, adding dynamic features to it for the first time, which was an amazing
          experience.
        </p>
        <p className={`${styles.paragraph}`}>
          In 2021, I enrolled in the Computer Science and Engineering program at the
          <Link href={udsm} className={`${styles.special}`}>
            {' '}
            University of Dar es salaam (COICT){' '}
          </Link>
          Surrounded by experienced peers and lecturers, my understanding of web development deepened. I quickly mastered
          JavaScript frameworks and created an online suggestion box system for the university as my final year project. I always
          find excitement in exploring innovative web designs, often sketching them out to dissect their layouts.
        </p>
        <p className={`${styles.paragraph}`}>
          Fast-forward to today, and I&apos;ve had the privilege of building innovative solutions as a front-end engineer, my main
          focus is crafting exceptional user experiences where design and engineering converge. I&apos;m also planning to release
          an online video course that covers everything one needs to know to build responsive web applications for
          <span className={`${styles.special}`}> mobile</span> and <span className={`${styles.special}`}> desktop</span> with
          integrated APIs
        </p>
      </div>
    </>
  );
};

export default AboutPage;
