import { createBrowserRouter } from 'react-router-dom';


import Home from './Pages/Home';
import Articles from './Pages/Articles';
import ArticlePage from './Pages/Article-page';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  
  {
    path: '/articles',
    element: <Articles />,
  },
  {
    path: '/articles/:id',
    element: <ArticlePage />,
  },

  
 
]);

export default router;
