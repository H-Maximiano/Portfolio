import { useEffect, useState } from 'react'
import { Hedear, Container, DivImg, ImgDePerfil, DivCard, ImgIcon,Divv,ImgDeProjetos,DivCard2 } from "./styled"
import {FotoDePerfil,IconReact,HTML5,css,CSharp,docker,git,Cardapio,Cadastro,netflix} from './fuctions/FotosDeProjetos'
import { Typewriter } from './fuctions/Typewriter'


const fotos = [IconReact, HTML5, css, CSharp, docker, git]
const fotosDeProjetos = [Cardapio, Cadastro, netflix]

const habilidade = [
  { nome: 'java script', img: 'foto' },
  { nome: 'Python', img: 'foto' },
  { nome: 'C#', img: 'foto' },
  { nome: 'node', img: 'foto' },
  { nome: 'git', img: 'foto' },
  { nome: 'css', img: 'foto' },
  { nome: 'HTML', img: 'foto' },
  { nome: 'React', img: IconReact },
  { nome: 'Docker', img: IconReact },
  { nome: 'jwt', img: IconReact },
]

const titulos = [
  'Desenvolvedor Full Stack | React & Node.js',
'Construindo aplicações do Zero ao Deploy',
'Código limpo, estruturado e funcional',
'Criando experiências digitais com C# e Python'
]

// Custom Hook com Arrow Function
const useCarrossel = (lista, intervalo = 3000) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const temporizador = setInterval(() => {
      setIndex((indexAnterior) =>
        indexAnterior === lista.length - 1 ? 0 : indexAnterior + 1
      )
    }, intervalo)

    return () => clearInterval(temporizador)
  }, [lista.length, intervalo])

  return index
}

function App() {
  // Chamada limpa do hook (substitui os useStates manuais)
  const indexFoto = useCarrossel(fotos, 3000)
  const indexProjetos = useCarrossel(fotosDeProjetos, 4000)

  const IconeAtual = fotos[indexFoto]
  const ProjetoAtual = fotosDeProjetos[indexProjetos]

  return (
    <>
      <Hedear>
        <h2><span>H</span>udson</h2>
        <div>
          <button>Home</button>
          <button>Projetos</button>
        </div>
      </Hedear>

      <Container>
        <DivImg>
          <ImgDePerfil src={FotoDePerfil} alt="Foto de perfil" />

          <p>
            Olá! Sou Hudson Maximiano e estou em transição de carreira da área 
            comercial para a tecnologia. Programo pelo prazer de aprender e pelo 
            desafio de contornar problemas. Para mim, cada linha de código é um 
            avanço, um quebra-cabeça que se encaixa, e me dedico a isso porque é 
            o que amo de verdade, e não um fardo. Minha paixão sincera por aprender
            e codificar é a minha maior motivação e a força por trás do meu trabalho.
          </p>
          
          <div>
            <h1><span>P</span>rogramador Full</h1>  
            <h1> <span>S</span>tack</h1>
            <ImgIcon src={IconeAtual} alt="Ícone de tecnologia" />
          </div>
        </DivImg>

        <div>
           <Divv>
            <h1>Projetos</h1>
            <ImgDeProjetos src={ProjetoAtual} alt="Foto do projeto" />
          </Divv>
         

          <Divv>
            <Typewriter frases={titulos} />
          </Divv>
    
          <DivCard2>
            <h1><span>H</span>abilidades</h1>
            <div>
              
              <ul>
                {habilidade.map((item, index) => (
                  <h3 key={index}>{item.nome}</h3>
                ))}
              </ul>
            </div>
          </DivCard2>
        </div>
      </Container>
    </>
  )
}

export default App