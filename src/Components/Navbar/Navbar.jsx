import { Link } from 'react-router-dom';
import style from './Navbar.module.css'
import { useEffect, useState } from 'react'

const Links = [
  { route: '/', label: 'Home' },
  { route: '/projects', label: "Projects" },
  { route: '/blog', label: "Blog" },
  { route: '/contact', label: "Contact" }
]

export default function Navigation() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <div className={style.bars} onClick={toggleMenu}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      <nav className={`${style.navbar} ${menuVisible ? style.visible : ''}`}>
        <ul className={style.ul}>
          {Links.map(({ route, label }) => (
            <li className={style.li} key={route}>
              <Link href={route} className={style.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
