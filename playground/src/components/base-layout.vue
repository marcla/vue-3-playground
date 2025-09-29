<script>
export default {
  // props: {
  //   text: {
  //     type: String,
  //     required: true,
  //   }
  // }
}
</script>

<template>
  <div class="grid">
    <main class="main">
      <article class="content">
        <slot name="content"></slot>
      </article>

      <aside class="sidebar">
        <slot name="sidebar"></slot>
      </aside>
    </main>

    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
.grid {
  border: 4px solid brown;
}

.main {
  display: grid;
  grid-template-columns: 1fr 40%;
}

.sidebar {
  border: 4px solid gold;
  padding: 0 10px;
}

.content {
  border: 4px solid violet;
  padding: 0 10px;
}

.footer {
  border: 4px solid forestgreen;
  padding: 0 10px;
}
</style>
