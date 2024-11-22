import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./DetailFilme.module.css";
import Button from "../Button";
import miranha from "../../../public/miranha.jpg";

const DetailFilme = () => {
    // Recuperar o codigo do filme
    const { cod_filme } = useParams();
    console.log('COD: ' + cod_filme)

    // Cria o state para armazenar o detalhe do filme
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);

    // Recuperando os dados do filme para a exibição
    useEffect(() => {
        // Verificar se o cod_Filme está definido antes de fazer o fetch
        if (cod_filme) {
            fetch(`http://localhost:5000/detailfilme/${cod_filme}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                },
            })
                .then((resp) => {
                    console.log(resp)
                    if (!resp.ok) {
                        throw new Error('Erro ao buscar o filme');
                    }
                    return resp.json();
                })
                .then((data) => {
                    setMovie(data.data);
                    console.log('Dados do filme:' + data.data);
                })
                .catch((err) => {
                    console.error(err);
                    setError(true);
                });
        }
    }, [cod_filme]);



    return (
        <div className={style.grid}>
            <div className={style.container_img}>
                <img className={style.img_movie_detail} src={miranha} alt='Capa do filme' />
            </div>

            <div className={style.info}>
                <span className={style.titulo}>Nome: {movie.nome_Filme}</span>
                <span className={style.autor}>Nome do diretor: {movie.diretor_Filme}</span>
                <span className={style.descricao}>Descrição: {movie.descricao_Filme}</span>

                <div className={style.container_buttons}>
                    <Button label='EDITAR' router='/UpdateFilme/' cod_filme={cod_filme}/>
                    <Button label='EXCLUIR'  />
                </div>
            </div>
        </div>
    );
};

export default DetailFilme;
