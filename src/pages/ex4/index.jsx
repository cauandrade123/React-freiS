import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';
import { CabecalhoExercico } from '../../components/CabecalhoExercicio';


export default function Ex4() {
    const [nomeLivro,setNomeLivro] = useState()
    const [totalPag,setTotalPag] = useState()
    const [tempo,setTempo] = useState()
    const [respostaLivro,setRespostaLivro] = useState('')


    function tempodolivro() {

        let calc = (tempo*totalPag)/3600

        setRespostaLivro(calc.toFixed(2));
    }

    let exer = [
        {
          titulo: 'Exercício 04 - Leitura de livro',
          cor_linha: 'azulMarinho',
          mensagem: 'Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.',
        },
    ];

    return (
        <div className="pagina-ex4 pagina">
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

                            <h3>Nome do livro</h3>
                                <input type="text" value={nomeLivro} onChange={e => setNomeLivro (e.target.value)} />
                            

                            <h3>Total de paginas</h3>
                                <input type="text" value={totalPag} onChange={e => setTotalPag (e.target.value)} />
                            

                            <h3>Tempo em segundos de leitura</h3>
                                <input type="text"  value={tempo} onChange={e => setTempo (e.target.value)} />
                            
                        

                        <button onClick={tempodolivro}> Executar </button>
                        </div>
                    </div>
                </div>

                <h3 className='resp'> Você lerá {nomeLivro} em {respostaLivro} horas.</h3>
            </div>

      

    );

}

