import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';
import { CabecalhoExercico } from '../../components/CabecalhoExercicio';


export default function Ex5() {
    const [notaUm,setNotaUm] = useState(0)
    const [notaDois,setNotaDois] = useState(0)
    const [notaTres,setNotaTres] = useState(0)
    const [respostaMedia,setRespostaMedia] = useState('')
    const [simOunao,setSimOuNao] = useState('')


    function media() {

        const notaUm1 = Number(notaUm)
        const notaDois2 = Number(notaDois)
        const notaTres3 = Number(notaTres)


        let conta = notaUm1 + notaDois2 + notaTres3;

        let soma= conta /3;

        setRespostaMedia(soma.toFixed(2));

        if(soma>= 6 ){
            setSimOuNao('true')
        }
        else{
            setSimOuNao('false')
        }
        
    }


    let exer = [
        {
          titulo: 'Exercício 05 - Média de notas',
          cor_linha: 'roxoClaro',
          mensagem: 'Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.',
        },
    ];

    return (
        <div className="pagina-ex5 pagina">
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

                            <h3>Nota 01</h3>
                                <input type="text" value={notaUm} onChange={e => setNotaUm (e.target.value)} />
                            

                            <h3>Nota 02</h3>
                                <input type="text" value={notaDois} onChange={e => setNotaDois (e.target.value)} />
                            

                            <h3>Nota 03</h3>
                                <input type="text"  value={notaTres} onChange={e => setNotaTres (e.target.value)} />
                            
                        

                        <button onClick={media}> Executar </button>
                        </div>
                    </div>
                </div>

                <h3 className='resp'> A média do aluno é {respostaMedia} <br/> O aluno passou ? {simOunao} </h3>
           

        </div>

    );

}

