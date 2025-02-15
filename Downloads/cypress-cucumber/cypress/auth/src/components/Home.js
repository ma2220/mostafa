'use client';
import { db } from '@/app/config'; 
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

async function validateCredentials(name, password) {
  try {
    const q = query(collection(db, "message"), 
      where("name", "==", name),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.log("Error validating:", error);
    return false;
  }
}

async function addDataToFireStore(name, password) {
  try {
    const isValid = await validateCredentials(name, password);
    if (!isValid) {
      return false;
    }
    const docRef = await addDoc(collection(db, "message"), {
      name: name,
      password: password,
    });
    console.log("Document written:", docRef.id);
    return true;
  } catch (error) {
    console.log("Error Add", error);
    return false;
  }
}

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !password) {
      return; // Browser will handle required field validation
    }

    const added = await addDataToFireStore(name, password);
    if (added) {
      setName("");
      setPassword("");
      setErrorMessage("");
      setSuccessMessage("Successfully!");
      router.push('/new-page');
    } else {
      setErrorMessage("Invalid credentials");
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <form 
        onSubmit={handleSubmit}
        className='max-w-md mx-auto p-4 bg-white shadow-md rounded-lg'
      >
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
            Name: 
          </label>
          <input
            type='text'
            id='name'
            required
            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
            Password: 
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              required
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              data-testid="password-toggle"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className='text-center'>
          <button
            type='submit'
            data-testid='submit-button'
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
          >
            Login
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="mt-4 text-green-500" data-testid="success-message">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 text-red-500" data-testid="error-message">
          {errorMessage}
        </div>
      )}
    </main>
  );
}