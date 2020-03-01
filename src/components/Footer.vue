<template>

 <v-footer
    color="indigo lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
            
          ><!-- @click="gotoLink（items.id）" -->
            <v-icon size="24px" @click="link in links">{{ icon }}</v-icon>
          </v-btn>
      <v-col
        class="indigo lighten-1 py-4 text-center white--text"
        cols="12"
      >
        <strong>{{ new Date().getFullYear() }} — X Hu</strong>
      </v-col>
    </v-row>
  </v-footer>
  </template>

  <style>
  /* .footBar{
    position:absolute
  } */
  </style>
<script>

  export default {
    name: '',
    data () {
      return {
    msg: 'test message',
    
    icons: [
     'mdi-facebook-box',
      'mdi-twitter',
      'mdi-google-plus',
      'mdi-linkedin',
      'mdi-instagram ',
      ],
      links: [
      'www.facebook.com',
      'www.twitter.com',
      'www.google.com',
      'www.linkedin.com',
      'www.instagram.com',
      ],
      }
    },
  }
  
</script>