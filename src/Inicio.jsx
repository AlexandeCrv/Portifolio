import "./Inicio.css";

import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import reacts from "./assets/reacts.png";
import hcj from "./assets/hcj.png";
import reac from "./assets/reac.png";
import insta from "./assets/insta.png";
import git from "./assets/git.png";
import ts from "./assets/ts.png";
import api from "./assets/api.png";
function Inicio() {
  return (
    <div>
      <body>
        <header>
          <h1 className="h1h">
            {" "}
            <strong>/*</strong> A.C <strong>/*</strong> DEV
          </h1>
          <nav>
            <div className="navbar">
              <li>
                {" "}
                <a className="ah" href="#secmain">
                  Inicio
                </a>
              </li>

              <li>
                <a className="ah" href="#sobremim">
                  Sobre Mim
                </a>
              </li>

              <li>
                <a className="ah" href="#projetos">
                  Projetos
                </a>
              </li>
              <li>
                <a className="ah" href="#habilidades">
                  Habilidades
                </a>{" "}
              </li>
            </div>
          </nav>
        </header>
        <section className="wrapper">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <section id="secmain" className="secmain">
            <div className="secmainh1h2">
              <h1 className="h1s">Alexandre Carvalho</h1>
              <div className="txt-animado">Desenvolvedor Front End Web</div>

              <div className="redes">
                <div className="linkedin">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/alexandre-carvalho-4b178a26b/"
                      target="_blank"
                    >
                      <img className="linked" src={linkedin} alt="" />
                    </a>
                  </div>
                </div>
                <div className="nn">
                  <div className="linkedinn">
                    <div>
                      <a
                        href="https://www.instagram.com/xande.mirandac/"
                        target="_blank"
                      >
                        {" "}
                        <img className="linked" src={insta} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="github">
                  <a
                    href="https://github.com/AlexandeCrv?tab=repositories"
                    target="_blank"
                  >
                    <img className="linked" src={github} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="animation">
              <img className="reacts" src={reacts} alt="" />
            </div>
          </section>

          <section id="sobremim" className="sobremim">
            <div>
              <h1 className="h1s2">Sobre Mim</h1>
            </div>
            <div className="descriçãosec2">
              <div className="paragrafosobre">
                <p>
                  <strong> /* </strong>
                  Salve! Meu nome é Alexandre Carvalho e eu sou um apaixonado
                  por tecnologia que decidiu trilhar o caminho da programação
                  Front End.
                </p>
                <p>
                  <strong> /* </strong>
                  Atualmete faço faculdade de ADS, estou no primeiro semestre e
                  em busca de um ESTAGIO na área!
                </p>
                <strong> /* </strong> Comecei a estudar programação no dia
                03/03/2024.
              </div>
              <div className="animation2"></div>
            </div>
          </section>
        </section>
        <section id="projetos" className="projetos">
          <h1 className="h1s3">Projetos</h1>
          <div className="cont">
            <input type="radio" name="slide" id="c1" checked />
            <label htmlFor="c1" className="card">
              <div className="row">
                <div className="icon">1</div>
                <div className="des">
                  <a
                    className="ancoraprojeto1"
                    href="https://alexandecrv.github.io/ViagensAereas/"
                    target="_blank"
                  >
                    Confira aqui!
                  </a>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c2" />
            <label htmlFor="c2" className="card">
              <div className="row">
                <div className="icon">2</div>
                <div className="des">
                  <a
                    className="ancoraprojeto2"
                    href="https://alexandecrv.github.io/TheDogHouse/"
                    target="_blank"
                  >
                    Confira aqui!
                  </a>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c3" />
            <label htmlFor="c3" className="card">
              <div className="row">
                <div className="icon">3</div>
                <div className="des">
                  <div className="viagens">
                    <p>Um app para amantes de rpgs!</p>
                    <a
                      className="ancoraprojeto3"
                      href="https://alexandecrv.github.io/GitHubFinderRpg/"
                      target="_blank"
                    >
                      Confira aqui!
                    </a>
                  </div>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c4" />
            <label htmlFor="c4" className="card">
              <div className="row">
                <div className="icon">4</div>
                <div className="des">
                  <div className="juju">
                    <h4>ReactToDoListRPG </h4>
                    <p>
                      Aqui você vai se aventurar num mundo de rpg <br />
                      <a
                        className="ancoraprojeto3"
                        href="https://alexandecrv.github.io/ReactTodoList/"
                        target="_blank"
                      >
                        Confira aqui!
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c5" />
            <label htmlFor="c5" className="card">
              <div className="row">
                <div className="icon">5</div>{" "}
                <div className="des">
                  <div className="neo">
                    <h4>Super Nnintendo Wolrd </h4>
                    <p>
                      Um site para se mergulhar na nostalgia, vários jogos
                      iconicos e antigos do nintendo! <br />
                      <a
                        className="ancoraprojeto4"
                        href="https://alexandecrv.github.io/NintendoWorld/skidrow.html"
                        target="_blank"
                      >
                        Confira aqui!
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </section>
        <section id="habilidades" className="habilidades">
          <h1 className="h1s4">Habilidades</h1>
          <div className="descriçãoh">
            <div className="descrição">
              <div className="tmlcssjs">
                <h2 className="htmlcssjs">HTML, CSS, JavaScript</h2>
                <p className="paragrafohabilidades">
                  <strong> /* </strong> HTML, CSS e Javascript também conhecidas
                  como santíssima trindade da web, formam o principal conjunto
                  de tecnologias para qualquer aplicação web. <br /> Comecei a
                  estudar esses carinhas não tem muito tempo, mas já absorvi o
                  básico dos três !
                </p>
              </div>

              <div className="tmlcssjs">
                <br />
                <h2 className="htmlcssjs">React JS</h2>
                <p className="paragrafohabilidades">
                  <strong> /* </strong> O React é uma biblioteca JavaScript
                  declarativa, eficiente e flexível para criar interfaces. Ele
                  permite compor UIs complexas a partir de pequenos e isolados
                  códigos chamados “componentes”.
                  <br />
                  Hoje faço projetos responsivos e funcionais em React Js/Ts.
                </p>
              </div>
              <div>
                <div className="tmlcssjs">
                  <br />
                  <h2 className="htmlcssjs">Git/GitHub</h2>
                  <p className="paragrafohabilidades">
                    Git é um sistema de controle de versões distribuído, usado
                    principalmente no desenvolvimento de software.
                    <br />
                    GitHub é uma plataforma de hospedagem de código-fonte e
                    arquivos com controle de versão usando o Git. <br />
                    Quase todos os meus projetos eu exportei para o githubpages
                    com o git, logo tenho dominio básico das ferramentas.
                  </p>
                </div>
              </div>
              <div className="tmlcssjs">
                <br />
                <h2 className="htmlcssjs">TypeScript</h2>
                <p className="paragrafohabilidades">
                  TypeScript é uma linguagem de programação desenvolvida pela
                  Microsoft que se baseia em JavaScript adicionando tipagem
                  estática opcional e outros recursos avançados.
                  <br />
                  Tenho feito projetos utilizando Ts para solidifcar ainda mais
                  minha base na programação.
                </p>
              </div>
              <div className="tmlcssjs">
                <br />
                <h2 className="htmlcssjs">Consumo de Api</h2>
                <p className="paragrafohabilidades">
                  Uma API é um conjunto de regras e definições que permite que
                  diferentes softwares se comuniquem entre si.
                  <br />
                  Desde que aprendi um pouco sobre suas ferramentas, meus
                  projetos tem ficado muito mais funcionais e dinâmicos.
                </p>
              </div>
            </div>

            <div className="imggg">
              <img className="imgg" src={hcj} alt="" />

              <img className="imgg" src={reac} alt="" />

              <img className="imgg" src={git} alt="" />

              <img className="imgg" src={ts} alt="" />

              <img className="imgg" src={api} alt="" />
            </div>
          </div>
          <div></div>
        </section>
        <footer>
          <div className="contatos">
            <h1 className="h1f">Contatos</h1>
            <div className="h2h3">
              <h2 className="htmlcssjss ">Email pra contato</h2>
              <h3>alexandecarvalho318@gmail.com</h3>
            </div>
            <h2 className="htmlcssjsj ">Me ache nas redes!</h2>

            <div className="redess">
              <div className="n">
                <div className="linkedinn">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/alexandre-carvalho-4b178a26b/"
                      target="_blank"
                    >
                      <img className="linked" src={linkedin} alt="" />
                    </a>
                  </div>
                </div>
                <p className="pf">/Alexandre-Carvalho</p>
              </div>
              <div className="n">
                <div className="linkedinn">
                  <div>
                    <a
                      href="https://www.instagram.com/xande.mirandac/"
                      target="_blank"
                    >
                      {" "}
                      <img className="linked" src={insta} alt="" />
                    </a>
                  </div>
                </div>
                <p className="pf"> /xande.mirandac</p>
              </div>
              <div className="n">
                <div className="githubb">
                  <a
                    href="https://github.com/AlexandeCrv?tab=repositories"
                    target="_blank"
                  >
                    <img className="linked" src={github} alt="" />
                  </a>
                </div>
                <p className="pf">/AlexandeCrv</p>
              </div>
            </div>
          </div>
          <p className="rodap">
            {" "}
            <strong>/*</strong> © 2024 / Alexandre Carvalho{" "}
            <strong> /* </strong>
          </p>
        </footer>
      </body>
    </div>
  );
}

export default Inicio;
