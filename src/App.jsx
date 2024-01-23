import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing,Error,Newsletter,Cocktail,About } from './Pages';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
    {
    index:true,
    element: <Landing />,
  },  
    {
    path: 'Cocktail',
    element: <Cocktail />,
  },  
    {
    path: 'Newsletter',
    element: <Newsletter />,
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