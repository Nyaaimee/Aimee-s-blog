<template>
  <header>
    <img src="../assets/sevent.png" alt="" width="90px">
    <div>
      <h1>Welcome to Seven's Blog</h1>
    </div>
    <div class="nav">
      <ul>
        <li><a href="home"></a>Home</li>
        <li><a href="sign-up">Signup</a></li>
        <li><a href="profile">Profile</a></li>
        <li><a href="contact us">Contact us</a></li>
      </ul>
    </div>
  </header>
  <div class="main">
    <!-- <div class="right">
       <img src="../assets/seven.jpg" alt="seven" width="400" height="250">
     </div> -->
    </div>
    <div class="courses">
      <h1 id="head">What Seven Offers</h1>
      <div class="desc">
        <div>
          <h1>Web Development</h1>
          <p></p>
        </div>
        <div>
          <h1>Graphic Design</h1>
          <p></p>
        </div>
        <div>
          <h1>Digital Marketing</h1>
          <p></p>
        </div>
        <div>
          <h1>Artificial Intelligence</h1>
          <p></p>
        </div>
      </div>
    </div>
  <div class="footer">

  </div>
</template>

<script>
  export default {
    name: "welcome-app",
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* header section */
  body{
    height: 100vh;
    widows: 100vw;
    background-image: url('../assets/black.jpg');
    background-size: cover;
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(226, 180, 94);
  } 
  h1{
    font-weight: bold;
    text-shadow: 0px 1px, 1px 0px, 2px 1px;
  }
  li{
    display: inline;
    margin: 20px;
    color: black;
  }
  img{
    margin-left: 40px;
  }
  /* main section */
  .desc{
    width: 100%;
    height: 50vh;
    border: 1px solid;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  /* .main{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5em;
  }
  .left{
    width: 50%;
    height: 100%;
    align-items: center;
  }
  h1{
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 0.5em;
  }
  p{
    width: 80%;
  }
  .right{
    width: 50%;
    height: 100%;
  } */
</style>