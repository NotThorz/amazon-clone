import React from 'react';
import {Produits} from'./Allproducts';
import './Products.css';
import { Button } from 'react-bootstrap';
const Products = () => {
    
    return (
        <div>{
        Produits.map((Produit,i)=>{
            return(
            <div key ={i} className='tc grow bg-white br3 pa3 ma3 dib bw1 shadow-5 product'>
            <img alt='product' src={Produit.src} />
            <div>
            <h6>{Produit.name}</h6>
            <p><strong>{Produit.price} $</strong></p>
            <p>Rating: {Produit.rating}/5</p>
            <p>{Produit.availability?'Available':'Not Available'}</p>
            <Button style={{background:"#f0c14b"}}>Add To Cart</Button>
            </div>
            </div>);
            
        })
    }
    </div>
  );
}

export default Products
