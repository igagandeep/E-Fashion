import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Product.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
 
    purchaseButton : {
        backgroundColor: '#e67e22',
        color:'#fff',
        marginRight:'20px',
        '&:hover': {
            backgroundColor: "#e67e22",
         },
    }
  });
 

function Product(props) {
    const [product, setProduct] = useState({});
    const classes = useStyles();
    const id = props.match.params.id;
    
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + id)
        .then((res) => {
            setProduct(res.data);
        }) 
    }, [id]);

    console.log(product.image);
    return (
        <div className="product-container">
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                <Link color="inherit" to="/" >
                    Home
                </Link>
                <Typography color="textPrimary">{product.title}</Typography>
            </Breadcrumbs>
            <div className="product">
                <div className="product-image">
                    <img src={product.image}  width="400px" height="400px"  alt={product.title}/>
                </div>
                <div className="product-description">
                    <h2>{product.title}</h2>
                    <p>{product.description} </p>
                    <p>${product.price}</p>
                    <div className="quantity">
                        <span>Quantity </span> 
                        <button>-</button> <span> 1 </span><button>+</button>
                    </div>
                    <div className="purchase">
                        <Button className={classes.purchaseButton}>ADD TO CART</Button>
                        <Button className={classes.purchaseButton}>BUY NOW</Button>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Product
