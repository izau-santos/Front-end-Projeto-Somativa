/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import style from './UpdateFilme.module.css';
import Input from '../forms/Input';
import Select from '../forms/Select';
import Button from '../forms/Button';

const UpdateFilmes = () => {
    /* CRIAÇÃO DO STATE DOS DADOS DOS FILMES */
    const [movie, setMovie] = useState({});

    /* RECUPERA O CÓDIGO ENVIADO PELO BOTÃO */
    const { cod_filme } = useParams();

    /* OBJETO DE NAVEGAÇÃO */
    const navigate = useNavigate();

    /* STATE DE DADOS DOS GÊNEROS VINDOS DO BACK-END */
    const [genres, setGenres] = useState([]);

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO FILME, DIRETOR E DESCRIÇÃO) */
    function handlerChangeMovie(event) {
        setMovie({ ...movie, [event.target.name]: event.target.value });
    }

    /* CAPTURA OS DADOS DO SELECT */
    function handleChangeGenre(event) {
        setMovie({ ...movie, cod_genero: event.target.value });
    }

    /* RECUPERA OS DADOS DE GÊNEROS DO BACK-END */
    useEffect(() => {
        fetch('http://localhost:5000/listagemGeneros', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setGenres(data.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar gêneros:', error);
            });
    }, []);

    /* RECUPERA OS DADOS DO FILME DO BACK-END */
    useEffect(() => {
        fetch(`http://localhost:5000/detailfilme/${cod_filme}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                // console.log('TESTE: ' + data.data.cod_Filme)
                setMovie(data.data);
            })
            .catch((err) => console.error('Erro ao buscar filme:', err));
    }, [cod_filme]);

    /* ALTERAÇÃO DOS DADOS DO FILME */
    function updateMovie(movie) {
        fetch('http://localhost:5000/alterarFilme', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
            .then((resp) => resp.json())
            .then(() => {
                navigate('/favoritos', { state: 'FILME ALTERADO COM SUCESSO!' });
            })
            .catch((err) => console.error('Erro ao alterar filme:', err));
    }

    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        updateMovie(movie);
    }

    return (
        <section className={style.create_book_container}>
            <h1>ALTERAÇÃO DE FILMES</h1>

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="nome_Filme"
                    id="nome_Filme"
                    placeholder="Digite o título do filme"
                    text="Título do filme"
                    handlerChangeMovie={handlerChangeMovie}
                    value={movie.nome_Filme || ''}
                />

                <Input
                    type="text"
                    name="diretor_Filme"
                    id="diretor_Filme"
                    placeholder="Digite o nome do diretor"
                    text="Diretor do filme"
                    handlerChangeMovie={handlerChangeMovie}
                    value={movie.diretor_Filme || ''}
                />

                <Input
                    type="text"
                    name="descricao_Filme"
                    id="descricao_Filme"
                    placeholder="Digite uma descrição para o filme"
                    text="Descrição"
                    handlerChangeMovie={handlerChangeMovie}
                    value={movie.descricao_Filme || ''}
                />

                <Select
                    name="Genero"
                    
                    options={genres}
                    handlerChangeGenero={handleChangeGenre}
                    value={movie.cod_genero || ''}
                />

                <Button rotulo="Editar Filme" />
            </form>
        </section>
    );
};

export default UpdateFilmes;
