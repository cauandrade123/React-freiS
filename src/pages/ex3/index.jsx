import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';
import { CabecalhoExercico } from '../../components/CabecalhoExercicio';



export default function Ex3() {
const[acaiPequeno,setAcaiPequeno]=useState(0)
const[acaiMedio,setAcaiMedio]=useState(0)
const[acaiGrande,setAcaiGrande]=useState(0)
const[respostaAcai,setRespostaAcai]=useState('')


function pedidoacai () 
{
  let piq = 13.5
  let med = 15
  let grd = 17.50

  let p = piq * acaiPequeno
  let m = med * acaiMedio
  let g = grd * acaiGrande

  let res = p + m + g

  setRespostaAcai(res)


}


let exer = [
  {
    titulo: 'Exercício 03 - Valor total por quantidade',
    cor_linha: 'azulBebe',
    mensagem: 'Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente',
  },
];

  return (
    <div className="pagina-ex3 pagina">

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

          <div className='haha'>
          <div className='final'>
          <div className='sub'>
           
           <div className='cxa'> <h3>Quantidade pequeno</h3>
            <input type="text" value={acaiPequeno} onChange={ e => setAcaiPequeno(e.target.value)} /></div>

            <div className='cxa'><h3>Quantidade médio</h3>
            <input type="text" value={acaiMedio} onChange={ e => setAcaiMedio(e.target.value)} /></div>

            <div className='cxa'><h3>Quantidade grande</h3>
            <input type="text" value={acaiGrande} onChange={ e => setAcaiGrande(e.target.value)} />
            </div> </div>
          
           <button onClick={pedidoacai}> Executar </button> </div>
       </div>

        <h3 className='resp'>Resultado: O total é R$ {respostaAcai}</h3>
      </div>

   

  );

}

