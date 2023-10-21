import style from './Home.module.css'
import photo from '../../images/WhatsApp Image 2023-05-21 at 6.38.49 PM.jpeg'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {brujula, movies, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9} from '../../images'

export default function Home () {

    const descargar = () => {
        const enlace = document.createElement('a');
        enlace.href = '/Hoja de vida Marcos (5).pdf'; 
        enlace.download = 'HojadevidaMarcos.pdf';
        enlace.click();
      };

    const [fetchData, setPost] = useState('')

    useEffect(() =>{
        axios.get('https://portafolio-back-ld0c.onrender.com/post')
        .then(res => {
            setPost(res.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
          });        
    }, [])
   

    return (
        <section>
            <div className={style.container1}>
        <div className={style.div1}>
        <img src={photo} alt='Imagen' className={style.imagen}/>
        </div>
        <div className={style.div2}>
        <h1 className={style.bienvenidos}>Bienvenidos, yo soy Marcos y soy programador full stack.</h1>
        <p className={style.p1}>Mi nombre es Marcos Castillo, tengo 22 años y vivo en Medellín. 
         Me gusta mucho programar, y me gustaría ser parte de un equipo de trabajo ágil y dinámico. Actualmente,
         soy graduado de Henry y estoy en búsqueda laboral. Échale un vistazo a mis proyectos.
        </p>
         <button onClick={descargar} className={style.all}>Descargar Hoja de Vida</button>
        </div>
      </div>
      <div className={style.container2}>
        <h1 className={style.bienvenidos}>Tecnologías</h1>
        <div className={style.iconos}>
          <img src={icon1} className={style.icono} alt="Icono de Redux"/>
          <img src={icon2} className={style.icono} alt="Icono de Redux"/>
          <img src={icon3} className={style.icono} alt="Icono de Redux"/>
          <img src={icon4} className={style.icono} alt="Icono de Redux"/>
          <img src={icon5} className={style.icono} alt="Icono de Redux"/>
          <img src={icon6} className={style.icono} alt="Icono de Redux"/>
          <img src={icon7} className={style.icono} alt="Icono de Redux"/>
          <img src={icon8} className={style.icono} alt="Icono de Redux"/>
          <img src={icon9} className={style.icono} alt="Icono de Redux"/>
        </div>
      </div>
      <div className={style.container3}>
        <div className={style.minicontainer}>
          <p style={{fontSize:'22px', fontFamily:'var(--primary-font)', fontWeight:'700'}}>Publicaciones recientes</p>
        <Link to='/blog'>
          Mirar todos las publicaciones
        </Link>
        </div>
        {fetchData && fetchData.allPost.slice(0, 2).map((post) => {
    return (
        <div className={style.cajaDeComentarios} key={post.id}>
            <h1 className={style.title}>{post.title}</h1>
            <p className={style.p2}>{post.date.slice(0, 10)}</p>
            <p className={style.p2}>{post.text}</p>
        </div>
         );
        })}
        
      </div>

      <div className={style.container4}>
      <p style={{fontSize:'22px', fontFamily:'var(--primary-font)', fontWeight:'700', margin:'0 0 40px 0'}}>Proyectos recientes</p>
      <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={movies} className={style.img} alt='image movie'/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>MoviesPlay</h1>
          <p className={style.p}>24/08/2023</p>
          <p className={style.p2}>Aplicación web full stack para comprar series y películas con un dashboard de administrador (el administador puede activar, desactivar o eliminar peliculas y series, ademas puede ver todas las ventas), carrito de compras, autenticacion de terceros, visualicacion de  contenido, uso de localStorage, paginado, filtrados y ordenamientos, barra de busqueda.
          Logros Destacados: Integración de pasarela de pagos con Stripe, dinamismo en la página.
          <br/>
          Enlace: <a href='https://luiggi2092.github.io/MoviePlayFront ' target='_blank' rel='noreferrer'>Click aquí</a>

          </p>
        </div>
      </div>
      <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={brujula} className={style.img} alt='image brujula'/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>Api Paises</h1>
          <p className={style.p}>13/07/2023</p>
          <p className={style.p2}>Aplicación web full stack para buscar , visualizar, filtrar, y ver que actividades hay en cualquier país del mundo, además dispones de la información turística y territorial de cualquier país que se te venga a la mente, también puedes crear y eliminar tus propias actividades para los países.
          <br/>
          Tecnologías Utilizadas: React, Node.js, Express, PostgreSQL y Sequelize.
          <br/>
          Enlace: <a href='https://proyecto-countries.vercel.app' target='_blank' rel='noreferrer'>Click Aquí</a>
          </p>
        </div>
        </div>
      </div>
        </section>
    )
}