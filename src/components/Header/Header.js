import React from 'react';
import styles from './header.scss';

import MenuComponent from '../Menu/Menu';

const  HeaderComponent = (props) => {

    return (
        <header>
            <div className="primary-nav">
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <span ></span>
                        </a>
                    </div>
                    <div className="search-bar">
                        <form>    
                            <input type="text" className="search-input"></input>
                            <input type="submit" className="search-button"></input>
                        </form>

                    </div>
                    <div className="cart-container">
                        <a className="cart-button">
                        <i className="material-icons">shopping_cart</i>
                            <span>Cart</span>
                        </a>
                    </div>
                 </div>   
            </div>  
            <div className="secondary-nav">
                <div className="container">
                    <nav className="nav-menu">
                        <ul onClick={props.navLinkClickHandler}>
                            <li className="nav-menu__products">
                                <a href="">PRODUCTS</a>
                                <MenuComponent cats={props.cats} {...props}></MenuComponent>
                            </li>
                            <li>
                                <a href="">BRANDS</a>
                            </li>
                            <li>
                                <a href="">DEALS</a>
                            </li>
                            <li>
                                <a href="">SERVICES</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-user-menu">
                        <ul>
                        <li>
                            <a className="profile">Hi, Arpit</a>
                        </li>
                        <li>
                            <a className="cart"></a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>  
        </header>
    )
}


export default HeaderComponent;