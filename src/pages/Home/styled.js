import styled from 'styled-components'

export const Hedear = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px 0px 20px;
    gap: 10px;
    div{
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        box-shadow: 
            0px 0px 5px #6d009b,
            0px 0px 10px #6d009b,
            0px 0px 10px #6d009b;
    button {
  color: #ef0014; 
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 20px;
  height: auto;
  width: auto;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  
  &:hover {
    color: #ffffff;
    background-color: rgba(130, 87, 229, 0.2); 
  }

  
  &:active {
    color: #ff334b;
    background-color: rgba(130, 87, 229, 0.4);
    transform: scale(0.95); 
  }
}
    
    }

    h2{
       font-family: 'Rubik Distressed', display;
    }
    span{
        color: red;
    
    }
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    div{
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
`

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;

  width: 100%;
  max-width: 280px;
  height: 200px;
  padding: 10px;
  margin: 10px 20px 0px 20px;
  border-radius: 10px;
  font-size: 12px;

  box-shadow: 
    0px 0px 5px #6d009b,
    0px 0px 10px #6d009b,
    0px 0px 15px #6d009b;
`

export const DivImg = styled.div`
    display: flex;
    margin: 10px 0px 10px 10px;
    
    span{
        color: red;
    }

    /* No celular, joga a foto para cima e o texto para baixo centralizado */
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 10px;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p{
        max-width: 280px;
        word-wrap: break-word;
    }
`

export const ImgDePerfil = styled.img`
    width: 220px;
    height: 220px;
    margin: 0px 20px 20px 10px;
    border-radius: 30px;
   
    box-shadow: 
        0px 0px 5px #6d009b,
        0px 0px 20px #6d009b,
        0px 0px 20px #6d009b;

    @media (max-width: 768px) {
        margin: 0px 0px 20px 0px;
    }
`

export const Divv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;

    width: 260px;
    height: 180px;
    padding: 10px;
    margin: 10px 20px 0px 20px;
    border-radius: 10px;
    font-size: 12px;
`

export const ImgIcon = styled.img`
    width: 80px;
    height: 80px;
    padding: 10px;
    border-radius: 30px;
    margin-bottom: 40px;
    
    box-shadow: 
        0px 0px 5px #6d009b,
        0px 0px 20px #6d009b,
        0px 0px 20px #6d009b;
`

export const ImgDeProjetos = styled.img`
    width: 280px;
    height: 280px;
    margin: 0px 20px 20px 10px;
    border-radius: 30px;
   
    box-shadow: 
        0px 0px 5px #6d009b,
        0px 0px 20px #6d009b,
        0px 0px 20px #6d009b;
`

export const DivCard2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;

    width: 100%;
    max-width: 190px;
    height: 200px;
    padding: 10px;
    margin: 10px 20px 0px 20px;
    border-radius: 10px;
    font-size: 12px;

    box-shadow: 
        0px 0px 5px #6d009b,
        0px 0px 10px #6d009b,
        0px 0px 15px #6d009b;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  
    ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
  
    h1 {
        font-family: 'Rubik Distressed', display;
        span{
            color: red;
        }
    }
`