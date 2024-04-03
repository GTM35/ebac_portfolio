import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  display: block;
  margin-bottom: 8px;
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: orange;
  color: #fff;
`

function Teste() {
  return (
    <>
      <Botao fontSize="14px" principal>
        Enviar
      </Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo principal as="a">
        Não clique aqui
      </BotaoPerigo>
    </>
  )
}

export default Teste
