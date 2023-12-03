import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/FirebaseConfig';
import Loader from '../../components/loader/Loader';

function Login() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const login = async () => {
        setLoading(true);

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/');
            toast.success("Login Successful", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            window.location.href = '/';
            setLoading(false);
        } catch (error) {
            toast.error('Signin Failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setLoading(false);
        }
    };

    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className=' bg-gray-100 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-gray-800 text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div className="relative mb-2">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name='email'
                        className='bg-gray-200 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray-400 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div className='relative mb-2'>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        className='bg-gray-200 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray-400 outline-none'
                        placeholder='Password'
                    />
                    <button
                        onClick={togglePasswordVisibility}
                        className='absolute pb-3 top-1/2 right-3 transform -translate-y-1/2 text-gray-300'
                    >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={login}
                        className=' bg-blue-500 w-full text-white px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-gray-400'>Don't have an account <Link className=' text-blue-500' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    );
}

export default Login;
