import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';
import { CabecalhoExercico } from '../../components/CabecalhoExercicio';


export default function Ex7() {
  const [cor1, setCor1] = useState('');
  const [cor2, setCor2] = useState('');
  const [resposta, setResposta] = useState('');



    function VerificarCor() {
        if ((cor1 === 'amarelo' && cor2 === 'azul') || (cor1 === 'azul' && cor2 === 'amarelo')) {
            setResposta('True');
        }
        else if ((cor1 === 'amarelo' && cor2 === 'vermelho') || (cor1 === 'vermelho' && cor2 === 'amarelo')) {
            setResposta('True');
        }
        else if ((cor1 === 'azul' && cor2 === 'vermelho') || (cor1 === 'vermelho' && cor2 === 'azul')) {
            setResposta('True');
        }
        else {
            setResposta('Combinação inválida ou cores iguais');
        }
    }


    let exer = [
        {
          titulo: 'Exercício 07 - Cores primárias',
          cor_linha: 'verdeBebe',
          mensagem: 'Implementar um programa em javascript para verificar se duas cores são primárias',
        },
    ];

    return (
        <div className="pagina-ex7 pagina">
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
           
                <div className='inpu'>
                    <div className='final'>
                        <div className='sub'>

                            <h3>cor 01</h3>
                                <input type="text" value={cor1} onChange={e => setCor1 (e.target.value)} />
                            

                            <h3>Cor 02</h3>
                                <input type="text" value={cor2} onChange={e => setCor2 (e.target.value)} />
                        
                            
                        

                         <button onClick={VerificarCor}> Executar </button>
                        </div>
                    </div>
                </div>

                <h3 className='resp'> As duas cores são primárias? {resposta} </h3>
            

            

        </div>

    );

}

