/*import {Outlet} from 'react-router-dom'
import Navigation from './pages/Auth/Navigation' ;
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  

  return (
    <>
      <ToastContainer/>
      <Navigation/>
      <main className='py-3'>
        <Outlet />
      </main>
    </>
  )
}

export default App*/
import { Outlet } from 'react-router-dom';
import Navigation from './pages/Auth/Navigation';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    
    <div className="flex">
      <ToastContainer/>
      <Navigation />
      <main className="flex-grow ">
        <Outlet />
      </main>
    </div>
  );
};

export default App;

