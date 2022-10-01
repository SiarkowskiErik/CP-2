import React from 'react'
import { DivTarefa } from '../style/styled'

export default function Pet(props) {
    return (

        <DivTarefa>
            <h2>{props.nome}</h2>
            <p>{props.idade}</p>
            <p>{props.raca}</p>
            <p>{props.tamanho}</p>
            <p>{props.nome_do_dono}</p>
            <p>{props.telefone_do_dono}</p>
            <p>{props.imagem_do_pet}</p>
            <img src={props.imagem_do_pet} alt='imagem do pet'/>
            <p>{props.observacoes}</p>

        </DivTarefa>
    )
}