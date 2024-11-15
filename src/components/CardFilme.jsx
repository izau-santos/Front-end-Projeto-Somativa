import style from "./CardFilme.module.css";

import Button from './Button'

const CardFilme = ({ titulo, autor, imagem, cod_filme }) => {

    return (
        <div className={style.filmeCard}>
            <h3 className={style.titulo}>Nome: {titulo}</h3>
            <p className={style.autor}>Diretor: {autor}</p>

            <img className={style.img} src={imagem} alt={titulo} title={titulo} />
            <Button label='Detalhes' router='/DetailFilme/' cod_filme={cod_filme}/>
        </div>
    );
};

export default CardFilme;