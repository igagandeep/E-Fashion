import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_products, addToBasket } from '../../redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Products.css';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
      padding: '10px 20px 10px 20px',
      margin : "20px 0px"
    },
    
    media: {
        padding:'0px',
        height: 250,
    },
    loading :{
        width: '100%',
        ' & > * + *': {
      marginTop: '100px',
    }
    },
    content:{
        textAlign:'center'
    },
    actions : {
        display:'flex',
        flexDirection:'column',
      
    },
    price : {
        fontWeight: 'bold'
    },

    shoppingCart : {
        backgroundColor: '#000',
        color:'#fff',
        width:'100%',
        padding:'5px',
        marginTop:'10px',
        '&:hover': {
            backgroundColor: "#e67e22",
         },
    }
  }));




function Products() {
    const classes = useStyles();
    const products = useSelector(state => state.products);
    
    const dispatch = useDispatch();
        useEffect(() => {
            dispatch(fetch_products());
    }, []);

    
    return (
        <div className="products-container">
             
             {products.loading ? 
                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "80vh", width: "100vw" }}>
                <CircularProgress />
                   <span style={{ justifyContent: "center", position: "fixed", top: "45%" }}>Loading...please wait</span>
                </div>

            
            : <div>
            <h1>New Arrivals</h1>
            <div className="products">
            {products  && products.products.map((product, key) => (
                <Card className={classes.root} key={product.id}>
               <Link   className="product" to={'/product/' + product.id}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={product.image}
                        title={product.title}
                        />
                        <CardContent className={classes.content}>
                        <Typography gutterBottom  >
                            {product.title}
                        </Typography>
                        </CardContent>

                    </CardActionArea>
                </Link>
                <CardActions className={classes.actions}>
                   <Typography className={classes.price}>
                       Price -${product.price}
                    </Typography>    
                    <Button size="small"   onClick={() => dispatch(addToBasket(product))}  className={classes.shoppingCart}>
                        Add to Basket
                    </Button>
                </CardActions>
            </Card>
            ))}
            </div>
            </div>
             }
        </div>
    )
}

export default Products
