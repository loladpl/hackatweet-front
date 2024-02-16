import styles from '../styles/Connection.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/users';
import Link from 'next/link';


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

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [date, setDate] = useState('2050-11-22T23:59:59');
 

  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpFirstname, setSignUpFirstname] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  

  const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: signUpUsername, firstname: signUpFirstname, password: signUpPassword }),
    }).then(response => response.json())
        .then(data => {
            if (data.result===true) {
                dispatch(login({ username: signUpUsername, token: data.token }));
                setSignUpUsername('');
                setSignUpPassword('');
                setSignUpFirstname('');
                setIsModalVisible(false);
                router.push('/home');
            } else {
                console.error('Echec t nul')
            }
        });
};

const handleConnection = () => {

    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: signInUsername, password: signInPassword }),
    }).then(response => response.json())
        .then(data => {
            if (data.result===true) {
                dispatch(login({ username: signInUsername, token: data.token }));
                setSignInUsername('');
                setSignInPassword('');
                setIsModalVisible(false);
                router.push('/home');
            } else {
                console.error('Echec t nul')
            }
        });
};

const showModal = () => {
    setIsModalVisible(!isModalVisible);
}


  if (isSubmitted) {
    return <></>; 
  }


  let modalContent;
  if (!user.isConnected) {
      modalContent = (
          <div className={styles.registerContainer}>
              <div className={styles.registerSection}>
                  <p>Sign-up</p>
                  <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                  <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                  <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
                  <Link href='/Home'><button id="register" onClick={() => { showModal(); handleRegister(); }}>Sign Up</button></Link>
              </div>
              <div className={styles.registerSection}>
                  <p>Sign-in</p>
                  <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                  <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                  <button id="register" onClick={() => { showModal(); handleConnection(); }}>Sign In</button>
              </div>
          </div>
      );
  }






  let userSection;
  if (user.token) {
    //   userSection = (
    //     //   <div className={styles.logoutSection}>
              
    //     //       <button onClick={() => handleLogout()}>Logout</button>
          
    //     //   </div>
    //   );
  } else {
      if (isModalVisible) {
          userSection =
              <div className={styles.headerIcons}>
          
              </div>
      } else {
          userSection =
              <div className={styles.headerIcons}>
          
              </div>
      }
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
          <Image
            src="/poulpicon.png"
            alt="logo tweet"
            width={250}
            height={250}
          />
        </div> 

        <div className={styles.right}>
          <h1 className={styles.title}>
            See what's happening
          </h1>
          <div className={styles.pouet}>
            <div className={styles.join}>
          <h3>Join Hackatweet today.</h3>
          {userSection}
          <button className={styles.signin}onClick={() => router.push('/signup')}>Sign Up</button>
          {isOpenSignIn && (
            <div className={styles.modal}>
              <div className={styles.modalcontent}>
                <span className="close" onClick={() => setIsOpenSignIn(false)}>&times;</span>
                <div className={styles.signupformulaire}>
                <h2>Sign Up</h2>
                <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
                    <button id="register" onClick={() => handleRegister()}>Sign Up</button>
              </div>
              </div>
            </div>
          )}
          </div>
          <div className={styles.connect}>
          <p>Already member?</p>
          <button className={styles.signup} onClick={() => setIsOpenSignUp(true)}>Sign in</button>
          {isOpenSignUp && (
            <div className={styles.modal}>
              <div className="modal-content">
                <span className="close" onClick={() => setIsOpenSignUp(false)}>&times;</span>
                <h2>Sign up</h2>
                <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
					<input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
					<button id="connection" onClick={() => handleConnection()}>Sign In</button>
              </div>
            </div>
          )}
          </div>
          </div>
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
