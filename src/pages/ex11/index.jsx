import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';
import { CabecalhoExercico } from '../../components/CabecalhoExercicio';






export default function Ex11() {
    

const [valor, setValor] = useState(0);
const [resposta, setResposta] = useState([]);





function tabuada (){
    const tabuadaArray = [];
    for (let i = 1; i <= 10; i++) {
      tabuadaArray.push(`${valor} x ${i} = ${valor * i}`);
    }
    setResposta(tabuadaArray);
    }


    let exer = [
      {
        titulo: 'Exercício 11 - Tabuada',
        cor_linha: 'roxoEscuro',
        mensagem: 'Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.',
      },
  ];

    return (
        <div className="pagina-ex11 pagina">

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
                    <h3>Tabuada do:</h3>
                    <input type="text" value={valor}  onChange={e => setValor(e.target.value)} />
                   

                    <button onClick={tabuada}> Executar </button>
                </div>
                {
            resposta.map((item, pos) => (
              
              <div className='tab'><h3 key={pos} className='resultado'>{item}</h3></div>
            ))
          }
            </div>


    );

}
