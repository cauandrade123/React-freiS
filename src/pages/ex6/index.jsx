import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Cabecalho } from '../../components/cabecalho/index';
import { CabecalhoExercico } from '../../components/CabecalhoExercicio';



export default function Ex6() {
    const [salarioBase,setSalarioBase] = useState(0)
    const [bonus,setBonus] = useState(0)
    const [desconto,setDesconto] = useState(0)
    const [valorSalario,setValorSalario] = useState('')


    function salarioLiquido() {

        const salarioBasenum = Number(salarioBase);
        const bonusNum = Number(bonus);
        const descontoNum = Number(desconto);
        
        let calc0=   bonusNum / 100;
        let calc1 = salarioBasenum * calc0;
        let calc2 = calc1 + salarioBasenum;
        let fim = calc2 - descontoNum;

        //(1000 * (10 / 100)) - 300
        setValorSalario(fim.toFixed(2));

    }


    let exer = [
        {
          titulo: 'Exercício 06 - Salário líquido',
          cor_linha: 'laranjaEscuro',
          mensagem: 'Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais.',
        },
    ];

    return (
        <div className="pagina-ex6 pagina">

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

                            <h3>Salário base</h3>
                                <input type="text" value={salarioBase} onChange={e => setSalarioBase (e.target.value)} />
                            

                            <h3>Bônus mensal em porcentagem</h3>
                                <input type="text" value={bonus} onChange={e => setBonus (e.target.value)} />
                            

                            <h3>Total de descontos</h3>
                                <input type="text"  value={desconto} onChange={e => setDesconto (e.target.value)} />
                            
                        

                        <button onClick={salarioLiquido}> Executar </button>
                        </div>
                    </div>
                </div>

                <h3 className='resp'> Seu salário líquido é de R$ {valorSalario}</h3>
            

        </div>

    );

}

