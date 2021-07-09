import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Products.css';

const useStyles = makeStyles({
    root: {
      width: 300,
      padding: '10px 20px 10px 20px',
      margin : "20px 0px"
    },
    media: {
        padding:'0px',
        height: 250,
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
  });




function Products() {
    const [products, setProducts] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => setProducts(res.data));
    }, []);
    
    return (
        <div className="products-container">
            
            <h1>New Arrivals</h1>
            <div className="products">
            {products.map((product, key) => (
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
                    <Button size="small"  className={classes.shoppingCart}>
                        Add to Basekt
                    </Button>
                </CardActions>
            </Card>
            ))}
            </div>
        </div>
    )
}

export default Products
