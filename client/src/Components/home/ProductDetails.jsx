// // ProductDetail.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import axios from 'axios';

// const ProductDetail = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/product/${id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error('Error fetching product:', error.response ? error.response.data : error.message);
//         setError('Failed to load product details. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return <Typography>Loading...</Typography>;
//   }

//   if (error) {
//     return <Typography color="error">{error}</Typography>;
//   }

//   if (!product) {
//     return <Typography>Product not found.</Typography>;
//   }

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
//       <Card sx={{ maxWidth: 600 }}>
//         {product.image && (
//           <CardMedia
//             component="img"
//             sx={{ height: 300, objectFit: 'contain' }}
//             image={product.image}
//             alt={product.productName}
//           />
//         )}
//         <CardContent>
//           <Typography variant="h4" component="div">
//             {product.productName}
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             {product.productDescription}
//           </Typography>
//           <Typography variant="h5" color="text.primary">
//             ${product.price}
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary">
//             {product.category}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default ProductDetail;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Extract product ID from URL parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError('Invalid product ID');
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error.response ? error.response.data : error.message);
        setError('Failed to load product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!product) {
    return <Typography>Product not found.</Typography>;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
      <Card sx={{ maxWidth: 600 }}>
        {product.image && (
          <CardMedia
            component="img"
            sx={{ height: 300, objectFit: 'contain' }}
            image={product.image}
            alt={product.productName}
          />
        )}
        <CardContent>
          <Typography variant="h4" component="div">
            {product.productName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {product.productDescription}
          </Typography>
          <Typography variant="h5" color="text.primary">
            ${product.price}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {product.category}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetail;

