import { useEffect, useState } from "react"
import axios from "axios"
import style from './Blog.module.css'

export default function Blog () {

    const [fetchData, setFetch] = useState('')

    useEffect(() =>{
        axios.get('https://portafolio-back-ld0c.onrender.com/post')
        .then(res => {
            setFetch(res.data)
        })
        .catch(error => {
            console.error('error:',error)
        })
    },[])



    return (
        <section className={style.containerMax}>
        <h1 className={style.h1}>Blog</h1>

        {fetchData
        ? fetchData.allPost.map((post) => {
    return (
        <div className={style.blogContainer} key={post.id}>
            <h1 className={style.title}>{post.title}</h1>
            <p className={style.p}>{post.date.slice(0, 10)}</p>
            <p className={style.p2}>{post.text}</p>
        </div>
         );
        }):
        <h1>Cargando publicaciones...</h1>}    
    </section>
    )
}