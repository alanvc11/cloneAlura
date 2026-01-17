import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cadeado from '@mui/icons-material/LockOutlined';
import Calendario from '@mui/icons-material/CalendarToday';
import Encerrado from '@mui/icons-material/EventAvailable';
import './App.css';

function App() {
  return (
    <>
     
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-alura">
        <Container className="navbar-alura-container">
          <Navbar.Brand href="#home" className="navbar-alura-brand">
            <img
              src="/logo-alura.svg"
              alt="Alura"
              className="navbar-alura-logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-alura-toggle me-auto" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-alura-left" />

            <Nav className="navbar-alura-right">
              <Nav.Link className="navbar-alura-link nav-icon">
                <Cadeado className="navbar-alura-icon" />
                <span>Dashboard</span>
              </Nav.Link>

              <Nav.Link className="navbar-alura-link">
                Comunidade ⌵
              </Nav.Link>

              <Nav className="perfil">
                <div className="avatar">A</div>

                <NavDropdown
                  title="Alan"
                  id="collapsible-nav-dropdown"
                  className="navbar-alura-dropdown"
                >
                  <NavDropdown.Item>Perfil</NavDropdown.Item>
                  <NavDropdown.Item>Configurações</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Sair</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
      <section className="section">
        <div className="section-conteudo">
          <h2>IMERSÕES</h2>
        </div>
      </section>

     
      <main className="main">
        <section className="container-main">
          <p className="descricao-main">
            Imersões são eventos que proporcionam aulas intensas com foco em
            conhecimentos práticos. Durante as aulas você irá{' '}
            <strong>construir projetos para seu portfólio</strong>, com direito a
            certificado.
          </p>

          
          <h2 className="titulo">Imersões ativas</h2>

          <div className="card">
            <div className="badge-aulas">
              <span>▶</span> AULAS LIBERADAS
            </div>

            <h3 className="imersao-titulo">
              imersão <span className="highlight">dados_python</span>
            </h3>

            <p className="descricao">
              Começar do zero é o primeiro <br />
              passo para ir além. Aprenda análise
              de dados com Python em quatro...
            </p>

            <div className="data-info">
              <Calendario /> 01/01 - 30/01
            </div>

            <button className="btn-saber-mais">SABER MAIS</button>

            <div className="container-equipe">
              <img
                src="/equipe-alura.webp"
                alt="Equipe Alura"
                className="img-equipe"
              />
            </div>
          </div>

          
          <hr style={{ margin: '60px 0' }} />

          
          <h2 className="titulo">Imersões que já acabaram</h2>

          
          <div className="cards-wrapper">
            

            <div className="card">
              <div className="badge-aulas">
                <span><Encerrado /></span> ENCERRADA
              </div>

              <h3 className="imersao-titulo">
                imersão <span className="highlight">dev</span>
              </h3>

              <p className="descricao">
                Sair da zona de conforto é o primeiro
                passo para crescer. Aprenda a criar um
                site dinâmico...
              </p>

              <button className="btn-saber-mais-dev">SAIBA MAIS</button>

              <div className="container-equipe">
              <img
                src="/imersaodev.webp"
                alt="Equipe Alura"
                className="img-equipe"
              />
            </div>
            </div>


            <div className="card">
              <div className="badge-aulas">
                <span><Encerrado /></span> ENCERRADA
              </div>

              <h3 className="imersao-titulo">
                imersão <span className="highlight">IA_</span>
              </h3>

              <p className="descricao">
                Sair da zona de conforto é o <br />
                primeiro passo para crescer. <br />
                Aprenda a usar a IA na prática, em...
              </p>

              <button className="btn-saber-mais">SAIBA MAIS</button>

              <div className="container-equipe">
              <img
                src="/imersaoia.webp"
                alt="Equipe Alura"
                className="img-equipe"
              />
            </div>

            </div>

            <p className="descricao-main">
            O acervo de Imersões passadas está <strong> disponível apenas para alunos e alunas </strong> que possuem matrícula
            ativa na Alura. Matricule-se e tenha acesso a todas as Imersões que já aconteceram por aqui, além de
            todos os cursos disponíveis na plataforma!
          </p>

          
          </div> 

          <button className="btn-planos">VER PLANOS ALURA</button>

        </section>
      </main>
    </>
  );
}

export default App;
