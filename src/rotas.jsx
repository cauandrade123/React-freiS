
import App from './pages/App'
import Sobre from './pages/sobre';
import Naoencontrado from './pages/naoencontrado';
import Ex1 from './pages/ex1';
import Ex2 from './pages/ex2';
import Ex3 from './pages/ex3';
import Ex4 from './pages/ex4';
import Ex5 from './pages/ex5';
import Ex6 from './pages/ex6';
import Ex7 from './pages/ex7';
import Ex8 from './pages/ex8';
import Ex9 from './pages/ex9';
import Ex10 from './pages/ex10';
import Ex11 from './pages/ex11';
import Ex12 from './pages/ex12';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/app' element={<App />} />
                <Route path='/ex1' element={<Ex1 />} />
                <Route path='/ex2' element={<Ex2 />} />
                <Route path='/ex3' element={<Ex3 />} />
                <Route path='/ex4' element={<Ex4 />} />
                <Route path='/ex5' element={<Ex5 />} />
                <Route path='/ex6' element={<Ex6 />} />
                <Route path='/ex7' element={<Ex7 />} />
                <Route path='/ex8' element={<Ex8 />} />
                <Route path='/ex9' element={<Ex9 />} />
                <Route path='/ex10' element={<Ex10 />} />
                <Route path='/ex11' element={<Ex11 />} />
                <Route path='/ex12' element={<Ex12 />} />


                <Route path='*' element={<Naoencontrado />} />

            </Routes>
        </BrowserRouter>
    )
}