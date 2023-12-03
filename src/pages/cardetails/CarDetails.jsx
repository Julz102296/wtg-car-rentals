import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice'
import { firedb } from '../../firebase/FirebaseConfig';
import Banner from '../../components/banner/Banner';

function CarDetails() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [products, setProducts] = useState('')
    const params = useParams()
    // console.log(products.title)

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(firedb, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProductData()

    }, [])



    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    // add to cart
    const addCart = (products) => {
        dispatch(addToCart(products))
        toast.success('Added to');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])




    return (
        <Layout>
           
        <div className='mx-auto'>
            <div className=''>
            <article className='my-10 mx-2 '> 
            {products && 
                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
                                <div className="h-full rounded-lg sm:block sm:basis-56">
                                    <img
                                                alt="Guitar"
                                                src={products.imageURL}
                                                className=" h-80 w-full object-cover"
                                            />
                                </div>
                                    <div className="rounded-lg bg-gray-100 lg:col-span-2">
                                        <div className="flex flex-1 flex-col justify-between sm:block sm:basis-56">
                                        <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                  <a href="#">
                                    <div>
                                    <h1 className="font-bold uppercase text-3xl text-gray-700">{products.brand} </h1>
                                    <h1 className='text-xl'>{products.model}</h1>
                                    </div>
                                    
            
                                  </a>
            
                                  <p className="mt-1 p-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                  <div className="flex mb-4">
                                <span className="flex items-center text-xl">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-yellow-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                                          <dl className="mt-6 flex gap-4 sm:gap-6">
                                            <div className="flex flex-col-reverse">
                                              <dt className="text-lg font-medium text-gray-600">Type</dt>
                                              <dd className="text-md text-gray-500">{products.type}</dd>
                                            </div>
            
                                            <div className="flex flex-col-reverse">
                                              <dt className="text-lg font-medium text-gray-600">Category</dt>
                                              <dd className="text-md text-gray-500">{products.category}</dd>
                                            </div>
            
                                            <div className="flex flex-col-reverse">
                                              <dt className="text-lg font-medium text-gray-600">Dimension</dt>
                                              <dd className="text-md text-gray-500">{products.size}</dd>
                                            </div>
            
                                            <div className="flex flex-col-reverse">
                                              <dt className="text-lg font-medium text-gray-600">Capacity</dt>
                                              <dd className="text-md text-gray-500">{products.capacity}</dd>
                                            </div>
                                          </dl>
            
                                          <dl className="mt-6 flex gap-4 sm:gap-6">
                                          <div className="flex flex-col-reverse">
                                                <dt className="text-lg font-medium text-gray-600">Rate</dt>
                                                <dd className="text-md text-gray-600 bg-yellow-300 p-1 rounded-md hover:bg-yellow-400 font-bold">{products.price} / Day</dd>
                                              </div>
                                            <div className="flex flex-col-reverse">
                                                <dt className="text-lg font-medium text-gray-600">Desc</dt>
                                                <dd className="text-md text-gray-500">{products.description}</dd>
                                              </div>
                                          </dl>
                                  </p>
                                </div>
            
                                <div className="sm:flex sm:items-end sm:justify-end">
                                  <p
                                    onClick={()=>addCart(products)}
                                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                  >
                                    Reserve Now!
                                  </p>
                                </div>
                              </div>
            
            
            
            
                                                
                                        </div>
                                    </div>
                            </div>
                        
            }

            </article>
            </div>
        </div>
        <Banner />
        
        </Layout>
    )
}

export default CarDetails