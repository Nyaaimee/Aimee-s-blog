<template>
  <div class="container">
    <section id="sidebar">
      <div class="logo">
        <img src="../assets/company-logo-ideas-32529.png" alt="">
        <h2></h2>
      </div>

      <div class="items">
        <li>
          <router-link to="/Dashboard">
            <span class="material-symbols-outlined">
              incomplete_circle
            </span>Dashboard
          </router-link>
        </li>

        <li>
          <router-link to="/Dashboard/Write">
            <span class="material-symbols-outlined">
              edit_note
            </span>Write
          </router-link>
        </li>
        <li>
          <router-link to="/Dashboard/Profile">
            <span class="material-symbols-outlined">
              account_circle
            </span>Profile
          </router-link>
        </li>
        <li>
          <router-link to="/Dashboard/Notifications">
            <span class="material-symbols-outlined">
              notifications
            </span>Notifications
          </router-link>
        </li>
        <li><span class="material-symbols-outlined">
            logout
          </span>Log Out</li>
      </div>
    </section>

    <section id="interface">
      <div class="navigation">
        <div class="n1">
          <div class="desc">
            <h1>Let's go!</h1>
          </div>
          <div class="lang">
            <select name="language" id="language">
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="spanish">Spanish</option>
              <option value="japanese">Japanese</option>
              <option value="chinese">Chinese</option>
            </select>
          </div>
          <div class="search">
            <span class="material-symbols-outlined">
              search
            </span>
            <input type="text" placeholder="search">
          </div>
        </div>
      </div>
      <div id="section">
        <div class="left">
          
          <router-view />
        </div>
        <div class="right">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "write-vue",
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,900;1,300;1,400;1,700;1,800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins', sans-serif;
}

.container {
  height: 100vh;
  width: 100%;
  background-color: #E5E7EB;
  position: relative;
  display: flex;
}

#sidebar {
  background-color: #111827;
  width: 250px;
  height: 100%;
}

#sidebar .logo img {
  width: 120px;
  height: 100px;
}

#sidebar .logo {
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: #fff;
}

#sidebar .items li {
  list-style: none;
  padding: 20px;
  display: flex;
}

#sidebar .items li span {
  color: rgb(134, 141, 151);
}

#sidebar .items li:hover {
  background: #253047;
  cursor: pointer;
}

#sidebar .items li a {
  text-decoration: none;
  color: rgb(134, 141, 151);
  font-weight: 300px;
}

/** interface */
#interface {
  width: 100%;
}

.navigation .n1 {
  display: flex;
  background-color: blue;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.search {
  display: flex;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
}

input {
  outline: none;
  border: none;
}

h1 {
  font-size: 22px;
}
</style>