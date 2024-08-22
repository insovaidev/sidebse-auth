<script setup lang="js">
// Remember to disable the middleware protection from your page!
definePageMeta({
    middleware: ''
})

const { signIn } = useAuth()

const demoCredentials = { username: 'test', password: 'hunter2' }
</script>

<template>
  <div>
    <p>Sign-In Options:</p>
    <button @click="signIn('github')">
        Github
    </button>
    <button @click="signIn('google')">
        Google
    </button>

  </div>
</template>