import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';
import { CabecalhoExercico } from '../../components/CabecalhoExercicio';


export default function Ex8() {
  const [acai, setAcai] = useState(0);
  const [resposta, setResposta] = useState('');



    function calcularAcai() {
        const gramas = acai
        const precoPor100g = 3.50;
        const descontoPor100g = 0.50;

        let precoFinalPor100g = precoPor100g;

        // Verifica se a quantidade é maior ou igual a 1kg (1000g)
        if (gramas >= 1000) {
            precoFinalPor100g -= descontoPor100g;
        }

        // Calcula o total a pagar
        const total = (gramas / 100) * precoFinalPor100g;

        setResposta(total.toFixed(2));
    }


    let exer = [
        {
          titulo: 'Exercício 09 - Sorveteria',
          cor_linha: 'cinza',
          mensagem: 'Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos.',
        },
    ];

    return (
        <div className="pagina-ex9 pagina">
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

                            <h3> Total de gramas </h3>
                                <input type="text" value={acai} onChange={e => setAcai (e.target.value)} />
                            
                         <button onClick={calcularAcai}> Executar </button>
                        </div>
                    </div>
                </div>

                <h3 className='resp'> O total a pagar é R$ {resposta} </h3>
            

             </div>


    );

}

