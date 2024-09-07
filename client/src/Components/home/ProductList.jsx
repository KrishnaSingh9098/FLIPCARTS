// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import axios from 'axios';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); 
//   useEffect(() => {
//     const fetchProducts = async () => {
//         try {
//           const response = await axios.get('http://localhost:5000/api/product');
//           if (Array.isArray(response.data)) {
//             setProducts(response.data);
//           } else {
//             throw new Error('Unexpected response format');
//           }
//         } catch (error) {
//           console.error('Error fetching products:', error.response ? error.response.data : error.message);
//           setError('Failed to load products. Please try again later.');
//         } finally {
//           setLoading(false);
//         }
//       };
      

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <Typography>Loading...</Typography>;
//   }

//   if (error) {
//     return <Typography color="error">{error}</Typography>;
//   }

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
//       {products.length === 0 ? (
//         <Typography>No products available.</Typography>
//       ) : (
//         products.map(product => (
//           <Card key={product._id} sx={{ maxWidth: 345, marginBottom: 2 }}>
//             {product.image && (
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={product.image}
//                 alt={product.productName}
//               />
//             )}
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 {product.productName}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {product.productDescription}
//               </Typography>
//               <Typography variant="h6" color="text.primary">
//                 ${product.price}
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary">
//                 {product.category}
//               </Typography>
//             </CardContent>
//           </Card>
//         ))
//       )}
//     </Box>
//   );
// };

// export default ProductList;
import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/product');
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching products:', error.response ? error.response.data : error.message);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
      {products.length === 0 ? (
        <Typography>No products available.</Typography>
      ) : (
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2}>
          {products.map(product => (
            <Box key={product._id} sx={{ maxWidth: 345, margin: 1 }}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {product.image && (
                  <CardMedia
                    component="img"
                    sx={{ height: 140, objectFit: 'contain' }}
                    image={product.image}
                    alt={product.productName}
                  />
                )}
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="h5" component="div">
                    {product.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.productDescription}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    ${product.price}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {product.category}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductList;

