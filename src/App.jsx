import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing,Error,Newsletter,Cocktail,About,SinglePageError } from './Pages';

import {loader as landingLoader} from './Pages/Landing'
import {loader as singleCocktailLoader} from './Pages/Cocktail'
import {action as newsletterAction} from './Pages/Newsletter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error />,
    children: [
    {
    index:true, 
    loader: landingLoader,
    errorElement:<SinglePageError />,
    element: <Landing />,
  },  
    {
    path: 'Cocktail/:id',
    errorElement:<SinglePageError />,
    loader: singleCocktailLoader,
    element: <Cocktail />,
  },  
    {
    path: 'Newsletter',
    element: <Newsletter />,
    action: newsletterAction,
  },  
    {
    path: 'About',
    element: <About />,
  },  
    ]
  },
]);

const App = () => {
  return <RouterProvider router = {router} />;
};
export default App