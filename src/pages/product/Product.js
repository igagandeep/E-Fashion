import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_product } from '../../redux/index';
import './Product.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const product = useSelector(state => state.product.product);
    const loading = useSelector(state => state.product.loading);
    const dispatch = useDispatch();
    const classes = useStyles();
    const id = props.match.params.id;
    
    useEffect(() => {
        dispatch(fetch_product(id))
    }, [dispatch, id]);

    console.log(product);
   
    return (
           <div className="product-container">
    
            {loading ? 
                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "80vh", width: "100vw" }}>
                    <CircularProgress />
                    <span style={{ justifyContent: "center", position: "fixed", top: "45%" }}>Loading...please wait</span>
                </div>
             : <div>   
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
        }
        </div>
    )
}

export default Product
