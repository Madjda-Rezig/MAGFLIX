// Pages : 
import Navbar from './Component/Navbar/Navbar.jsx';
import Home from "./Pages/Home.jsx"
import Description from "./Pages/Description.jsx"
import Stream from "./Pages/Stream.jsx"

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='Description' element={<Description/>}/>
        <Route path='Stream' element={<Stream/>}/>
       
      </Route >
      
));

function App() {
  return (
    <div className=''>
      <RouterProvider router={router}/>
      {/* <RouterProvider router={router}/> */}
    </div>
    
  );
}

export default App;

