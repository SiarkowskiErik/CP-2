import React from 'react'
import { Cadastro, Teste, Fundo } from '../style/styled'
export default function Formulario(props) {
    
    return (
        <div>



                 
            <form method="post" onSubmit={props.adicionarNovaTarefa} >
            <Fundo>
                <fieldset>
                
                    <legend>Cadastrar Pet</legend>
                    <Cadastro>
                        <div>
                            <Teste>
                            <label>Nome</label>
                            <input type="text" name="nome" placeholder="Nome" value={props.novaTarefa.nome} onChange={props.digit}/>
                            </Teste>
                        </div>
                        <div>
                            <Teste>
                            <label>Idade</label>
                            <input type="text" name="idade" placeholder="Idade" value={props.novaTarefa.idade} onChange={props.digit}/>
                            </Teste>
                        </div>
                        <div>
                            <Teste>
                            <label>Raça</label>
                            <input type="text" name="raca"  placeholder="Raça" value={props.novaTarefa.raca} onChange={props.digit}/>
                            </Teste>
                        </div>
                        <div>
                            <Teste>
                            <label>Tamanho</label>
                            <input type="text" name="tamanho"  placeholder="Tamanho" value={props.novaTarefa.tamanho} onChange={props.digit}/>
                            </Teste>
                        </div>
                    
                    
                        <div>
                            <Teste>
                            <label>Nome do dono</label>
                            <input type="text" name="nome_do_dono" placeholder="nome_do_dono" value={props.novaTarefa.nome_do_dono} onChange={props.digit}/>
                            </Teste>
                        </div>
                        <div>
                            <Teste>
                            <label>Telefone do dono</label>
                            <input type="text" name="telefone_do_dono"  placeholder="Telefone_do_dono" value={props.novaTarefa.telefone_do_dono} onChange={props.digit}/>
                            </Teste>
                        </div>
                    <div>
                        <Teste>
                        <label>Imagem do pet</label>
                        <input type="file" name="imagem_do_pet" draggable="true" value={props.novaTarefa.imagem_do_pet} onChange={props.digit}/>
                        </Teste>
                    </div>
                    <div>
                        <Teste>
                        <label>Observações</label>
                        <textarea name="observacoes" cols="30" rows="4" placeholder="Observacoes" value={props.novaTarefa.observacoes} onChange={props.digit}/>
                        </Teste>
                    </div>
                    <div>
                        <input type="submit" value="Adicionar" />
                    </div>
                    </Cadastro>
                </fieldset>
            </Fundo>
            </form>



       </div>
    )
}