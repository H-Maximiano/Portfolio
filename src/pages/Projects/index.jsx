

// Imports dos Styled Components
import { 
  ContainerProjetos, 
  Titulo, 
  GridProjetos, 
  CardContainer, 
  ImgProjeto, 
  Overlay 
} from './styled';

// Imports das Imagens (ajustado para subindo 2 níveis até src/assets)
import habitos from '../../assets/habitos.png';
import rendimentos from '../../assets/rendimentos.png';
import Cardapio from '../../assets/cardapioLanchonete.png';


 function Projetos() {
  const abrirProjeto = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ContainerProjetos>
      <Titulo>Meus Projetos</Titulo>

      <GridProjetos>
        {/* Card 1 - Projeto AWS Amplify */}
        <CardContainer onClick={() => abrirProjeto('https://main.d2zxftzi9qllc2.amplifyapp.com')}>
          <ImgProjeto src={habitos} alt="Gerenciador de Hábitos" />
          <Overlay className="overlay">
            <span>Gerenciador de Hábitos</span>
            <small>Clique para acessar 🚀</small>
          </Overlay>
        </CardContainer>

        {/* Card 2 - Calculadora / Rendimentos */}
        <CardContainer onClick={() => abrirProjeto('https://main.d2rwc46s0wioju.amplifyapp.com')}>
          <ImgProjeto src={rendimentos} alt="Calculadora de Rendimentos" />
          <Overlay className="overlay">
            <span>Calculadora de Rendimentos</span>
            <small>Clique para acessar 🚀</small>
          </Overlay>
        </CardContainer>

        {/* Card 3 - Cardápio */}
        <CardContainer onClick={() => abrirProjeto('https://main.d115xhugfsw31r.amplifyapp.com')}>
          <ImgProjeto src={Cardapio} alt="Cardápio Digital" />
          <Overlay className="overlay">
            <span>Cardápio Digital</span>
            <small>Clique para acessar 🚀</small>
          </Overlay>
        </CardContainer>

      
      </GridProjetos>
    </ContainerProjetos>
  );
}

export default Projetos