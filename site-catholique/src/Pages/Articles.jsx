import Header from "../Components/header";
import articles from "../data/articles.json"; // Assuming you have a JSON file with articles data
import { Link } from 'react-router-dom';
export default function Articles() {


return (
<>
<Header></Header>
    <div className="bg-secondary ">
      <h1 className="text-2xl font-bold pt-4 text-center text-primary">Articles</h1>
      <div className="flex  flex-wrap space-x-4" >

{articles.map(article => (
        <div  className="  border-2 w-80 h-80 mx-auto mt-4 p-4 bg-primary text-secondary rounded-lg shadow-md " key={article.id}>
        <Link to ={`/articles/${article.id}`}> 
        <h2 className="text-center">{article.title}</h2></Link>
        <div className="text-center pt-3">
        <h3 className="font-bold" >Description:</h3>
          <p > {article.description}</p>
          </div>
          <p className="text-center pt-3">{article.date}</p>
          
        </div>
      ))}
      </div>
    </div>
    </>
)

}