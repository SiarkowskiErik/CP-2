import styled from "styled-components"

export const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    padding: 20px;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
`

//CRIANDO UM MÓDULO
export const DivTarefa = styled.div`
    border : 2px solid #333;
    box-shadow : 5px 5px 5px #003f69;
    background-color: #fff;
    padding: 2vh 2vw;
    text-align:center;
    width:20vw;
    height:40vh;
    margin:5vh 30vw;
    h2,p{
            padding-bottom:1vh
        }
`
export const Cadastro = styled.fieldset`
    display: flex;
    justify-content: space-between;
    allign-items: center;
    flex-direction: column;

`
export const Teste = styled.div`
    display: flex;
    justify-content: space-between;
    allign-items: center;
    flex-direction: column;
`
export const Fundo = styled.div`
    background-color: #fff;
`