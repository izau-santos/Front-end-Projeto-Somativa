import React from "react";
import style from "./Solicitate.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const Solicitate = () => {

    return (
        <section className={style.solicitate_container}>
            <h1> Solicitar F/S </h1>

            <Input
                type="text"
                name="txt_filme"
                placeHolder="Digite o nome do filme"
                text="Titulo do filme"
            />
            <Input
                type="text"
                name="txt_diretor"
                placeHolder="Digite o nome do diretor"
                text="Nome do diretor"
            />
            <Input
                type="text"
                name="txt_horas"
                placeHolder="Digite a duração do filme em minutos"
                text="Duração"
            />

            <Input
                type="text"
                name="txt_elenco"
                placeHolder="Digite o elenco (Principais)"
                text="Elenco/Principais"
            />

            <Select
                name="categoria do Filme/Serie"
                text="Escolha uma categoria do filme"
            />

            <Button
                rotulo="Cadastrar Filme/Serie"
            />


        </section>
    )
}

export default Solicitate 