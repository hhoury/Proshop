import React, { useEffect} from "react";//useState,
import {useDispatch, useSelector} from 'react-redux'//useDispatch to dispatch call in action, useSelector to select parts of state
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product';
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listProducts} from '../actions/productActions'

 const HomeScreen = () => {
   const dispatch = useDispatch()
   const productList = useSelector(state => state.productList)
   const {loading, error, products} = productList
   useEffect(()=> {
     dispatch(listProducts())
   },[dispatch])
   
  //***below is the old way before redux***
  //const [products, setProducts] = useState([]) // [what u want to call it, function to manipulate] = ([default]) 
  // useEffect(() => { // will be fired when the component loads
  //   const fetchProducts = async () => {
  //     const {data} = await axios.get('/api/products')
  //     setProducts(data)
  //   }
  //   fetchProducts()
  // }, [])
  return (
    <>
      <h1>Latest Products</h1>
      
      {loading? <Loader/>: error? <Message message={error}/>:  <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>
          ))}
      </Row>}
     
    </>
  );
};

export default HomeScreen;
