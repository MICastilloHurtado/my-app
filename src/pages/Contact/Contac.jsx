import style from './Contact.module.css'
import {me} from '../../images'

export default function Contact () {
    return (
        <section className={style.containerMax}>
            <div className={style.left}>
                <div className={style.div1}>
                <h1>Email</h1>
                <h1 className={style.title}>marcos2679525@gmail.com</h1>
                </div>
                <div>
                <h1>Número</h1>
                <h1 className={style.title}>+57 3007479326</h1>
                </div>
            </div>
            <div className={style.right}>
                <img src={me} className={style.me} alt="Mi imagen"/>
            </div>
        </section>
    )
}