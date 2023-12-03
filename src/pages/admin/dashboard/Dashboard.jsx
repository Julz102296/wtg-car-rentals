import React, { useContext } from 'react'
//import {FaUserTie } from 'react-icons/fa';
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';

function Dashboard() {
    const context = useContext(myContext)
    const { mode} = context
  return (
    <Layout>
        <section className="text-gray-600 body-font mt-10 mb-10">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="h-40 border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-gray-200 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                {/*<FaUserTie size={50} />*/}
                            </div>
                            <h2 className="title-font font-medium text-3xl text-gray-400 fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>10</h2>
                            <p className=" text-blue-300  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="h-40 border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-gray-200 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                {/*/<FaUserTie size={50} />*/}
                            </div>
                            <h2 className="title-font font-medium text-3xl text-gray-400 fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>10</h2>
                            <p className=" text-blue-300  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="h-40 border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-gray-200 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                {/*<FaUserTie size={50} />*/}
                            </div>
                            <h2 className="title-font font-medium text-3xl text-gray-400 fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>10</h2>
                            <p className=" text-blue-300  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="h-40 border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-gray-200 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                {/*<FaUserTie size={50} />*/}
                            </div>
                            <h2 className="title-font font-medium text-3xl text-gray-400 fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>10</h2>
                            <p className=" text-blue-300  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total</p>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardTab />
        </section>
    </Layout>
  )
}

export default Dashboard