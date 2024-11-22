import styles from './Select.module.css'

function Select({ type, name, options, handlerChangeGenero, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{name}</label>
            <select name={name} onChange={handlerChangeGenero} value={value} >{name}

                <option>Selecione um Genero</option>

                {
                    options.map((option) => {
                        // console.log(option.cod_genero + ' - ' + option.nome_genero)   
                        return <option value={option.cod_genero}>{option.nome_genero}</option>                                      
                    })
                }
    
            </select>

        </div>
    )

}

export default Select;