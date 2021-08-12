import '../styles/css/main.css'
import co6 from '../assets/images/co6.jpg'
import co4 from '../assets/images/co4.jpg'
import { Footer } from './Footer';
import { NavBar } from './NavBar';

export function Home() {
  return(
  <div>
     <NavBar/>
     <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text">Bienvenue sur ma plateforme. Je suis <div className="name">RAKOTOARIVO ANDRIATIANA</div></div>
                <div className="name">Vatosoa Armelle (ESIIA5).</div>
				<br></br>
				<br></br>
                <div className="summary"><span>COVID-19 : </span>C'est en Chine, le 31 décembre 2019, qu'est apparue l'infection à un nouveau Coronavirus.
			    Un coronavirus nouveau est un coronavirus qui n'avait jamais été identifié.
				Le nombre de cas ne cesse de s'étendre à travers le monde provoquant l'inquiétude des spécialistes de la santé et bien sûr, de toutes les populations.
				La dépression, l'anxiété, la peur accélèrent l'incubation de cette maladie et rendent difficile les traitements de guérison.
				L'origine exacte de ce virus n'a pas été encore confirmée. Les données actuelles reposent sur les nombres de cas confirmés, rapportés par les autorités
				de chaque pays.</div>
            </div>
        </div>
    </section>

    <section className="about" id="symptome">
        <div className="max-width">
            <h2 className="title">Les Symptômes</h2>
            <div className="about-content">
                <div className="profil">
                    <img src={co6} alt="" />
                </div>
                <div className="right">
                    <div className="text">
						<p>Fièvre.</p>
						<p>Fatigue.</p>
						<p>Toux sèche.</p>
						<p>Difficultés respiratoires.</p>
						<p>Frissons.</p>
						<p>Douleurs musculaires.</p>
						<p>Congestion.</p>
						<p>Ecoulement nasal.</p>
						<p>Maux de gorge.</p>
						<p>Nouvelle perte de goût ou de l'odorat.</p>
						<p>Diarrhée.</p>
					</div> 
                    <div className="card">
                        <div className="box">
                            <div className="text">Durée d'incubation : </div>
                            <p><b>de l'ordre de 5 à 6 jours, pouvant atteindre 14 jours.</b></p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </section>

    <section className="effect" id="complication">
        <div className="max-width">
            <h2 className="title">Les Complications Potentielles</h2>
            <div className="effect-content">
                <div className="card">
                    <div className="box">
                        <div className="text">Formes :</div>
                        <p>légère, modérée, grave. Des cas graves peuvent déboucher sur des complications (pneumonie).</p>
                    </div>
                </div>

                <div className="card">
                <div className="box">
                    <div className="text">Comment il se transmet ?</div>
                    <p>Entre des personnes proches l'une de l'autre; via des gouttelettes respiratoires, expulsées lorsqu'une personne infectée tousse, 
					éternue ou parle ; des porteurs sains peuvent transmettre le covid-19.</p>
                </div>
                </div>

                <div className="card">
                <div className="box">
                    <div className="text">Les plus vulnérables :</div>
                    <p>Personnes de tout âge ayant des problèmes de santé sous-jacents, en particulier si ces problèmes sont mal contrôlés
					(troubles cardiaques graves, obésité sévère, diabète, maladie rénale chronique, ...).</p>
                </div>
                </div>
            </div> 
        </div>
    </section>

    <section className="prev" id="prevention">
        <div className="max-width">
            <h2 className="title">Les Préventions</h2>
            <div className="prev-content">
                <div className="column left">
                    <div className="text">Ces mesures diminuent la quantité de virus inhalés et ralentissent la propagation de la maladie : </div>
                    <ul>
                        <li>-Lavage fréquent des mains (eau+savon, solution hydro-alcoolique).</li>
                        <li>-Se couvrir le nez et la bouche avec le pli du coude ou avec un mouchoir en cas de toux.</li>
                        <li>-Pas de contacts proches (distanciation sociale).</li>
                        <li>-Ne pas se toucher les yeux, le nez et la bouche avec des mains non lavées.</li>
						<li>-Port du masque.</li>
						<li>-Bien respirer, faire 15 min de sport par jour pour faire évacuer les gouttelettes respiratoires.</li>
						<li>-Avis médical en cas de fièvre, de toux.</li>
						<li>-Manger sain (fruits, légumes, vitamines, calciums, protéines).</li>
						<li>-Se faire vacciner.</li>
                    </ul>
                </div>
                <div className="column right">
                    <img src={co4} alt=""/>
                </div>  
            </div>
        </div>
    </section>

    <section className="traitement" id="traitement">
        <div className="max-width">
            <h2 className="title">Les Traitements</h2>
            <div className="traitement-content">
                <div className="column left">
                    <div className="text">80% des malades guérissent sans avoir besoin de traitement particulier.</div>
                    <div className="row">
                        <div className="info">
                            <div className="head">Surveiller les symptômes.</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="info">
                            <div className="head">Consulter régulièrement des médecins (psychologues, généralistes, ...).</div>
                        </div>
                    </div>
					<div className="row">
                        <div className="info">
                            <div className="head">Rester chez soi.</div>
                        </div>
                    </div>
					<div className="row">
                        <div className="info">
                            <div className="head">Respecter les doses des médicaments préscrits (CVO++, ED1, Azytromicine, ...).</div>
                        </div>
                    </div>
					<div className="row">
                        <div className="info">
                            <div className="head">Manger sain, boire de l'eau chaude, du thé de citron et de gingembre.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>

  </div>);
}
