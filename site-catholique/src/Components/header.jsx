import{ Link } from 'react-router-dom';
import SearchBar from './SearchBar';
export default function Header() {    

return (


 
  <header className="bg-primary text-secondary p-4 flex items-center justify-between space-x-4">
  {/* Logo + Titre */}
  <div className="flex items-center space-x-4">
    <Link to="/">
      <img className="w-14 h-14 rounded-full" src="/logo.jpg" alt="Logo" />
    </Link>
    <h1 className="text-2xl font-bold">Le Coeur d'Elohim</h1>
  </div>

  {/* SearchBar centrée */}
  <div className="flex-grow mx-8">
    <div className="max-w-md mx-auto">
      <SearchBar />
    </div>
  </div>

  {/* Navigation à droite */}
  <nav className="w-auto">
    <ul className="flex space-x-6 text-xl">
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
    </ul>
  </nav>
</header>

);


}