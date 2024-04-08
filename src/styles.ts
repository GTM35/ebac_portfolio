import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  body {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    padding-top: 16px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`

export default EstiloGlobal
