import React from 'react';
import ItemCard from './ItemCard';
import {fetchTrendingProducts} from '../../actions/trendingProductActions';
import {fetchMVProducts} from '../../actions/trendingProductActions';
import styles from './ItemCard.scss';

import { connect } from 'react-redux';

class ItemContainer extends React.Component{

    constructor(props){
        super(props)
    }
    
    static fetchData(store){
        
        return Promise.all([store.dispatch(fetchTrendingProducts()),
            store.dispatch(fetchMVProducts())]);
        // 
    }

    componentDidMount(){
        this.props.fetchTProducts();
        this.props.fetchMVProducts();
    }

    render(){
        return(
            <div>
                <div className="main-banner">
                    <div className="banner-img"></div>
                </div>
                <div className="trending-header">
                    <h4>Trending Products</h4>
                </div>
                <div className="trending-items">
                    {
                        this.props.products.trendingProducts.map((item,index)=>(
                            <ItemCard key={index} product={item}></ItemCard>
                        ))
                    }
                </div>   
                <div className="trending-header">
                    <h4>Popular Products</h4>
                </div>
                <div className="trending-items">
                    {
                        this.props.products.MVProducts.map((item,index)=>(
                            <ItemCard key={index} product={item}></ItemCard>
                        ))
                    }
                </div>   
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    let {products} = state;
    return {products};
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchTProducts : ()=>{
            dispatch(fetchTrendingProducts())
        },
        fetchMVProducts : ()=>{
            dispatch(fetchMVProducts())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)