import "./Inicio.css";

import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import reacts from "./assets/reacts.png";
import hcj from "./assets/hcj.png";
import reac from "./assets/reac.png";
import insta from "./assets/insta.png";
import git from "./assets/git.png";
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
                  <h4>PartyRoom</h4>
                  <p>
                    Um site no qual o lider de uma pt de rpg pode organizar as
                    funções de cada integrante e conferir seus status (Feito em
                    react) <br />
                    <a
                      className="ancoraprojeto"
                      href="https://alexandecrv.github.io/ReactTodoList/"
                      target="_blank"
                    >
                      Confira aqui!
                    </a>
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c2" />
            <label htmlFor="c2" className="card">
              <div className="row">
                <div className="icon">2</div>
                <div className="des">
                  <h4>Super Nnintendo Wolrd</h4>
                  <p>
                    Um site para se mergulhar na nostalgia, vários jogos
                    iconicos e antigos do nintendo! <br />
                    <a
                      className="ancoraprojeto"
                      href="https://alexandecrv.github.io/NintendoWorld/skidrow.html"
                      target="_blank"
                    >
                      Confira aqui!
                    </a>
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c3" />
            <label htmlFor="c3" className="card">
              <div className="row">
                <div className="icon">3</div>
                <div className="des">
                  <div className="viagens">
                    <h4> Viagens</h4>
                    <p>
                      Um site de viagens, lá tambem se encotra aluguel de carro
                      e hotel! <br />{" "}
                      <a
                        className="ancoraprojeto"
                        href="https://alexandecrv.github.io/Viagens/pmidia.html"
                        target="_blank"
                      >
                        Confira aqui!
                      </a>
                    </p>
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
                    <h4>ResumAnime </h4>
                    <p>
                      Um site para amantes de animes, la se tem o resumo dos
                      primeiros 12 episodios de Jujutsu kaisen! <br />
                      <a
                        className="ancoraprojeto"
                        href="https://alexandecrv.github.io/jujutsu/index.html.html"
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
                    <h4>NeoDesignerSuper</h4>
                    <p>
                      Um TodoList diferenciado, com ideas de jogos rpg, serviu
                      como base para fazer o PartyRoom em react <br />{" "}
                      <a
                        className="ancoraprojeto"
                        href="https://alexandecrv.github.io/PartyRoom/"
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
                <p>
                  <strong> /* </strong> HTML, CSS e Javascript, também
                  conhecidas como santíssima trindade da web, formam o principal
                  conjunto de tecnologias para qualquer aplicação web. <br />{" "}
                  Comecei a estudar esses carinhas não tem muito tempo, mas já
                  absorvi o básico dos três !
                </p>
              </div>

              <div className="tmlcssjs">
                <br />
                <h2 className="htmlcssjs">React JS</h2>
                <p>
                  {" "}
                  <strong> /* </strong> O React é uma biblioteca JavaScript
                  declarativa, eficiente e flexível para criar interfaces. Ele
                  permite compor UIs complexas a partir de pequenos e isolados
                  códigos chamados “componentes”.
                  <br />
                  Esse realmente tem sido um desafio aprender, ainda estou
                  aprendendo suas funcionalidades básicas, esse portifolio foi
                  feito completo em react, quis me desafiar pra aprender os
                  conceitos fundamentais.
                </p>
              </div>
              <div>
                <div className="tmlcssjs">
                  <br />
                  <h2 className="htmlcssjs">Git/GitHub</h2>
                  <p>
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
            </div>

            <div className="imggg">
              <img className="imgg" src={hcj} alt="" />
              <br />
              <img className="imgg" src={reac} alt="" />
              <br />
              <img className="imgg" src={git} alt="" />
            </div>
          </div>
          <div></div>
        </section>
        <footer>
          <div className="contatos">
            <h1 className="h1f">Contatos</h1>
            <div className="h2h3">
              <h2 className="htmlcssjs ">Email pra contato</h2>
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
                      href="https://www.instagram.com/stories/xande.mirandac/"
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
