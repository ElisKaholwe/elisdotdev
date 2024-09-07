import styles from './page.module.css';
import AboutPage from '../components/about/about';
import Link from 'next/link';
import { BsFillBugFill, BsFeather, BsGraphUpArrow, BsCodeSlash } from 'react-icons/bs';
import { BiTransferAlt } from 'react-icons/bi';
import {
  IoLogoReddit,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoStackoverflow,
  IoLogoWhatsapp,
} from 'react-icons/io5';
import ExperiencePage from '../components/experience/experience';
import { RoughNotation } from 'react-rough-notation';
import Contact from '../components/contact/contact';
import FooterSection from '../components/footer/footer';
import NavigationSection from '../components/nav/nav';

const HomePage = () => {
  /* Environmental Variables */
  const Github = 'https://github.com/ElisKaholwe';
  const Instagram = 'https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1';
  const Reddit = 'https://www.reddit.com/user/elisdotenv/';
  const Whatsapp = 'https://wa.me/255760659831?';
  const LinkedIn = 'https://www.linkedin.com/in/elis-noman-9b64b9289/';
  const Stackoverflow = 'https://stackoverflow.com/users/22610239/elis-kaholwe';
  const blogPost = 'https://medium.com/@jayesh-totla/data-driven-decision-making-analytics-in-software-development-5a3ce639649c';
  const googleCloud = 'https://drive.google.com/file/d/1uSsd04DS-3PzuU_b40PpisU6Hw3mbE6o/view?usp=drive_link';
  return (
    <>
      <div className={`bg-white fixed z-50 rotate-90 top-1/2 right-0`}>
        <p className={`text-black px-3 py-1 font-[700]`}>V1.0.0</p>
      </div>
      <main className={`${styles.mainwrapper}`}>
        {/* @Introduction brief & navigation links */}
        <nav className={`${styles.navigationwrapper}`}>
          <div className={`${styles.navigationbar}`}>
            <Link
              className={`custom-class text-[42px] md:text-[48px] lg:text-[56px] font-[700] -tracking-[1.2] leading-[48px]`}
              href='/'>
              <h1 className='mt-5 lg:mt-0 md:mt-0'>Elius Ndimbwa</h1>
            </Link>
            <h3 className={`${styles.profession}`}>Senior Frontend Engineer</h3>
            <p className={`${styles.brief}`}>
              I build <span className={`${styles.special}`}>pixel-perfect</span>, engaging, and accessible digital
              experiences,with orientation to{' '}
              <Link href={blogPost}>
                <span className={`${styles.data}`}>data</span>
              </Link>{' '}
              and{' '}
              <Link href={blogPost}>
                {' '}
                <span className={`${styles.analytics}`}> analytics</span>{' '}
              </Link>{' '}
            </p>
            {/* Navigation bar */}
            <div className={`hidden lg:flex `}>
              <NavigationSection />
            </div>
            {/* Social Link */}
            <div className={`${styles.sociallinks}`}>
              <Link href={Github}>
                <IoLogoGithub className={`${styles.icon}`} />
              </Link>

              {/* Stackoverflow */}
              <Link href={Stackoverflow}>
                <IoLogoStackoverflow className={`${styles.icon}`} />
              </Link>

              {/* Email*/}
              <Link href={LinkedIn}>
                <IoLogoLinkedin className={`${styles.icon}`} />
              </Link>

              {/* Instagram */}
              <Link href={Instagram}>
                <IoLogoInstagram className={`${styles.icon}`} />
              </Link>
              {/* Reddit */}
              <Link href={Reddit}>
                <IoLogoReddit className={`${styles.icon}`} />
              </Link>

              {/* Whatsapp */}
              <Link href={Whatsapp}>
                <IoLogoWhatsapp className={`${styles.icon}`} />
              </Link>
            </div>
          </div>
        </nav>
        {/*  +-+-+-+-+-+-+-+-+-+-+-+-+  */}

        {/* @Section One (About Page) */}
        <section className={`${styles.sectionswrapper}`}>
          {/* About Page */}
          <div id='about' className={`${styles.aboutwrapper}`}>
            <div className={`${styles.aboutheader}`}>ABOUT</div>
            <div className={`${styles.aboutcontents}`}>
              <AboutPage />
            </div>
          </div>
          {/* -------------- */}

          {/* Experience Page */}
          <div id='experience' className={`${styles.experiencewrapper}`}>
            <div className={`${styles.experienceheader}`}>EXPERIENCE</div>
            <div className={`${styles.experencecontents}`}>
              <ExperiencePage />
              {/* @Add a Downloadable .pdf to my resume Link Here  */}

              <RoughNotation type='underline' show={true}>
                {/* Add a Downloadable Resume pdf or add a Link to the Google/Cloud Based Resume pdf  */}
                <Link href={googleCloud}>
                  <p className='inline font-[500] text-[16px]'>View Full Résumé</p>
                </Link>
              </RoughNotation>
            </div>
          </div>
          {/* -------------- */}

          {/* Skills & Resources Page */}
          <div id='skill' className={`${styles.skillwrapper}`}>
            <div className={`${styles.skillheader}`}>SKILLS & RESOURCES</div>
            <div className={`${styles.skillcontents} ${styles.skill}`}>
              <h1 className={`${styles.skillone} ${styles.skill}`}>
                Web <BsCodeSlash className='text-theme-orange animate-shine ' /> Development
              </h1>
              <h1 className={`${styles.skilltwo} ${styles.skill}`}>
                API <BiTransferAlt className='text-theme-orange animate-shine ' />
                Integration
              </h1>
              <h1 className={`${styles.skillthree} ${styles.skill}`}>
                Web <BsFillBugFill className='text-theme-orange animate-shine ' /> Scraping
              </h1>
              <h1 className={`${styles.skillfour} ${styles.skill}`}>
                SEO <BsGraphUpArrow className='text-theme-orange animate-shine ' /> Optimization
              </h1>
              <h1 className={`${styles.skillfive} ${styles.skill}`}>
                {' '}
                Web <BsFeather className='text-theme-orange animate-shine ' /> Design
              </h1>
            </div>
          </div>
          {/* -------------- */}

          {/* Contact Page */}
          <div className={`${styles.contactwrapper}`}>
            <div className={`${styles.contactcontents}`}>
              <Contact />
            </div>
          </div>
          {/* -------------- */}

          {/* Footer Page */}
          <div className={`${styles.footerwrapper}`}>
            <div className={`${styles.footercontents}`}>
              <FooterSection />
            </div>
          </div>
          {/* -------------- */}
        </section>

        {/*  +-+-+-+-+-+-+-+-+-+-+-+-+  */}
      </main>
    </>
  );
};

export default HomePage;
