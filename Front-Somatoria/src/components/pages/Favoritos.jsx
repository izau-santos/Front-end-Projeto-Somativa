import React, { useState, useEffect } from "react";
import FilmeCard from "../CardFilme";
import Container from "../layout/Container";
import ContainerMovie from "../layout/ContainerMovie";
import style from "../pages/favoritos.module.css"
import miranha from "../../../public/miranha.jpg"

const Favoritos = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/ListagemFilmes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log("FILMES: ", data);
                setFilms(data.data);
                console.log('filmes:' + films)
            })
            .catch((err) => {
                console.error("Erro ao buscar filmes:", err);
            });
    }, []);

    return (
        <Container>
            <section className={style.container}>
                <h1>LIST SOLICITADOS</h1>
                
                    <ContainerMovie>
                        {films.map((film) => (
                            <FilmeCard
                                cod_filme={film.cod_Filme}
                                titulo={film.nome_Filme}
                                autor={film.diretor_Filme}
                                descricao={film.descricao_Filme}
                                imagem={miranha}
                                key={film.cod_Filme}
                            />
                        ))}
                        
                    </ContainerMovie>
                
            </section>
        </Container>
    );
};

export default Favoritos;