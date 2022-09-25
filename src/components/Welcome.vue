<template>
  <header>
    <img src="../assets/logo.png" alt="" width="90px">
    <div class="nav">
      <ul>
        <li><a href="#"></a>Our story</li>
        <li><a href="write">Write</a></li>
        <li><a href="sign-up">Sign in</a></li>
        <button class="btn" @click="">Get started</button>
      </ul>
    </div>
    <div>
      <h1>Web Dev</h1>
      <p>Stay curious with Seven Academy as you explore this article</p>
      <button class="buton">Start reading</button>
    </div>
  </header>
  <section class="main">
    <div class="icon">
      <h3 class="w3-wide"><span class="material-symbols-outlined">
          whatshot
        </span> Trending on Medium</h3>
    </div>
    <div class="desc1">
      <h2>01
        <span class="material-symbols-outlined">
          account_circle
        </span>
        <p id="heading">Ben "The Hosk" Hosking in ITNEXT</p>
        <p>The Difference Between The Clever Developer & The Wise Developer</p>
      </h2>
      <h2>02
        <span class="material-symbols-outlined">
          account_circle
        </span>
        <p id="heading">The Queen of Englands Death</p>
        <P>Queen Elizabeth is been laid to rest</P>
      </h2>
      <h2>03
        <span class="material-symbols-outlined">
          account_circle
        </span>
        <p id="heading"></p>
      </h2>
    </div>
    <div class="desc2">
      <h2>04
        <span class="material-symbols-outlined">
          account_circle
        </span>
        <p id="heading">Barack Obama</p>
        <p>The first black American president ever </p>
      </h2>
      <h2>05
        <span class="material-symbols-outlined">
          account_circle
        </span>
        <p id="heading">The 2019 Corona Virus Pandemic</p>
        <p>This virus has claimed the lives of many and made many to live in fear</p>
      </h2>
      <h2>06
        <span class="material-symbols-outlined">
          account_circle
        </span>
        <p id="heading">The Ukraine-Russian War</p>
        <p>This war has rendered many homeless</p>
      </h2>
    </div>
    <div class="footer">
      <p></p>
    </div>
  </section>
</template>

<script>
export default {
  name: "welcome-app",
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* header section */

.nav {
  position: fixed;
  top: 30px;
  right: 30px;
}

a {
  text-decoration: none;
}

.btn {
  padding: 10px;
  border-radius: 25px;
  cursor: pointer;
  background: linear-gradient(to right, orange, red);
  border: orange;
  box-shadow: 0px 0px 2px 2px rgb(239, 226, 226);
}

.btn:hover {
  background-color: teal;
  transition: ease-in-out 0.7s;
}

span {
  color: orange;
}

h1 {
  font: bold;
}

li {
  display: inline;
  margin: 20px;
}

img {
  position: relative;
  left: 50px;
}

h1 {
  color: black;
  font-size: 4rem;
}

p {
  color: black;
}

.buton {
  padding: 10px;
  background: linear-gradient(to right, orange, red);
  border: white;
  font-size: 18px;
  color: white;
  border-radius: 25px;
  cursor: pointer;
}

/* main section */
.main {
  max-width: 100%;
  background-color: grey;
}

.icon {
  display: flex;
}

.desc1 {
  color: red;
  display: flex;
  justify-content: space-around;
}

.desc2 {
  color: red;
  display: flex;
  justify-content: space-around;
}

p {
  font-size: 12px;
}

#heading {
  font-size: 15px;
  font-weight: bold;
}
</style>