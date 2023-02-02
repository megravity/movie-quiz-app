import { Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Help from './components/Help/Help';
import Home from './pages/Home';
import NavLayout from './components/NavLayout/NavLayout';
import GamePage from './pages/GamePage';
import './styles/App.css';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<NavLayout />}>
                    <Route index element={<Home />} />
                    <Route path='help' element={<Help />} />
                    <Route path='game' element={<GamePage />} />
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
