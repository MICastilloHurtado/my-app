import style from './Projecst.module.css'
import { brujula, foods, food, movies } from '../../images'

export default function Projects () {
    return (
        <section className={style.containerMax}>
            <h1 className={style.h1}>Proyectos</h1>
      <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={movies} className={style.img} alt='Project image'/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>MoviesPlay</h1>
          <p className={style.p}>24/08/2023</p>
          <p className={style.p2}>Aplicación web full stack para comprar series y películas con un dashboard de administrador (el administador puede activar, desactivar o eliminar peliculas y series, ademas puede ver todas las ventas), carrito de compras, autenticacion de terceros, visualicacion de  contenido, uso de localStorage, paginado, filtrados y ordenamientos, barra de busqueda, (para comprar en el carrito utilizar numero de tarjeta: 4242424242424242424242) 
          <br/>
          Logros Destacados: Integración de pasarela de pagos con Stripe, dinamismo en la página.
          <br/>
          Enlace: <a href='https://luiggi2092.github.io/MoviePlayFront ' target='_blank'>Click aquí</a>

          </p>
        </div>
      </div>

      <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={food} className={style.img} alt='Project image'/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>api foods</h1>
          <p className={style.p}>02/08/2023</p>
          <p className={style.p2}>está enfocado en el desarrollo de una API de recetas saludables para mantener un nivel de alimentación saludable, seleccionando entre cientos de recetas que te permitan facilitar tu alimentación diaria de manera eficiente y efectiva. Podrás buscar la receta de tu agrado, y seguir el paso a paso de cómo puedes prepararla, y los tipos de dietas que aplica esta receta de comida. {'(Dado el caso de que no carguen las recetas es porque llegó al limite de peticiones de la api, pero la puedes ver al otro dia si es de tu interes)'}<br/>
          Enlace: <a href='https://food-frontend-puce.vercel.app' target='_blank'>Click aquí</a>
          </p>
        </div>
      </div>

      <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={brujula} className={style.img} alt='Project image'/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>Api Paises</h1>
          <p className={style.p}>13/07/2023</p>
          <p className={style.p2}>Aplicación web full stack para buscar , visualizar, filtrar, y ver que actividades hay en cualquier país del mundo, además dispones de la información turística y territorial de cualquier país que se te venga a la mente, también puedes crear y eliminar tus propias actividades para los países.
          <br/>
          Tecnologías Utilizadas: React, Node.js, Express, PostgreSQL y Sequelize.
          <br/>
          Enlace: <a href='https://proyecto-countries.vercel.app' target='_blank'>Click Aquí</a>


          </p>
        </div>
      </div>

            <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={foods} className={style.img} alt='Project image'/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>Rick and Morthy api</h1>
          <p className={style.p}>24/06/2023</p>
          <p className={style.p2}>Mi primer proyecto de programacion. Aplicación web full stack que consume la API de Rick and Morty para mostrar información sobre los personajes de la serie y permitir a los usuarios buscar, ver detalles y guardar personajes favoritos en una base de datos, ademas cuenta con formulario de registro y acceso.
          <br/>
          Tecnologías Utilizadas: React, Node.js, Express, PostgreSQL y Sequelize.
          <br/>
          Enlace: <a href='https://github.com/MICastilloHurtado/Rick_and-morty' target='_blank'>Click aquí</a>

          </p>
        </div>
      </div>
            
      
        </section>
    )
}