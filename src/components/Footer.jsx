/* eslint-disable no-unused-vars */

import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-light custom-bg text-center text-lg-start mt-5" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="container p-4" >
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-semibold">Jogo da Memória</h5>
            <p className='lh-base'>
              Esse jogo faz parte de um projeto feito em React e Bootstrap.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/robson-ferreira-508247134/" className="text-dark link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Linkedin</a>
              </li>

              <li>
                <a target="_blank" href="https://github.com/RobsonFe" className="text-dark link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">GitHub</a>
              </li>

              <li>
                <a target="_blank" href="https://www.instagram.com/rob_ferreira88/" className="text-dark link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contato</h5>
            <ul className="list-unstyled">
              {/* <li>
                <p className="text-dark">Endereço: Rua Alecrim, n67, Rio Doce - Olinda </p>
              </li> */}
              <li>
                <p className="text-dark">Telefone: (81) 98365-9103</p>
              </li>
              <li>
                <p className="text-dark">E-mail: robson-ferreiradasilva@hotmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 fw-bold" style={{ backgroundColor: '#2980b9' }}>
        © {new Date().getFullYear()} Robson Ferreira
      </div>
    </footer>
  )
}

export default Footer