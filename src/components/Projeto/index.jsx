import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com Vuejs</Paragrafo>

    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
