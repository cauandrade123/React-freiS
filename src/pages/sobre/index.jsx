import { Cabecalho } from '../../components/cabecalho';
import './index.scss';

import { Link } from 'react-router-dom';


export default function Sobre() {
  return (
    <div className="pagina-contato pagina">

<Cabecalho/>



      <main>

        <h2 className='titulo'>Sobre</h2>

        <p className='iniciotex'> Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades.</p>

          <p className='meiotex'>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades.</p>
          <p className='finaltex'>Estamos ansiosos para ver seu progresso e sucesso!</p>


          <img className='ima' src="/assets/images/image.png" alt="" width="80px" height={'100px'} />


      </main>
    </div>



  );


}
