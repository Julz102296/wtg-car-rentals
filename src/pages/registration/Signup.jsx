import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firedb } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import Loader from '../../components/loader/Loader';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errortext, setErrorText] = useState('');
    const [erroremail, setErrorEmail] = useState('');
    const [errorpass, setErrorPass] = useState('');
    const maxLength = 20;

    const handleName = () => {
        const regex = /[!@#$%^&*(),.?":{}|<>0-9\s]/g;
      
        if (name.length === 0) {
          setErrorText(<p style={{ color: 'red'}}>Submit your valid name</p>);
          setTimeout(() => setErrorText(''), 1500);
        } else if (regex.test(name)) {
          toast.warning('Name must not contain special characters, numbers, or spaces');
          setTimeout(() => setErrorText(''), 1500);
        } else {
          setErrorText('');
        }
    };

    const handleEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.length === 0) {
            setErrorEmail(<p style={{ color: 'gold'}}>Submit a valid email</p>);
          setTimeout(() => setErrorEmail(''), 1500);
        } else if (!emailRegex.test(email)) {
            setErrorEmail(<p style={{ color: 'red'}}>Invalid Format</p>);
          setTimeout(() => setErrorEmail(''), 1500);
        } else {
            setErrorEmail('');
        }
    }


    const handlePass = () => {
        const minLength = 6;
    
        if (password.length === 0) {
          setErrorPass('Enter a valid password');
          setTimeout(() => setErrorPass(''), 1500);
        } else if (password.length < minLength) {
          setErrorPass(<p style={{ color: 'gold'}}>Weak Password</p>);
          setTimeout(() => setErrorPass(''), 3000);
        } else {
          setErrorPass(<p style={{ color: 'green'}}>Strong Password</p>);
          setTimeout(() => setErrorPass(''), 3000);
        }
      };
    
      const isValidPass = () => {
        const minLength = 6;
    
        return password.length >= minLength && password.length <= maxLength;
      };

//

    /*
    const handlePass = () => {
        const minLength = 6;
      
        if (password.length === 0) {
          setErrorPass('Enter a valid password');
          setTimeout(() => setErrorPass(''), 1500);
        } else if (password.length < minLength) {
          setErrorPass('Weak Password');
          setTimeout(() => setErrorPass(''), 1500);
        } else {
          setErrorPass('Strong Password');
          setTimeout(() => setErrorPass(''), 1500);
        }
      };
      
      const isValidPass = () => {
        const minLength = 6;
      
        return password.length >= minLength && password.length <= maxLength;
      };*/
//      
      
      const isValidName = () => {
        return name.length > 1 && !/[!@#$%^&*(),.?":{}|<>0-9\s]/.test(name);
      };
      
      const isValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email.length > 1 && emailRegex.test(email);
      };


      

  
    const context = useContext(myContext);
    const { loading, setLoading } = context;
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
  
    const signup = async () => {
      if (name === '' || email === '' || password === '') {
        return toast.error('All fields are required!');
      }
  
      try {
        const users = await createUserWithEmailAndPassword(auth, email, password);
        console.log(users);
  
        const user = {
          name: name,
          uid: users.user.uid,
          email: users.user.email,
          time: Timestamp.now(),
        };
  
        const userRef = collection(firedb, 'users');
        await addDoc(userRef, user);
        toast.success('Successfully Signup');
        setName('');
        setEmail('');
        setPassword('');
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
  


    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className='bg-gray-100 px-10 py-10 rounded-xl shadow-md'>
                <div>
                    <h1 className='text-center text-gray-800 text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div className='relative mb-2'>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => {
                        setName(e.target.value);
                        handleName();
                        }}
                        name='name'
                        className='bg-gray-200 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray-400 outline-none'
                        placeholder='Firstname'
                    />
                    <div>
                    <p className={isValidName() ? 'text-green-600' : ''}>
                        {isValidName() && <p>Valid Name</p>}
                    </p>
                    <p className={errortext ? 'text-red-500' : ''}>
                        {errortext && <p>{errortext}</p>}
                    </p>
                    </div>
                </div>
                
                <div className='relative mb-2'>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        handleEmail();
                        }}
                        name='email'
                        className='bg-gray-200 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray-400 outline-none'
                        placeholder='Email'
                    />
                <div>
                    <p className={isValidEmail() ? 'text-green-600' : ''}>
                        {isValidEmail() && <p>Valid Email</p>}
                    </p>
                    <p className={erroremail ? 'text-red-500' : ''}>
                        {erroremail && <p>{erroremail}</p>}
                    </p>
                    </div>
                </div>
                <div className='relative mb-2'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                        setPassword(e.target.value);
                        handlePass();
                        }}
                        className='bg-gray-200 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray-400 outline-none'
                        placeholder='Password'
                        
                    />
                    <button
                        onClick={togglePasswordVisibility}
                        className='absolute pb-1 top-1/2 right-3 transform -translate-y-1/2 text-gray-400'
                    >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                    <div>
                        <p className={isValidPass() ? 'text-green-500' : ''}>
                            {isValidPass() && <p></p>}
                        </p>
                        <p className={errorpass ? 'text-red-500' : ''}>
                            {errorpass && <p>{errorpass}</p>}
                        </p>
                    </div>
                </div>
                <div className=' flex justify-center mb-3'>
                    <button onClick={signup} className=' bg-blue-500 w-full text-white px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-gray-400'>
                        Have an account <Link className=' text-blue-500' to={'/login'}>
                            Login
                        </Link>
                    </h2>
                </div>
            </div>
            
        </div>
        
    );
                    };

export default Signup;
