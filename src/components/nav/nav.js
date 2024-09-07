'use client';
import styles from './nav.module.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavigationBar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('about');

  const links = [
    {
      path: '#about',
      name: 'ABOUT',
    },
    {
      path: '#experience',
      name: 'EXPERIENCE',
    },
    {
      path: '#skill',
      name: 'SKILLS & RESOURCES',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => ({
        id: link.path.substring(1), // Remove the '#' from the path
        top: document.getElementById(link.path.substring(1))?.offsetTop || 0,
      }));

      const scrollPosition = window.pageYOffset + window.innerHeight / 3;

      const currentSection = sections.reduce(
        (prev, curr) => (scrollPosition > curr.top && curr.top > prev.top ? curr : prev),
        sections[0]
      );

      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          {links.map((link, index) => (
            <li key={index} className={`${activeSection === link.path.substring(1) ? styles.active : styles.inactive}`}>
              <Link href={link.path}> {link.name} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
