import style from './Blog.module.css'

export default function Blog () {

    return (
        <section className={style.containerMax}>
        <h1 className={style.h1}>Blog</h1>

        <div className={style.blogContainer}>
            <h1 className={style.title}>Mis pasiones y mis aficciones</h1>
            <p className={style.p2}>Soy una persona muy proactiva. Siempre me ha gustado superarme y llevarme al límite en todo lo que hago. Este empoderamiento personal comenzó con el gimnasio. Me gusta mucho levantar pesas y jugar baloncesto. También tengo conocimientos sobre inversiones de todo tipo: Bitcoin, ETF, bolsa de valores, trading, binarias, etc. Siempre suelo investigar e indagar a fondo cuando se trata de algo que capta mi atención, como lo hizo la programación también. Empecé viendo videos en YouTube y cuando creé mi primer 'Hola Mundo' en un archivo index.html, me fascinó y no podía creerlo. Decidí estudiar más a fondo. Hoy en día me siento muy satisfecho y orgulloso de mí mismo por todo lo que he logrado hasta ahora. Mi próximo reto es conseguir, como mínimo, un nivel B2 de inglés.</p>
        </div>

        <div className={style.blogContainer}>
            <h1 className={style.title}>Como me sienta la busqueda laboral sin experiencia?</h1>
            <p className={style.p2}>Siento que es como una montaña rusa de emociones. Un día, completas tu preparación para ser desarrollador web y te sientes genial por dominar nuevas habilidades.<br/> Sin embargo, al siguiente día, puedes sentirte un poco desanimado porque aún no te han llamado para ese trabajo que creías perfecto para ti. Pero sé que esto es solo parte del juego mental. La disciplina y la constancia serán clave para lograrlo al final.</p>
        </div>

        <div className={style.blogContainer}>
            <h1 className={style.title}>Como desarrollé mi portafolio?</h1>
            <p className={style.p2}>Cuando terminé mi cursada como desarrollador web, me di cuenta de la importancia que tenía el contar con un portafolio y de seguir adquiriendo conocimientos para no quedarme atrás. Por lo tanto, aprovechando mis habilidades de programación, desarrollé este sencillo portafolio con React, con el fin de mostrar un poco de lo que soy capaz.</p>
        </div>

    </section>
    )
}