import styles from '../styles/Home.module.css';
import Image from 'next/image';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
            <div className={styles.icon}>
            <Image
              src="/poulpicon.png"
              alt="logo tweet"
              width={250}
              height={250}
            />
            </div>
            <div className={styles.profile}>
              <p>profilepic</p>
              <h5>Nom</h5>
              <p>@username</p>
              <button>Logout</button>
            </div>
        </div>
        <div className={styles.touslestweets}>
        <h1 className={styles.title}>
          Home
        </h1>
        <div className={styles.mytweet}>
        <input type="text" placeholder="What's up?" id="mytweet" />
        <p>0/280</p>
        <button id="register" >Tweet</button>
        </div>
        <div className={styles.tweet}>
          <div className={styles.userinfos}>
            <p>Profpic name @name</p>
            <p>lalalala cest mon tweet</p>
            <button>ptitcoeuricon</button>
          </div>

        </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
