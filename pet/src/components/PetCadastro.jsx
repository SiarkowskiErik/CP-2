import React, { useState } from 'react'
import Pet from './Pet'
import { DivLista } from '../style/styled'
import Formulario from './Formulario'


export default function PetCadastro() {

    const [tarefa, setTarefa] = useState([
        {
            nome: "Mia",
            idade: "11",
            raca: "vira-lata",
            tamanho:"Médio",
            nome_do_dono:"Erik",
            telefone_do_dono:"11 91111-1111",
            imagem_do_pet:"imagem",
            observacoes:"Alergico a agua"
        }
    ])
    
    const[nTarefa, setNTarefa] = useState({"nome" : "", "idade" : "","raca" : "","tamanho": "","nome_do_dono" : "","telefone_do_dono" : "","imagem_do_pet" : "", "observacoes": ""}) 

    //CRIANDO UMA FUNÇÃO PARA ADICIONAR TAREFAS
    const addTarefa = (e) => {
        e.preventDefault()
        setNTarefa({"nome" : "", "idade" : "","raca" : "","tamanho": "","nome_do_dono" : "","telefone_do_dono" : "","imagem_do_pet" : "", "observacoes": ""})
        setTarefa([...tarefa, nTarefa])
    }
    

    

    const captura = (e)=>{
        e.preventDefault()
        
        const{name,value} = e.target

        if(name === "nome"){
            setNTarefa({"nome" : value, "idade" : nTarefa.idade,"raca" : nTarefa.raca,"tamanho" : nTarefa.tamanho, "nome_do_dono" : nTarefa.nome_do_dono, "telefone_do_dono" :nTarefa.telefone_do_dono,"imagem_do_pet" : nTarefa.imagem_do_pet, "observacoes": nTarefa.observacoes})
        }else if(name === "idade"){
            setNTarefa({"nome" : nTarefa.nome, "idade" : value,"raca" : nTarefa.raca,"tamanho" : nTarefa.tamanho, "nome_do_dono" : nTarefa.nome_do_dono, "telefone_do_dono" :nTarefa.telefone_do_dono,"imagem_do_pet" : nTarefa.imagem_do_pet, "observacoes": nTarefa.observacoes})
        }else if(name === "raca"){
            setNTarefa({"nome" : nTarefa.nome, "idade" : nTarefa.idade,"raca" : value,"tamanho" : nTarefa.tamanho, "nome_do_dono" : nTarefa.nome_do_dono, "telefone_do_dono" :nTarefa.telefone_do_dono,"imagem_do_pet" : nTarefa.imagem_do_pet, "observacoes": nTarefa.observacoes})
        }else if(name=="tamanho"){
            setNTarefa({"nome" : nTarefa.nome, "idade" : nTarefa.idade,"raca" : nTarefa.raca,"tamanho" : value, "nome_do_dono" : nTarefa.nome_do_dono, "telefone_do_dono" :nTarefa.telefone_do_dono,"imagem_do_pet" : nTarefa.imagem_do_pet, "observacoes": nTarefa.observacoes})
        }else if(name=="nome_do_dono"){
            setNTarefa({"nome" : nTarefa.nome, "idade" : nTarefa.idade,"raca" : nTarefa.raca,"tamanho" : nTarefa.tamanho, "nome_do_dono" : value, "telefone_do_dono" :nTarefa.telefone_do_dono,"imagem_do_pet" : nTarefa.imagem_do_pet, "observacoes": nTarefa.observacoes})
        }else if(name=="telefone_do_dono"){
            setNTarefa({"nome" : nTarefa.nome, "idade" : nTarefa.idade,"raca" : nTarefa.raca,"tamanho" : nTarefa.tamanho, "nome_do_dono" : nTarefa.nome_do_dono, "telefone_do_dono" : value,"imagem_do_pet" : nTarefa.imagem_do_pet, "observacoes": nTarefa.observacoes})
        }else if(name=="imagem_do_pet"){
            setNTarefa({"nome" : nTarefa.nome, "idade" : nTarefa.idade,"raca" : nTarefa.raca,"tamanho" : nTarefa.tamanho, "nome_do_dono" : nTarefa.nome_do_dono, "telefone_do_dono" : nTarefa.telefone_do_dono,"imagem_do_pet" : value, "observacoes": nTarefa.observacoes})
        }else if(name=="observacoes"){
            setNTarefa({"nome" : nTarefa.nome, "idade" : nTarefa.idade,"raca" : nTarefa.raca,"tamanho" : nTarefa.tamanho, "nome_do_dono" : nTarefa.nome_do_dono, "telefone_do_dono" : nTarefa.telefone_do_dono,"imagem_do_pet" : nTarefa.imagem_do_pet, "observacoes": value})
        }


    }

    return (
        <div>
            <DivLista>

                <Formulario
                    digit={captura}
                    novaTarefa={nTarefa}
                    adicionarNovaTarefa={addTarefa}
                />

                {tarefa.map((t, i) =>
                    <Pet
                        key={i}
                        id={i + 1}
                        nome={t.nome}
                        idade={t.idade}
                        raca={t.raca}
                        tamanho={t.tamanho}
                        nome_do_dono={t.nome_do_dono}
                        telefone_do_dono={t.telefone_do_dono}
                        imagem_do_pet={t.imagem_do_pet}
                        observacoes={t.observacoes}
                    />
                )}

            </DivLista>

        </div>
    )
}
