import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_products, addToBasket } from '../../redux/index';
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
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",   

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
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",   

            
            backgroundColor: "#f39c12",
         },
    }
  }));

function Products() {
    const classes = useStyles();
    const products = useSelector(state => state.products.products);
    const loading = useSelector(state => state.products.loading)  
    const dispatch = useDispatch();

    useEffect(() => {
        // This function will fire an action which leads to retrieve data from api
        dispatch(fetch_products());

     
    }, [dispatch]);


    return (
        <div className="products-container">         
             {loading ? 
                <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "80vh", width: "100vw" }}>
                <CircularProgress />
                   <span style={{ justifyContent: "center", position: "fixed", top: "45%" }}>Loading...please wait</span>
                </div>

            
            : <div>
            <h1>New Arrivals</h1>
            <div className="products">
            {products  && products.map((product, key) => (
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
                       Price: ${product.price}
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
