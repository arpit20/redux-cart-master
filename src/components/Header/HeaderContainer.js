import React from 'react';
import {connect} from 'react-redux';


import HeaderComponent from './Header';


export default class HeaderContainer extends React.Component{
    constructor(props){
        super(props)
    }

    // static fetchData(store){
    //    return store.dispatch(fetchTopLevelCategories());
    // }

    // componentDidMount(){
    //     this.props.fetchTopCats();
    // }

    navLinkClickHandler(e){
        e.preventDefault();
        document.querySelector(".nav-menu__products").classList.toggle('active');
        document.querySelectorAll(".nav-menu__products ul li").forEach((elem)=>{
            elem.classList.remove('active');
        })
          

    }

    getProductsHandler=(e,cat)=>{
        this.props.history.replace(`category/${cat}`);
        this.navLinkClickHandler(e);
    }

    categoryClickHandler=(e,cat)=>{
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.add('active');
    }

    render(){
        return(
            <HeaderComponent 
            cats={this.props.categories}
            navLinkClickHandler={this.navLinkClickHandler}
            categoryClickHandler={this.categoryClickHandler}
            getProductsHandler={this.getProductsHandler}>
            </HeaderComponent>
        )
    }
}



