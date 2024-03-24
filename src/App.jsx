import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { HomeLayout, Landing,Error,Newsletter,Cocktail,About,SinglePageError } from './Pages';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {loader as landingLoader} from './Pages/Landing'
import {loader as singleCocktailLoader} from './Pages/Cocktail'
import {action as newsletterAction} from './Pages/Newsletter'



{/*This will determine how long the query Client will be valid Globally */}
{/*This will be passed to the landing loader function */}
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
    errorElement:<SinglePageError />,
    element: <Landing />,
    loader: landingLoader(queryClient)
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




{/*wrapping the App in QueryClientProvider and ReactQueryDevtools and passing the queryClient to the provider */}
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