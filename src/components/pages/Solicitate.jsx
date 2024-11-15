import React from "react";
import { useState, useEffect } from "react";
import style from "./Solicitate.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const Solicitate = () => {
    /* DEFINE OS STATES DADOS DOS GÊNEROS */
    const [generos, setGeneros] = useState([]);

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DO FILME/SÉRIE */
    const [movie, setMovie] = useState({});

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO FILME, DIRETOR, ETC.) */
    function handlerChangeMovie(event) {
        setMovie({ ...movie, [event.target.name]: event.target.value });
        console.log(movie)
    }

    /* HANDLER DE GÊNEROS */
    function handlerChangeGenero(event) {
        setMovie({ ...movie, cod_genero: event.target.value });
        console.log(generos);
    }

    /* Recupera os dados de gêneros da API */
    useEffect(() => {
        fetch('http://localhost:5000/listagemGeneros', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        }).then((response) => 
            response.json()

        ).then((data) => {
                console.log('DATA:' + data);
                setGeneros(data.data); // Armazena os gêneros retornados pela API
            }
        )
            .catch(
                (error) => {
                    console.log(error);
            }
        );
    }, []);

    /* INSERÇÃO DOS DADOS DE FILME/SÉRIE */
    function createMovie(movie) {

        //console.log(JSON.stringify(movie))

        fetch('http://localhost:5000/inserirFilme', { // rota do back-end para inserir filme
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(movie)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                // navigate('/filmes_series', { state: 'FILME/SÉRIE CADASTRADO COM SUCESSO!' });
            })
            .catch((err) => { console.log(err) });
    }

    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        createMovie(movie); // Chama a função de inserção de filme
    }

    return (
        <section className={style.solicitate_container}>
            <h1> Solicitar F/S </h1>
            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="nome_Filme"
                    placeholder="Digite o nome do filme"
                    text="Nome do filme"
                    handlerChangeMovie={handlerChangeMovie}
                />
                <Input
                    type="text"
                    name="diretor_Filme"
                    placeholder="Digite o nome do diretor"
                    text="Nome do diretor"
                    handlerChangeMovie={handlerChangeMovie}
                />
                <Input
                    type="text"
                    name="descricao_Filme"
                    placeholder="Digite a descrição do filme"
                    text="Descrição"
                    handlerChangeMovie={handlerChangeMovie} 
                    />

                <Select
                    name="Genero"
                    text="Escolha um gênero do filme"
                    options={generos} // Alimenta o Select com os dados de gêneros
                    handlerChangeGenero={handlerChangeGenero}
                />
                <Button
                    rotulo="Cadastrar Filme/Série"
                />
            </form>
        </section>
    );
};

export default Solicitate;
