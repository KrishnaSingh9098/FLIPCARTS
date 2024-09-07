



// Components 
import Header  from './Components/header/Header'
import Home  from './Components/home/Home'


import {Box} from '@mui/material'



function App() {
  

  return (
    <div>
      
       <Header/>
       <Box style={{ marginTop : 54}}>
       <Home/>
    
       </Box>
    </div>
  )
}

export default App

// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Box } from '@mui/material';

// // Import your components
// import Home  from './Components/home/Home'
// import Header from './components/header/Header';
// import ProductList from './Components/home/ProductList';
// import ProductDetail from './Components/home/ProductDetails';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Box style={{ marginTop: 54 }}>
//         <Home/>
//         <Routes>
//           <Route path="/" element={<ProductList />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>
//       </Box>
//     </Router>
//   );
// };

// export default App;

