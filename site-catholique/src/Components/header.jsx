import{ Link } from 'react-router-dom';
export default function Header() {    

return (




    <header className="bg-primary text-secondary p-4 flex items-center">
         <Link to='/'><img className =" w-13 h-13 rounded-4xl" src="/logo.jpg" alt="" /></Link>
          <h1 className="text-2xl font-bold pl-4 ">Le Coeur d'Elohim</h1>
      
        <nav className=" flex justify-end w-180 ml-auto">
            <ul className="flex space-x-4 text-xl ">              
              <Link to='/'><li>Accueil</li> </Link>  
                <Link to='/articles' ><li>Articles</li></Link>      
            </ul>
        </nav>
        </header>
);


}