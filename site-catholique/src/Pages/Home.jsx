import Header from "../Components/header"

export default function Home() {

const categories = [

  { "id": "1",
    "name" : "Apologétique"},

  { "id": "2",
    "name" : "Histoire de l'Eglise"},
  { "id": "3",
    "name" : "Doctrine"},

  { "id": "4",
    "name" : "Spiritualité"}
]
  return (

    <>
   
    <Header></Header>
    <div  className="text-primary">
      <h1 className="text-4xl text-center pt-4">Foi, raison et vérité!</h1>
      <p className="text-center pt-4 text-xl">
        Ce site est premièrement un recueil de ce que j'ai pu apprendre depuis mon retour à la sainte foi catholique. 
        <br />Il est aussi un moyen de partager ma foi et de la défendre.
       <br /> Et surtout, il est un moyen de vous aider à découvrir la véracité de la foi catholique.
      </p>
      </div> 
      <div className=" pt-5 text-primary" >
      <h2 className="text-center text-xl font-bold "> Catégories</h2>
      <div className="flex  flex-wrap space-x-4" >
      {categories.map(category => (
      <div  className=" flex flex-wrap border-2 w-80 h-80 mx-auto mt-4 p-4 bg-primary text-secondary rounded-lg shadow-md "   key={category.id}>
       
        <h2 className="text-center"> {category.name}</h2>
        <div className="text-center pt-3">
        
          <p > </p>
          </div>
          <p className="text-center pt-3"></p>
          
        </div>))}
        </div>
      </div> 
    </>
  );
}