import { Link } from "react-router-dom";
import './index.scss'

export function CabecalhoExercico({ titulo, cor, mensagem }) {
    return (
        <div className='CabecalhoExercicio'>
            <Link to='/app'>
                <img className='seta' src="/assets/images/seta.png" alt="" width='40px' />
            </Link>
            <h1>{titulo}</h1>
            
            <div className={`linha1 ${cor}`}></div>
            
            <div className='meio'>
                <p>{mensagem}</p>
            </div>
        </div>
    );
}
