export function NavBar(){
  return (
    <nav className="navbar">
        <div className="max-width">
            <header className="logo"><a>e-pandemic-link</a></header>
            <ul className="menu">
                <li><a href="#home">Pandémie</a></li>
                <li><a href="#symptome">Symptômes</a></li>
                <li><a href="#complication">Complications</a></li>
                <li><a href="#prevention">Préventions</a></li>
                <li><a href="#traitement">Traitements</a></li>
                <li><a href="/stat">Statistiques</a></li>
            </ul>
        </div>
     </nav>
  )
}