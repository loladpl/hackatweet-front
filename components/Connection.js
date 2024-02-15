import styles from '../styles/Connection.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router'

function Connection() {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [formDataSignIn, setFormDataSignIn] = useState({ 
    firstName: '',
    lastName: '',
    password: ''
  });
  const [formDataSignUp, setFormDataSignUp] = useState({ 
    username: '',
    password: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleInputChangeSignIn = (e) => {
    const { name, value } = e.target;
    setFormDataSignIn({ ...formDataSignIn, [name]: value });
  };

  const handleInputChangeSignUp = (e) => {
    const { name, value } = e.target;
    setFormDataSignUp({ ...formDataSignUp, [name]: value });
  };

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
   
  };

  if (isSubmitted) {
    return <></>; 
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
          <Image
            src="/tweet.png"
            alt="logo tweet"
            width={300}
            height={300}
          />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>
            See what's happening
          </h1>
          <h3>Join Hackatweet today.</h3>
          <button className={styles.signin} onClick={() => setIsOpenSignIn(true)}>Sign in</button>
          {isOpenSignIn && (
            <div className={styles.modal}>
              <div className="modal-content">
                <span className="close" onClick={() => setIsOpenSignIn(false)}>&times;</span>
                <h2>Sign in</h2>
                <form onSubmit={handleSubmitSignIn}>
                  <label>
                    First Name:
                    <input type="text" name="firstName" value={formDataSignIn.firstName} onChange={handleInputChangeSignIn} />
                  </label>
                  <label>
                    Username:
                    <input type="text" name="lastName" value={formDataSignIn.lastName} onChange={handleInputChangeSignIn} />
                  </label>
                  <label>
                    Password:
                    <input type="password" name="password" value={formDataSignIn.password} onChange={handleInputChangeSignIn} />
                  </label>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
          <button className={styles.signup} onClick={() => setIsOpenSignUp(true)}>Sign Up</button>
          {isOpenSignUp && (
            <div className={styles.modal}>
              <div className="modal-content">
                <span className="close" onClick={() => setIsOpenSignUp(false)}>&times;</span>
                <h2>Sign up</h2>
                <form onSubmit={handleSubmitSignUp}>
                  <label>
                    Username:
                    <input type="text" name="username" value={formDataSignUp.username} onChange={handleInputChangeSignUp} />
                  </label>
                  <label>
                    Password:
                    <input type="password" name="password" value={formDataSignUp.password} onChange={handleInputChangeSignUp} />
                  </label>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Connection;

// import styles from '../styles/Connection.module.css';
// import Link from 'next/link';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { useRouter } from 'next/router'


// function Connection() {
//    //hooks d'état pour checker modal  
//    const [isOpen, setIsOpen] = useState(false);
//    const[formData, setFormData] = useState({ 
//     firstName: '',
//     lastName: '',
//     password: ''
//    });
   
//    const [isSubmitted, setIsSubmitted] = useState(false);
//    const router = useRouter();

//    const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
//     setIsSubmitted(true);
//     router.push('/home'); // Redirige vers la page Home
//   };

//   if (isSubmitted) {
//     return <></>;
//   }

//   return (
//     <div>
//       <main className={styles.main}>
//         <div className={styles.left}>
//       {/* <Image
//         src="/tweetbackground.png"
//         alt="background image"
//         width={500}
//         height={300}
//       /> */}
//       <Image
//         src="/tweet.png"
//         alt="logo tweet"
//         width={300}
//         height={300}
//       />
//       </div>
//         <div className={styles.right}>
//         <h1 className={styles.title}>
//           See what's happening
//         </h1>
//         <h3>Join Hackatweet today.</h3>
//         <button className={styles.signin} onClick={() => setIsOpen(true)}>Sign in</button>
//       {isOpen && (
//         <div className={styles.modal}>
//           <div className="modal-content">
//             <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
//             <h2>Sign in</h2>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 First Name:
//                 <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
//               </label>
//               <label>
//                 Username:
//                 <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
//               </label>
//               <label>
//                 Password:
//                 <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
//               </label>
//               <button type="submit">Envoyer</button>
//             </form>
//           </div>
//         </div>
//       )}
//         {/* <Link href="../home">Go to home</Link> */}
//         <button className={styles.signup}>Sign Up</button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Connection;
