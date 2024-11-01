import style from "./CardFilme.module.css";
const FilmeBooks = ({ titulo, autor, imagem, cod_filme }) => {

    return (
        <div className={style.filmeCard}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>

            <img className={style.img} src={imagem} alt={titulo} title={titulo} />
        </div>
    );
};

export default FilmeBooks;