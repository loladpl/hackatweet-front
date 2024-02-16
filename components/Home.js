import styles from '../styles/Home.module.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


function Home() {
  const [tweetText, setTweetText] = useState('');
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tweet/tweet')
      .then(response => response.json())
      .then(data => setTweets(data))
      .catch(error => console.error('Error fetching tweets:', error));
  }, []);

  const handletweet = () => {
    fetch('http://localhost:3000/tweet/tweet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'User',
        firstname: 'Name',
        message: tweetText,
        createdAt: new Date(),
        likes: 0
      })
    })
      .then(response => response.json())
      .then(data => {
        setTweets([...tweets, data]);
        setTweetText('');
        console.log('Tweet created:', data);
      })
      .catch(error => console.error('Error creating tweet:', error));
  };

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
              width={120}
              height={120}
            />
            </div>
            <div className={styles.profile}>

              <div className={styles.userprofile}>
              <Image className={styles.anya}
              src="/zoromiaw.jpeg"
              alt="logo tweet"
              width={90}
              height={90}
            />
              <div className={styles.name}>
              <h5>Name</h5>
              </div>
              <div className={styles.usernameinprofile}>
              <p>@username</p>
              </div>
              </div>
              <button className={styles.logoutbtn}>Logout</button>
            
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

         <input type="text" placeholder="What's up?" id="mytweet" value={tweetText}
                onChange={(e) => setTweetText(e.target.value)} />
         <p>0/280</p>
         <button id="register" onClick={handletweet}>Tweet</button>
         </div>
        </div>

        <div className={styles.tweets}>
           {/* div tous les tweets */}

         <div className={styles.onetweet}>
           {/* div avec un seul tweet */}
           {tweets.map((tweet) => (
              <div key={tweet._id} className={styles.onetweet}>
          <div className={styles.userinfos}>
            <p>Profpic name {tweet.username}</p>
          </div>
          <div className={styles.textweet}>
            <p>{tweet.message}</p>
          </div>
          <div className={styles.heartbtn}>
            <button>ptitcoeuricon</button>
          </div>
          </div>))}
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
