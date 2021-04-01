import 'bootstrap/dist/css/bootstrap.css'
import ArticleAside from './ArticleAside'

const Aside = () => {
  return <aside className="container col-lg-4 bg-warning mt-lg-3">
    <h2 className="mt-5 display-4 text-center">Culture & apprentissages</h2>
    <ArticleAside languages="Français, Anglais, Italien" levels="Langue natale, Parlé couramment, niveau B2">Langues</ArticleAside>
    <ArticleAside skills="Sens du travail d'équipe - autonomie - gestion des imprévus, Conduite de projet - idéation - pitch - ouverture d'esprit" details="Intérim en production - logistique - livraison, Participation à des concours d'entreprenariat">Compétences</ArticleAside>
    <ArticleAside tags="Nature, Biomimétismes, Géopolitique, Montagne, Art, Musique, Blockchain, IPFS, Voyage, Photographie, Finance, Finance décentralisé, WEB3">Centres d'intérêts</ArticleAside>
  </aside>
}

export default Aside