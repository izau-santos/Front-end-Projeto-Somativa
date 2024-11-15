import React from "react";
import style from "./Home.module.css";

const Home = () => {

    return (
        <>
            <div className={style.titulos}>
                <h1>Bem vindo ao <span> PIRAFLIX </span></h1>
                <p> Seu site de Filmes e Series <span> GRATUITA </span>!</p>
            </div>
            <div className={style.container}>
                <section className={style.home_container}>
                    <img className={style.home_container} src="./vingadores.jpg" />
                    <img className={style.home_container} src="./piratas.jpg" />
                    <img className={style.home_container} src="./miranha.jpg" />
                </section >
            </div>
        </>
    )

}

export default Home