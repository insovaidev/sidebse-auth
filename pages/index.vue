<template>
   <div v-if="data">
     <button @click="signOut('github')">
       Sign Out GitHub
     </button>
 
     <button @click="signInWithGoogle()">
       Submit
     </button>
 
     <pre>{{ data }}</pre>
     <pre>Session Token: {{ sessionToken }}</pre>
   </div>
 </template>
 
 <script setup lang="js">
 const sessionToken = ref(null)
 const authData = ref('')

 const {  
     status,
     data, 
     lastRefreshedAt,
     getCsrfToken,
     getProviders,
     getSession,
     signIn,
     signOut,
 } = useAuth()
 
 
 const getToken = async () => {
    try {
     console.log(data.value)
    } catch (error) {
       console.log('Error during submit:', error)
    }
 }
 
 const signInWithGoogle = async () => {
    console.log('Calling signInWithGoogle')
 
    try {
       const res = await $fetch('https://test-api.khmer24.com/auth/login?lang=en', {
          method: 'POST',
          body: new URLSearchParams({
             'token': data.value.accessToken,
             'type': 'google'
          })
       })
       console.log('Response:', res)
    } catch (error) {
       console.log('Google Sign-In Error:', error)
    }
 }
 
 onMounted(() => {
   if (process.client) {
      getToken()
   }
 })
 </script>
 