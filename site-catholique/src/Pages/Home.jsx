import { Link } from "react-router-dom";
import Header from "../Components/header";
import articles from "../data/articles.json";

export default function Home() {
  const categories = [...new Set(articles.map(article => article.category))];

  const ArticleCategoryList = ({ category }) => {
    const filteredArticles = articles.filter(article => article.category === category);

    return (
      <div className="flex flex-wrap border-2 w-120 h-80 mx-auto mt-4 p-4 bg-primary text-secondary rounded-lg shadow-md">
        <h2 className="text-center w-full font-semibold">{category}</h2>
        <ul className="w-full mt-2 list-disc list-inside">
          {filteredArticles.map(article => (
            <Link to ={`/articles/${article.id}`} > <li className="list-none pt-2 underline" key={article.id}>{article.title}</li> </Link>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="text-primary">
        <h1 className="text-4xl text-center pt-4">Foi, raison et vérité!</h1>
        <p className="text-center pt-4 text-xl">
          Ce site est premièrement un recueil de ce que j'ai pu apprendre depuis mon retour à la sainte foi catholique.
          <br />Il est aussi un moyen de partager ma foi et de la défendre.
          <br />Et surtout, il est un moyen de vous aider à découvrir la véracité de la foi catholique.
        </p>
      </div>

      <div className="pt-5 text-primary">
        <h2 className="text-center text-xl font-bold">Catégories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <ArticleCategoryList key={category} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}
