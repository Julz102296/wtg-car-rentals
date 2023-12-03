import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext';

function Update() {
    const context = useContext(myContext);
    const {products, setProducts, updateProduct } = context;
    return (
        <div>
            <div className='flex justify-center items-center mt-5 w-full'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={products.brand}
                            onChange={(e) => setProducts({...products, brand: e.target.value})}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Brand'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.model}
                            onChange={(e) => setProducts({...products, model: e.target.value})}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Model'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.imageURL}
                            onChange={(e) => setProducts({...products, imageURL: e.target.value})}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Image URL'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.price}
                            onChange={(e) => setProducts({...products, price: e.target.value})}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.category}
                            onChange={(e) => setProducts({...products, category: e.target.value})}
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Category'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.type}
                            onChange={(e) => setProducts({...products, type: e.target.value})}
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Type'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.capacity}
                            onChange={(e) => setProducts({...products, capacity: e.target.value})}
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Capacity'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.size}
                            onChange={(e) => setProducts({...products, size: e.target.value})}
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Size'
                        />
                    </div>
                    <div>
                       <input type="text" 
                            value={products.location}
                            onChange={(e) => setProducts({...products, location: e.target.value})}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Location'>

                       </input>
                    </div>
                    <div>
                       <textarea cols="30" rows="10" 
                            value={products.description}
                            onChange={(e) => setProducts({...products, description: e.target.value})}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Description'>

                       </textarea>
                    </div>

                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={updateProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Update
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Update