import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteFilme() {
    const { cod_filme } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/excluirFilme/${cod_filme}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (!data.errorStatus) {
                    navigate('/favoritos', { state: 'filme excluído com sucesso!' });
                } else {
                    console.error("Erro ao excluir filme:", data.mensageStatus);
                }
            })
            .catch((err) => console.error("Erro na requisição:", err));
    }, [cod_filme, navigate]);

    return <div />;
}

export default DeleteFilme;