import styles from './footer.module.css';
const Footer = () => {
  return (
    <>
      <footer className={`mt-2 mb-[84px]`}>
        <p className={`${styles.paragraph}`}>
          Built with precision 🎯 and passion ✨ by yours truly, this page utilizes key technologies{' '}
          <span className={`${styles.special}`}>Next.js</span>, <span className={`${styles.special}`}>React.js</span>,{' '}
          <span className={`${styles.special}`}>Framer Motion</span>, and{' '}
          <span className={`${styles.special}`}>Tailwind CSS.</span> Future updates will encompass the addition of{' '}
          <span className={`${styles.specialII}`}>a blog section</span>,{' '}
          <span className={`${styles.specialII}`}>a projects showcase</span>, and{' '}
          <span className={`${styles.specialII}`}>a resources area</span>. Thank you, and happy debugging!
        </p>
      </footer>
    </>
  );
};

export default Footer;
