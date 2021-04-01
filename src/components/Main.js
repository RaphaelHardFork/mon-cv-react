import 'bootstrap/dist/css/bootstrap.css'
import ArticleMain from './ArticleMain'

const Main = () => {
        return <main className="px-4 container col-lg-8 bg-secondary mt-lg-3">
                <h2 className="mt-5 display-4 text-center">Formations</h2>
                <ArticleMain place="Alyra, l'école Blockchain" title="Formation développeur web décentralisé" date="2021" skills="JavaScript, CSS, HTML, React.js, ..."></ArticleMain>
                <ArticleMain place="Université Claude Bernard Lyon 1" title="Master en Biologie Végétale" date="2016-2018" skills="biochimie & génie génétique">Etude de la plante au travers un large
                panel de disciplines : taxonomie,
                évolution, physiologie, génétique,
                métabolomique, biologie moléculaire,
            biochimie, écologie, …</ArticleMain>
                <ArticleMain title="Licence en écologie (biologie des organismes et des populations)" date="2013-2016" skills="utilisation
        d’outils biostatistique (traitement et
        acquisition), modélisation de la
        biodiversité et de l’évolution.">Etude des interactions entre individu et
                        espèces, des modèles d’évolution,
                        d’écologie et de la biodiversité,
                        modélisation des dynamiques des
                        gènes et des populations, biologie
            moléculaire, génétique quantitative, …</ArticleMain>

                <h2 class="mt-5 display-4 text-center">Expériences professionnelles</h2>
                <ArticleMain place="IFSTTAR" placeDetails="(Aujourd'hui Université Gustave Eiffel)" title="Ingénieur d'étude" date="2018-2020" details="Poste dans le cadre d'une thèse à l'Université Paris-Est">Etude sur le béton de chanvre : Identification des molécules
                impliqué dans la prise du ciment, conduite de projet, réalisation
                d’une bibliographie et d’un plan d’expérimentation, gestion des
            données, présentation des travaux lors de colloque.</ArticleMain>
                <ArticleMain place="Neilan Laboratory of Microbial and Molecular Diversity" title="Stage de recherche" date="2018">Compétences acquises en biochimie et biologie moléculaire.
                Caractérisation et identification de molécule, identification et
                modélisation de voies métaboliques, transferts de gènes sur
            bactéries.</ArticleMain>
                <ArticleMain place="Laboratoire d'Ecologie Microbienne Lyon" title="Stage de recherche" date="2017">Compétences acquises en biologie moléculaire et
                bio-informatiques. Recherche de gènes spécifiques sur les
                génomes de bactéries, extraction d’ADN, de protéines,
            amplification par PCR.</ArticleMain>
        </main>
}

export default Main