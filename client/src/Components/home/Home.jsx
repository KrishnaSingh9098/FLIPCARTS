import React from 'react'
import NavBar from './NavBar';
import Banner from './Banner';

import {Box,styled} from '@mui/material'
import ProductList from './ProductList';
import ProductDetail from './ProductDetails';

const Component = styled(Box)`
padding: 10px;
background:#F2F2F2;
`

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Component>
      <Banner/>
      <ProductList/>
     <ProductDetail/>
      </Component>
      
    </div>
  )
}

export default Home