import { Link } from 'react-router-dom';
import style from './Navbar.module.css'
import { useEffect, useState } from 'react'

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
          <Link to='/' className={style.link}>
          <li className={style.li}>Home</li>
          </Link>
          <Link to='/projects' className={style.link}>
          <li className={style.li}>Proyectos</li>
          </Link>
          <Link to='/blog' className={style.link}>
          <li className={style.li}>Blog</li>
          </Link>
          <Link to='/contact' className={style.link}>
          <li className={style.li}>Contacto</li>
          </Link>
        </ul>        
      </nav>
    </header>
  )
}
