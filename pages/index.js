import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Pascal Wengerter</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 id="hello" className={styles.title}>
          Hello, friend
          <span class="">_</span>
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>About <span>WIP</span></h3>
            <p>More information about my person &amp; background</p>
          </div>

          <div className={styles.card}>
            <h3>Projects <span>WIP</span></h3>
            <p>Various things I'm currently working on</p>
          </div>

          <div className={styles.card}>
            <h3>Reading <span>WIP</span></h3>
            <p>Personal reading list and reccomendations</p>
          </div>

          <div className={styles.card}>
            <h3>Blog <span>WIP</span></h3>
            <p>Thoughts on different topics that excite me</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          More to come soon.
        </p>
      </footer>
    </div>
  )
}

if (process.browser) {
  window.onload = function () {

    var text = "Hello, friend";
    var i = 0;

    var consoleTyper = setInterval(function () {
      if (i != text.length) {
        i += 1;
        document.getElementById("hello").innerHTML = text.substr(0, i) + '_';
      }
      else {
        clearInterval(consoleTyper);
      }
    }, 120);

  };
}
