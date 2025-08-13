import './App.css';
import AppRoutes from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "<Sena AKAT/>";
  }, []);

  return (
    <div className="App">
      <Toaster position="top-center" />
      <AppRoutes/>
    </div>
  );
}

export default App;
