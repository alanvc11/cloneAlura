import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cadeado from '@mui/icons-material/LockOutlined';
import Calendario from '@mui/icons-material/CalendarToday';
import './App.css';

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar collapseOnSelect expand="lg" variant='dark' className="navbar-alura">
        <Container className="navbar-alura-container">
          <Navbar.Brand href="#home" className="navbar-alura-brand">
            <img
              src="/logo-alura.svg"
              alt="Alura"
              className="navbar-alura-logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-alura-toggle me-auto"
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-alura-left">
              <Nav.Link className="navbar-alura-link" />
            </Nav>

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

      {/* HERO */}
      <section className="section">
        <div className="section-conteudo">
          <h2>IMERSÕES</h2>
        </div>
      </section>

      {/* MAIN */}
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
            {/* Badge superior */}
            <div className="badge-aulas">
              <span className="icon-play">▶</span> AULAS LIBERADAS
            </div>

            {/* Título com destaque */}
            <h3 className="imersao-titulo">
              imersão <span className="highlight">dados_python</span>
            </h3>

            {/* Descrição e Data */}
            <p className="descricao">
              Começar do zero é o primeiro <br/>
              passo para ir além. Aprenda análise
              de dados com Python em quatro...
            </p>

            <div className="data-info">
              <span className="icon-calendar"><Calendario /></span> 01/01 - 30/01
            </div>

            {/* Botão com corte lateral */}
            <button className="btn-saber-mais">SABER MAIS</button>

            {/* Imagem da Equipe (Posicionada absolutamente) */}
            <div className="container-equipe">
              <img
                src="/equipe-alura.webp"
                alt="Equipe Alura"
                className="img-equipe"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
