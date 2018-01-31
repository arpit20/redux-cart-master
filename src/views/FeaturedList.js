import React from 'react';

import ItemDetailCard from '../components/Product/ItemDetailCard';

import {fetchProductsForCat} from '../actions/filterProductAction';


import { connect } from 'react-redux';

class ProductList extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        let catSelected = this.props.match.params.cat;
        this.props.fetchProducts(catSelected);
    }

    render(){
        return(
            
            <div>
                <div className="products-header">
                    <h4>All Items</h4>
                </div>
                <div className="products-items">
                    {
                        this.props.filterProducts.map((item,index)=>(
                            <ItemDetailCard key={index} product={item}></ItemDetailCard>
                        ))
                    }
                </div>   
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    let {filterProducts} = state;
    return {filterProducts};
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchProducts : (cat)=>{
            dispatch(fetchProductsForCat(cat))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)