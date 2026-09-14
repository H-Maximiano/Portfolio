import styled from 'styled-components';

export const ContainerProjetos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
`;

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const GridProjetos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  width: 100%;
  max-width: 1100px;
`;

export const CardContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: #fff;

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

export const ImgProjeto = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-weight: bold;
`;