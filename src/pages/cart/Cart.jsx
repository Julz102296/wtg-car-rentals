import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteFromCart } from '../../redux/cartSlice';
import { addDoc, collection } from 'firebase/firestore';
import { firedb } from '../../firebase/FirebaseConfig';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';


function Cart() {

  const context = useContext(myContext)
  const { mode } = context;

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed");
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

/*
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmount(temp);
    console.log(temp)
  }, [cartItems])

  const addFee = parseInt(100);

  const calculateDateDifference = () => {
    const pickupDateObj = new Date(pickupDate);
    const returnDateObj = new Date(returnDate);
    const timeDifference = returnDateObj.getTime() - pickupDateObj.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;

  };


  const daysDifference = calculateDateDifference();
  
  const subtotal = daysDifference * totalAmount;
  const grandTotal = subtotal + addFee;*/
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmount(temp);
    console.log(temp)
  }, [cartItems])

  const calculateDateDifference = () => {
    const pickupDateObj = new Date(pickupDate);
    const returnDateObj = new Date(returnDate);
  
    if (isNaN(pickupDateObj.getTime()) || isNaN(returnDateObj.getTime())) {
    
      return 0; 
    }
  
    const timeDifference = returnDateObj.getTime() - pickupDateObj.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
  };
  const addFee = parseInt(100);
  
  const daysDifference = calculateDateDifference();
  
  const subtotal = isNaN(daysDifference) ? 0 : daysDifference * totalAmount;
  
  const grandTotal = subtotal + addFee;
  
  //console.log(grandTotal)
 // console.log(daysDifference);

//payment******************************************

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const payNow = async () => {
        // validation 
        if (name === "" || address == "" || pincode == "" || phoneNumber == "" ) {
          return toast.error("All fields are required", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        }
        const addressInfo = {
          name,
          address,
          pincode,
          phoneNumber,
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          )
        }

          var options = {
          key: "rzp_test_dDgfU9xvFYcoNS",
          key_secret: "l0Xc7Gst9XBXnCL67cQ5dgEV",
          amount: parseInt(grandTotal * 100),
          currency: "PHP",
          order_receipt: 'order_rcptid_' + name,
          name: "WTG",
          description: "for testing purpose",
          handler: function (response) {
              console.log(response)
              toast.success('Payment Successful')
          
              const paymentId = response.razorpay_payment_id;

              const orderInfo = {
                cartItems,
                addressInfo,
                date: new Date().toLocaleString(
                  "en-US",
                  {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }
                ),
                email: JSON.parse(localStorage.getItem("user")).user.email,
                userid: JSON.parse(localStorage.getItem("user")).user.uid,      
              }
              try {
                
                const orderRef = collection(firedb, 'order');
                addDoc(orderRef, orderInfo)

              } catch (error) {
                console.log(error)
              }
            },
            
            theme: {
              color: "#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
            pay.open();
              console.log(pay)

      }
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <Layout >
      <div className="bg-gray-100 pt-5 mb-[60%]" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <h1 className="mb-10 text-center text-2xl font-bold">Check Our Rate</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">


         {/* {cartItems.map((item, index) => {
            const {brand, model, imageURL, price,
              description, category, type, capacity, location, size} = item;
            return (
              <div className="justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-2 sm:flex  sm:justify-start" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
              <img src={imageURL} alt="product-image" className="w-100 h-40 rounded-lg sm:w-100"/>
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{brand}</h2>
                  <h3 className="text-lg text-gray-600" style={{ color: mode === 'dark' ? 'white' : '' }}>{model}</h3>
                  <h2 className="text-sm  text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{description}</h2>
                  <p className="text-lg text-gray-600" >{category}</p>
                  <p className="text-lg text-gray-600" >{type}</p>
                  <p className="text-lg text-gray-600" >{capacity}</p>
                  <p className="text-lg text-gray-600" >{location}</p>
                  <p className="text-lg text-gray-600" >{size}</p>
                  <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{price}</p>
                </div>
                <div onClick={() => deleteCart(item)} className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>

                </div>
              </div>
            </div>
            )
          })} */}

                {cartItems.map((item, index) => {
                            const {brand, model, imageURL, price,
                              description, category, type, capacity, location, size} = item;
                            return (
                <article className="flex bg-white transition hover:shadow-xl my-2">
                  <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-slate-400">
                    <time
                      datetime="2022-10-10"
                      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-100"
                    >
                      <span>Pick-up Location</span>
                      <span className="w-px flex-1 bg-gray-900/10"></span>
                      <span>{location}</span>
                    </time>
                  </div>

                  <div className="hidden sm:block sm:basis-56">
                    <img
                      alt="Guitar"
                      src={imageURL}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                      <a href="#">
                        <div>
                        <h2 className="font-bold uppercase text-gray-700">{brand} </h2>
                        <h1>{model}</h1>
                        </div>
                        

                      </a>

                      <p className="mt-1 p-2 line-clamp-3 text-sm/relaxed text-gray-700">
                              <dl className="mt-6 flex gap-4 sm:gap-6">
                                <div className="flex flex-col-reverse">
                                  <dt className="text-sm font-medium text-gray-600">Type</dt>
                                  <dd className="text-xs text-gray-500">{type}</dd>
                                </div>

                                <div className="flex flex-col-reverse">
                                  <dt className="text-sm font-medium text-gray-600">Category</dt>
                                  <dd className="text-xs text-gray-500">{category}</dd>
                                </div>

                                <div className="flex flex-col-reverse">
                                  <dt className="text-sm font-medium text-gray-600">Dimension</dt>
                                  <dd className="text-xs text-gray-500">{size}</dd>
                                </div>

                                <div className="flex flex-col-reverse">
                                  <dt className="text-sm font-medium text-gray-600">Capacity</dt>
                                  <dd className="text-xs text-gray-500">{capacity}</dd>
                                </div>
                              </dl>

                              <dl className="mt-6 flex gap-4 sm:gap-6">
                              <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-600">Rate</dt>
                                    <dd className="text-xs text-gray-600 bg-yellow-300 p-1 rounded-md hover:bg-yellow-400 font-bold">{price} / Day</dd>
                                  </div>
                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-600">Desc</dt>
                                    <dd className="text-xs text-gray-500">{description}</dd>
                                  </div>
                              </dl>
                      </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                      <p
                        onClick={() => deleteCart(item)} 
                        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                </article>
                )
              })}


          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/4" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div>
              <div>
              <div>
                <label>Pickup Date</label>
                <input
                  type="date"
                  className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
                </div>
                <div>
                <label>Return Date</label>
                <input
                 type="date"
                 className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}
                 value={returnDate}
                 onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
              <hr />
              <div>
                <label htmlFor="">Total Days</label>
                <p>{daysDifference}</p>
                <hr />
              </div>
              </div>
            </div>
            <div className="mb-2 flex justify-between"> 
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>PHP {totalAmount}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Process Fee</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>PHP {addFee}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>PHP {grandTotal}</p>
              </div>
            </div>
            {/*<Modal />*/}
            <Modal 
              name={name} 
              address={address} 
              pincode={pincode} 
              phoneNumber={phoneNumber}  
              setName={setName} 
              setAddress={setAddress} 
              setPincode={setPincode} 
              setPhoneNumber={setPhoneNumber} 
              payNow={payNow} 
            />
            {/*<button
              type="button"
              className="w-full  bg-blue-600 py-2 text-center rounded-lg text-white font-bold "
            >
              Book Now
            </button>*/}
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </Layout>
  )
}

export default Cart