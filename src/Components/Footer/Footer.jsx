import {twiter, instagram, linkedlin, github} from '../../images'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer () {
    return (
        <footer className={style.containerMax}>
            <Link to='https://twitter.com/Marcos_mich02' target='_blank'>
            <img src={twiter} className={style.logo} alt='imagen'/>
            </Link>
            <Link to='https://www.instagram.com/marcos_bpro/' target='_blank'>
            <img src={instagram} className={style.logo} alt='imagen'/>
            </Link>
            <Link to='https://github.com/MICastilloHurtado' target='_blank'>
            <img src={github} className={style.logo1} alt='imagen'/>
            </Link>
            <Link to='https://www.linkedin.com/in/marcos-castillo-295585268/' target='_blank'>
            <img src={linkedlin} className={style.logo} alt='imagen'/>
            </Link>
        </footer>
    )
}