import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Events from './Components/Events/Events';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Teachers from './Components/Teachers/Teachers';
import Root from './Layout/Root';

function App() {
  const router = createBrowserRouter([
    {path:'/', loader:()=> fetch('review.json'), element:<Root></Root>,children:[
      {path:'/', element: <Home></Home>},
      {path:'about', element:<About></About>},
      {path:'reviews', element:<Reviews></Reviews>, loader:()=>fetch('review.json')},
      {path:'events', element:<Events></Events>},
      {path:'teachers', element:<Teachers></Teachers>}
    ]},
    {path:'*', element:<ErrorPage></ErrorPage>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
