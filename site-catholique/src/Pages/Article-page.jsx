import { useParams } from 'react-router-dom';
import articles from '../data/articles.json';
import Header from '../Components/header';

function ArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => String(a.id) === String(id));

  if (!article) return <p className="text-red-500 text-center mt-10">Article non trouvé.</p>;

  return (
    <>
      <Header />
      <div className="bg-secondary p-6 text-primary text-center mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 pt-4">{article.title}</h1>
        <p className="text-sm italic font-bold text-center mb-6">{article.date}</p>

        <div className="space-y-8">
          {article.content.map((contents, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold mb-2">{contents.section}</h3>
              <ul className=" list-inside space-y-1 text-xl   pl-4">
                {contents.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ArticlePage;
