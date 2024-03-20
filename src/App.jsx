import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing,Error,Newsletter,Cocktail,About,SinglePageError } from './Pages';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {loader as landingLoader} from './Pages/Landing'
import {loader as singleCocktailLoader} from './Pages/Cocktail'
import {action as newsletterAction} from './Pages/Newsletter'




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000 * 60 *5,
    }
  }})



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
  return(
  <>
    <QueryClientProvider client = {queryClient}>
      <RouterProvider router = {router} />;
      <ReactQueryDevtools initialsIsOpen = {false} />
    </QueryClientProvider>;
  </>  
  )
};
export default App