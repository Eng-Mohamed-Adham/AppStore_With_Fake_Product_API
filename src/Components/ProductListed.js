import React, {useEffect} from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../ReduxStore/Actions/ProductAction';
const ProductListed = () => {
const products = useSelector(state => state);
const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(()=>{
        fetchProducts();
    }, []);
    console.log("Product: ", products)
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
}

export default ProductListed;