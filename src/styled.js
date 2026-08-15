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
    button{
         
        color: red;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
       
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
        align-items: center
        
    }
`

export const DivCard = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;

  width: 280px;
  height: 200px;
  padding: 10px;
  margin: 10px 20px 0px 20px;
  border-radius: 10px;
  font-size: 12px;

  /* Sombra com efeito Neon Roxo */
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
  
`;

export const DivImg = styled.div`
    display: flex;
   margin: 10px 0px 10px 10px;
    
   span{
    color: red;
   }

   div{
    display: flex;
    flex-direction: column;
    align-items: center;


   }

   p{width:280px}

   h1{
    
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
`

export const Divv = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;

  width: 260px;
  height: 180;
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

