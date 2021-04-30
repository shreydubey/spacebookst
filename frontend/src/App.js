import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ShopHomeScreen from './screens/ShopHomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

import Home from './pages/Home'
import Explore from './components/Explore'
import GlobalStyles from './components/GlobalStyles'
import Nav from './components/Nav'
import Stats from './pages/Stats';

const App = () => {
  return (
    <Router>
    
      <GlobalStyles />
      <Nav />
      <Route path={"/"} exact>
        <Explore />
      </Route>
      <Route path={["/home/launch/:id", "/home"]} exact>
        <Home />
      </Route>
      <Route path="/home/stats" exact>
        <Stats />
      </Route>
  
      <main className='py-3'>
        <Container>
        
          <Route path='/shop' component={ShopHomeScreen} exact />
          <Route path='/shop/product/:id' component={ProductScreen} />
          <Route path='/shop/order/:id' component={OrderScreen} />
          <Route path='/shop/shipping' component={ShippingScreen} />
          <Route path='/shop/payment' component={PaymentScreen} />
          <Route path='/shop/placeorder' component={PlaceOrderScreen} />
          <Route path='/shop/login' component={LoginScreen} />
          <Route path='/shop/register' component={RegisterScreen} />
          <Route path='/shop/profile' component={ProfileScreen} />
          {/*<Route path='/shop/product/:id' component={ProductScreen} />*/}
          <Route path='/shop/cart/:id?' component={CartScreen} />
          <Route path='/shop/admin/userlist' component={UserListScreen} />
          <Route path='/shop/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/shop/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/shop/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/shop/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/shop/admin/orderlist' component={OrderListScreen} />
          <Route path='/shop/search/:keyword' component={ShopHomeScreen} exact />
          <Route path='/shop/page/:pageNumber' component={ShopHomeScreen} exact />
          <Route
            path='/shop/search/:keyword/page/:pageNumber'
            component={ShopHomeScreen}
            exact
          />
          
        </Container>
      </main>
    </Router>
  )
}

export default App