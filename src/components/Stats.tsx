import stat from '../assets/data/stat.json'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/css/style.css'
import deathImage from '../assets/images/death.png'
import caseImage from '../assets/images/case.png'
import remaingImage from '../assets/images/remaing.jpeg'
import { CovData } from '../utils'
import { Chart } from './Chart';
import { Footer } from './Footer';


const datas:CovData=stat
datas.data.map(d=>{
  d.date= new Date(d.date).toLocaleDateString()
  return d
})
const code= datas.code
const totalCase= datas.data.map(dt=>dt.c).reduce((acc,cur)=>acc+=cur)
const totalDeath= datas.data.map(dt=>dt.d).reduce((acc,cur)=>acc+=cur)
const totalRemaining= datas.data.map(dt=>dt.d).reduce((acc,cur)=>acc+=cur)
const date= datas.data[0].date +' - '+ datas.data[datas.data.length-1].date
export function Stats (){
  const [flag, setFlag] = useState<string>();
  useEffect(() => {
   const url=`https://restcountries.eu/rest/v2/alpha?codes=${code}`
   axios.get(url).then(res=> {
    setFlag(res.data[0].flag)
   });
  });
  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
            <header className="logo"><a>e-pandemic-link</a></header>
            <ul className="menu">
                <li><a href='/'>Accueil</a></li>
            </ul>
        </div>
     </nav>
     <div style={{display:'flex',justifyContent:'space-between'}}>

     <section>

      {flag && ( 
        <div className="country">
          <img className="country__img" src={flag} alt='flag'/>
          <div className="country__data">
            <h3 className="country__name">{datas.name}</h3>
            <p className="country__row">{date}</p>
            <p className="country__row"><img src={caseImage} alt='case' />Cas : {totalCase}</p>
            <p className="country__row"><img src={deathImage} alt='death' />Morts : {totalDeath}</p>
            <p className="country__row"><img src={remaingImage} alt='remaing' />Rétablies : {totalRemaining}</p>
          </div>
        </div>
        )}    
    </section>
    <Chart/>
    </div>
    <Footer/>
    </div>
  )
}