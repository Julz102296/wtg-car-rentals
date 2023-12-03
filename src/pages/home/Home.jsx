import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
//import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/HeroSection'
import ProductCard from '../../components/productcard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'
//import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Filter from '../../components/filter/Filter'
import { Input } from 'postcss'
import Banner from '../../components/banner/Banner'
//import { addToCart, deleteFromCart } from '../../redux/cartSlice'

function Home() {
 //const dispatch = useDispatch();
 /*const cartItem = useSelector((state) => state.cart);

 console.log(cartItem);*/

 /*const addCart = () => {
  dispatch(addToCart("shirt"));
 }

 const deleteCart = () => {
  dispatch(deleteFromCart("shirt"));
 }*/

  return (
    <Layout>
      {/*<div className="flex gap-5 justify-center">
        <button className='bg-gray-400 p-5' onClick={() => addCart()}>add</button>
        <button className='bg-gray-400 p-5' onClick={() => deleteCart()}>del</button>
      </div>*/}
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allcars'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Banner />
      <Track />
    <Testimonial />
    </Layout>
  )
}

export default Home
