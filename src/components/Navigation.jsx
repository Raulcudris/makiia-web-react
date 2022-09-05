import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import logo from '../assets/images/logo-makiia1.png'
import { Header } from './Header';
export const Navigation = () => {
  return (
    <>   
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
            <a className="navbar-brand logo-image" href="index.html"><img src={logo}/></a> 
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" 
                    aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-awesome fas fa-bars"></span>
                    <span className="navbar-toggler-awesome fas fa-times"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#description">¿Quienes Somos?</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle page-scroll" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="article-details.html"><span className="item-text">Galeno 4.0</span></a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">Dadidu</span></a>
                            <div className="dropdown-divider"></div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle page-scroll" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Servicios</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="article-details.html"><span className="item-text">Diseño Web</span></a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">Desarrollo Apps</span></a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">Desarrollo de Software</span></a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">Administracion de Base de Datos</span></a>
                       </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#description">Contactos</a>
                    </li>
                </ul>
            </div>
        </div> 
    </nav>
    <Header/>
    </>
  )
}
