import styles from '../styles/Connection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router'


function Connection() {
   //hooks d'état pour checker modal  
   const [isOpen, setIsOpen] = useState(false);
   const[formData, setFormData] = useState({ 
    firstName: '',
    lastName: '',
    password: ''
   });
   
   const [isSubmitted, setIsSubmitted] = useState(false);
   const router = useRouter();

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
    setIsSubmitted(true);
    router.push('/home'); // Redirige vers la page Home
  };

  if (isSubmitted) {
    return <></>;
  }

  return (
    <div>
      <main className={styles.main}>
      <Image
        src="/tweetbackground.png"
        alt="background image"
        width={500}
        height={300}
      />
      <Image
        src="/tweet.png"
        alt="logo tweet"
        width={500}
        height={300}
      />
        <div className={styles.right}>
        <h1 className={styles.title}>
          See what's happening
        </h1>
        <h3>Join Hackatweet today.</h3>
        <button onClick={() => setIsOpen(true)}>Sign in</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Prénom:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
              </label>
              <label>
                Nom:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
              </label>
              <label>
                Mot de passe:
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
              </label>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      )}
        <Link href="../home">Go to home</Link>
        <button>Sign Up</button>
        </div>
      </main>
    </div>
  );
}

export default Connection;
