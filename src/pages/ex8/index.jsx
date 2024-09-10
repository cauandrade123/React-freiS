import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';
import { CabecalhoExercico } from '../../components/CabecalhoExercicio';


export default function Ex8() {
  const [media, setMedia] = useState(0);
  const [resposta, setResposta] = useState('');



    function VerificarTemperatura() {
        if (media >= 41) {
            setResposta( "Hipertermia");
          } else if (media >= 39.6 && media < 41) {
            setResposta ("Febre Alta");
          } else if (media >= 37.6 && media < 39.6) {
            setResposta ("Febre");
          } else if (media >= 36 && media < 37.6) {
            setResposta("Normal");
          } else {
            setResposta("Hipotermia");
          }   
    }

    let exer = [
      {
        titulo: 'Exercício 08 - Temperatura',
        cor_linha: 'preto',
        mensagem: 'Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação',
      },
  ];

    return (
        <div className="pagina-ex8 pagina">
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

             <div className='imag'>
                <img src="/assets/images/temperatura.png" alt="" width='500px'/>
             </div>
                <div className='inpu'>
                    <div className='final'>
                        <div className='sub'>

                            <h3> Temperatura </h3>
                                <input type="text" value={media} onChange={e => setMedia (e.target.value)} />
                            
                         <button onClick={VerificarTemperatura}> Executar </button>
                        </div>
                    </div>
                </div>

                <h3 className='resp'> A situação para sua temperatura é  {resposta} </h3>
            

            

        </div>

    );

}

