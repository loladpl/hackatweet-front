import styles from '../styles/Connection.module.css';
import Link from 'next/link';
import Image from 'next/image';


function Connection() {
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
        src="/tewwet.png"
        alt="logo tweet"
        width={500}
        height={300}
      />
        <div className={styles.right}>
        <h1 className={styles.title}>
          See what's happening
        </h1>
        <h3>Join Hackatweet today.</h3>
        <button>Sign up</button>
        <p>Already have an account?</p>
        <button>sign in</button>
        <Link href="../Home">Go to home</Link>
        </div>
      </main>
    </div>
  );
}

export default Connection;


