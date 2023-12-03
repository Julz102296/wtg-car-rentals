import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { firedb } from '../../firebase/FirebaseConfig';

function myState(props) {
  const [mode, setMode] = useState('light');
  

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = "rgb(17, 24, 39)"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
    }
  }

  const [loading, setLoading] = useState(false);
  
  const [products, setProducts] = useState({
      brand: null,
      model: null,
      imageURL: null,
      price: null,
      description: null,
      category: null,
      type: null,
      capacity: null,
      size: null,
      location: null,
      time: Timestamp.now(),
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )

  });
/*************** Add product section ******* */
  const addProduct = async () => {
    if(products.brand == null || products.model == null || products.imageURL == null ||
      products.price == null || products.description == null || products.category == null || 
      products.type == null || products.capacity == null || products.size == null || products.location == null){
        return toast.error("all fields are required!")
      }
      
      setLoading(true)

      try {

        const productRef = collection(firedb, 'products');

        await addDoc(productRef, products)
        toast.success("Added successfully");
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 800);
        getProductData();
        setLoading(false)

      } catch (error) {
        console.log(error);
        setLoading(false)
      }

  }

  const [product, setproduct] = useState([]);

  const getProductData = async () => {

    setLoading(true)

    try {
        const q = query(
          collection(firedb, 'products'),
          orderBy('time')
        );

        const data = onSnapshot(q, (QuerySnapshot) => {
          let productArray = [];
          QuerySnapshot.forEach((doc) => {
            productArray.push({...doc.data(), id: doc.id});
          });
          setproduct(productArray);
          setLoading(false)
        });

        return () => data;

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

   // update product function

   const edithandle = (item) => {
      setProducts(item)
   }

// update 
   const updateProduct = async (item) => {
        setLoading(true)
    try {
        
        await setDoc(doc(firedb, 'products', products.id), products)
        toast.success("Updated Successfully")
        setTimeout (() => {
          window.location.href = '/dashboard'
        }, 800)
        getProductData();
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
      setProducts("")
   }

   // delete

   const deleteProduct = async (item) => {
    setLoading(true)
    try {
      await deleteDoc(doc(firedb, 'products', item.id))
      toast.success('Deleted Successfully')
      getProductData();
      setLoading(false)

    } catch (error) {
        console.log(error)
        setLoading(false)
    }
   }


   /******ORDER */

   const [order, setOrder] = useState([]);

   const getOrderData = async () => {
    setLoading(true)

      try {

        const result = await getDocs(collection(firedb, "order"))
        const ordersArray = [];
        result.forEach((doc) => {
          ordersArray.push(doc.data());
          setLoading(false)
        });
        setOrder(ordersArray);
        console.log(ordersArray)
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false)

      }

   }

/******USER */
   const [user, setUser] = useState([]);

   const getUserData = async () => {
    setLoading(true)

      try {

        const result = await getDocs(collection(firedb, "users"))
        const usersArray = [];
        result.forEach((doc) => {
          usersArray.push(doc.data());
          setLoading(false)
        });
        setUser(usersArray);
        console.log(usersArray)
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false)

      }

   }

   useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
   }, []);


   const [searchkey, setSearchkey] = useState("");
   const [filtertype, setFilterType] = useState("");
   const [filterlocation, setFilterLocation] = useState("");

   
   


  return (
    <MyContext.Provider value={{mode, toggleMode, loading, setLoading,
    products , setProducts, addProduct, product,
    edithandle, updateProduct, deleteProduct, order, user,
    searchkey, setSearchkey, filtertype, setFilterType,
    filterlocation, setFilterLocation,
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default myState
