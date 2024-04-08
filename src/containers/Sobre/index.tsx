import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, similique
      quae obcaecati quis, totam pariatur voluptate optio officiis assumenda eos
      nam atque. Quia quis suscipit corporis nihil laboriosam, labore excepturi?
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=GTM35&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GTM35&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
