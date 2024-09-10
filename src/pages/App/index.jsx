import { Cabecalho } from '../../components/cabecalho';
import './index.scss';

import { Link } from 'react-router-dom';

export default function App() {
  let cards = [
    {
      'link_card': '/ex1',
      'cor_card': 'amarelo',
      'titulo': 'Cupom de desconto',
      'subtitulo': 'Exercicio 01',
    },

    {
      'link_card': '/ex2',
      'cor_card': 'verdeClaro',
      'titulo': 'Converter Kg/gramas',
      'subtitulo': 'Exercicio 02',
    },

    {
      'link_card': '/ex3',
      'cor_card': 'azulBebe',
      'titulo': 'Valor total por quantidade',
      'subtitulo': 'Exercicio 03',
    },


    {
      'link_card': '/ex4',
      'cor_card': 'azulMarinho',
      'titulo': 'Leitura de livro',
      'subtitulo': 'Exercicio 04',
    },


    {
      'link_card': '/ex5',
      'cor_card': 'roxoClaro',
      'titulo': 'Média de notas',
      'subtitulo': 'Exercicio 05',
    },



    {
      'link_card': '/ex6',
      'cor_card': 'laranjaEscuro',
      'titulo': 'Salário líquido',
      'subtitulo': 'Exercicio 06',
    },


    {
      'link_card': '/ex7',
      'cor_card': 'verdeBebe',
      'titulo': 'Cores primárias',
      'subtitulo': 'Exercicio 07',
    },



    {
      'link_card': '/ex8',
      'cor_card': 'preto',
      'titulo': 'Temperatura',
      'subtitulo': 'Exercicio 08',
    },



    {
      'link_card': '/ex9',
      'cor_card': 'cinza',
      'titulo': 'Sorveteria',
      'subtitulo': 'Exercicio 09',
    },


    {
      'link_card': '/ex10',
      'cor_card': 'marromClaro',
      'titulo': 'Calculo de IMC com histórico',
      'subtitulo': 'Exercicio 10',
    },


    {
      'link_card': '/ex11',
      'cor_card': 'roxoEscuro',
      'titulo': 'Tabuada',
      'subtitulo': 'Exercicio 11',
    },


    {
      'link_card': '/ex12',
      'cor_card': 'amarelo',
      'titulo': 'Comparador de pessoas',
      'subtitulo': 'Exercicio 12',
    }

  ]

 


  return (
    <div className="pagina-app pagina">

      <Cabecalho />

      <section className='treino'>
        <h1>Escolha um treino...</h1>
      </section>

      <div className='todosEx'>


        {
          cards.map(
            card =>
              <Card
                link_card={card.link_card}
                cor_card={card.cor_card}
                titulo={card.titulo}
                subtitulo={card.subtitulo}
              />
          )
        }

      </div>

    </div>

  )
}


function Card({ link_card, cor_card, titulo, subtitulo }) {
  return (
    <Link to={link_card} className='link'>
      <div className='card'>
        <div className={`retangulo ${cor_card}`} />
        <h3 className='titulo'>{titulo}</h3>
        <h4 className='subtitulo'>{subtitulo}</h4>
      </div>
    </Link>

  );
}