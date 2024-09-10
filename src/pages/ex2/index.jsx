import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho';
import { CabecalhoExercico } from '../../components/CabecalhoExercicio';
  


export default function Ex2() {


    const [Kg, setKg] = useState(0);
    const [respostagrama, setRespostaGrama] = useState('');
    
    function Pedido (){
            
        let total=Kg*1000
         setRespostaGrama(total)
        }
    
        let exer = [
            {
              titulo: 'Exercício 02 - Converter Kg/gramas',
              cor_linha: 'verdeClaro',
              mensagem: 'Implementar um programa em Javascript para converter kilos em gramas.',
            },
        ];



    return (
        <div className="pagina-ex2 pagina">

      <Cabecalho />

      {
                exer.map(
                    Cabecalhoexercico =>
                        <CabecalhoExercico
                            titulo={Cabecalhoexercico.titulo}
                            cor={Cabecalhoexercico.cor_linha}
                            mensagem={Cabecalhoexercico.mensagem}
                        />
                )
            }


    <div className='final'>
                    <h3>Valor em kg</h3>
                    <input type="text" value={Kg}  onChange={e => setKg(e.target.value)} />

                    <button onClick={Pedido}> Executar </button>
                </div>

                <h3 className='resp'>Valor em Gramas: {respostagrama} g.</h3>
            </div>

       

    );

}
