import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-blue-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-492532708-copy.jpg?resize=1200:*" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum consequatur nam nobis sunt non quibusdam et, porro odio, iure laudantium beatae saepe quas quia labore dicta tempore.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Vin Diesel</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Fast and The Furious</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jason-statham-935-24-03-2017-13-50-52.jpg" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo esse nesciunt reprehenderit nobis expedita doloribus, fugiat sequi praesentium soluta? Veniam incidunt ipsum animi harum consectetur necessitatibus, doloremque possimus!</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Jason Statham</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">The Transporter</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.ctfassets.net/pnq4hpds29uh/7Khdf8H5jzcsBZ9Mrz4FZ5/394672b84f66bb340e1b739808f7e7e2/8.27_LewisHamilton_Large.jpg?fit=fill&w=675&h=355&fm=webp&q=100" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sequi quibusdam laudantium quos nisi. Minima quo veniam ratione totam, perferendis inventore accusantium, iste hic, libero consequatur temporibus delectus.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Lewis Hamilton</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Formula 1ne</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial