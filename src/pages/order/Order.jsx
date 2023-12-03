import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import Loader from '../../components/loader/Loader'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(myContext)
  const { mode, loading, order } = context
  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ?
        (<>
          <div className=" h-full pt-10">
            {
              order.filter(obj => obj.userid == userid).map((order) => {
                // order.cartItems.map()
                return (
                  <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    {
                      order.cartItems.map((item) => {
                        return (
                        <article className="flex bg-white transition hover:shadow-xl my-2">
                  <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-slate-400">
                    <time
                      datetime="2022-10-10"
                      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-100"
                    >
                      <span>Reservation Date :</span>
                      <span className="w-px flex-1 bg-gray-900/10"></span>
                      <span>{item.date}</span>
                    </time>
                  </div>

                  <div className="hidden sm:block sm:basis-56">
                    <img
                      alt="Guitar"
                      src={item.imageURL}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                      <a href="#">
                        <div>
                        <h2 className="font-bold uppercase text-gray-700">{item.brand} </h2>
                        <h1>{item.model}</h1>
                        </div>
                        

                      </a>

                      <p className="mt-1 p-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        {/*<p>Type: {type}</p>
                        <p>Category: {category}</p>
                        <p>Capacity: {capacity}</p>
                            <p>Dimension: {size}</p>*/}

                              <dl class="mt-6 flex gap-4 sm:gap-6">
                                <div class="flex flex-col-reverse">
                                  <dt class="text-sm font-medium text-gray-600">Type</dt>
                                  <dd class="text-xs text-gray-500">{item.type}</dd>
                                </div>

                                <div class="flex flex-col-reverse">
                                  <dt class="text-sm font-medium text-gray-600">Category</dt>
                                  <dd class="text-xs text-gray-500">{item.category}</dd>
                                </div>

                                <div class="flex flex-col-reverse">
                                  <dt class="text-sm font-medium text-gray-600">Dimension</dt>
                                  <dd class="text-xs text-gray-500">{item.size}</dd>
                                </div>

                                <div class="flex flex-col-reverse">
                                  <dt class="text-sm font-medium text-gray-600">Capacity</dt>
                                  <dd class="text-xs text-gray-500">{item.capacity}</dd>
                                </div>
                              </dl>

                              <dl class="mt-6 flex gap-4 sm:gap-6">
                                <div class="flex flex-col-reverse">
                                    <dt class="text-sm font-medium text-gray-600">Desc</dt>
                                    <dd class="text-xs text-gray-500">{item.description}</dd>
                                  </div>
                              </dl>

                      </p>
                    </div>
                  </div>
                </article>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </>)
        :
        (
          <h2 className=' text-center tex-2xl text-white'>No Booking</h2>
        )

      }
    </Layout>
  )
}

export default Order


                          {/*<div className="rounded-lg md:w-2/3">
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                              <img src={item.imageURL} alt="product-image" className="w-full h-full rounded-lg sm:w-40" />
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.brand}</h2>
                                <h3 className="text-lg text-gray-600" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.model}</h3>
                                <h2 className="text-sm  text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</h2>
                                <p className="text-lg text-gray-600" >{item.category}</p>
                                <p className="text-lg text-gray-600" >{item.type}</p>
                                <p className="text-lg text-gray-600" >{item.capacity}</p>
                                <p className="text-lg text-gray-600" >{item.location}</p>
                                <p className="text-lg text-gray-600" >{item.size}</p>
                                <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.price}</p>
                                </div>
                              </div>
                            </div>
                        </div>*/}