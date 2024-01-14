import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Css/ProductDetails.css"

function ProductDetails() {
    const id = useParams();
    const ID = id.id;
    const [data, SetData] = useState();
    const [NullProduct, setNullProduct] = useState(null);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${ID}`)
            .then((resolve) => resolve.json())
            .then((data) => {
                SetData(data);
                setNullProduct(data);
            });
    }, []);
    if(!NullProduct){
        return <div className='Loading'>Loading...</div>
    }
    return (
        <div className='productDetails'>
            <div className='DetailsLeft'>
                <img src={data.image} alt="" />
            </div>
            <div className='DetailsRight'>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <h3>Price : <span>{data.price}$</span></h3>
                <button>Purchase</button>
            </div>
        </div>
    )
}

export default ProductDetails