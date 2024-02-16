import styles from '../styles/Home.module.css';
import Image from 'next/image';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        {/* div avec tout dedans */}

        <div className={styles.left}>
         {/* div left avec icon, userprofile, logout */}

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

        <div className={styles.mid}>
          {/* div mid avec tout */}

         <div className={styles.headmid}>
          {/* div pour éccrire tweet title, input, compteur caractères et bouton */}

         <h1 className={styles.title}>
          Home
         </h1>

         <div className={styles.mytweet}>
          {/* div avec input compteur et bouton */}

         <input type="text" placeholder="What's up?" id="mytweet" />
         <p>0/280</p>
         <button id="register" >Tweet</button>
         </div>
        </div>

        <div className={styles.tweets}>
           {/* div tous les tweets */}

         <div className={styles.onetweet}>
           {/* div avec un seul tweet */}

          <div className={styles.userinfos}>
            <p>Profpic name @name</p>
          </div>
          <div className={styles.textweet}>
            <p>lalalala cest mon tweet</p>
          </div>
          <div className={styles.heartbtn}>
            <button>ptitcoeuricon</button>
          </div>

          </div>
        </div>
     
        </div>
        <div className={styles.right}>

<div className={styles.trends}>
  <h2>Trends</h2>
</div>

<div className={styles.counters}>
  <div className={styles.counter}>
    <h6>#lala</h6>
    <p>x tweets</p>
  </div>
</div>
</div>
      </main>
    </div>
  );
}

export default Home;
