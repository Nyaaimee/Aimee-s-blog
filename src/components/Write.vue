<template>
  <section id="blog">
    <div class="title">
      <h2>Title</h2>
      <textarea name="text" id="text" cols="50" rows="">Blog tittle here</textarea>
    </div>
    <div class="post">

    </div>
  </section>
</template>

<script>
export default {
  name: "write-app",
}

</script>

<style>
#blog{
  display: flex;
}

.title{
  background-color: #e5e4;
  width: 70%;
  height: 100%;
}

.post{
  background-color: rgb(122, 110, 155);
  width: 30%;
}
</style>