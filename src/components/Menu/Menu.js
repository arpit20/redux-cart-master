import React from 'react';
import styles from './Menu.scss';

const MenuComponent = (props)=>{
    return(
        <div className="level-one-wrap sub-nav">
            <div className="container">
                <h3>Cateories</h3>
                <ul className="group-0">
                    {
                        Object.keys(props.cats).map((cat)=>{
                            return (
                                <li onClick={(e)=>{props.categoryClickHandler(e,cat)}}>
                                    <a href="">{cat}</a>
                                    <div className="level-two-wrap">
                                        <div className="container">
                                            <h3>{cat}</h3>
                                            <ul>
                                                {
                                                    props.cats[cat].map((subCat)=>{
                                                        return(
                                                            <li  onClick={(e)=>{props.getProductsHandler(e,subCat.name)}}>
                                                                <a href="">{subCat.name}</a>
                                                            </li>
                                                        )
                                                    })
                                                 
                                                }
                                             
                                            </ul>
                                        </div>
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
             </div>   
        </div>
    )
}

export default MenuComponent;