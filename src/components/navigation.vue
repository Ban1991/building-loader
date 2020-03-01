
<template>
<div id="navigation">
  <!-- <v-app> -->

      <v-card
      id="title"
    color="black lighten-4"
    flat
    height="100px"
   tile
  >
  <h1 class="white--text align-end" center>Movie Time</h1>
</v-card>

<v-toolbar class="tbr" :elevation="7" height="80px" ref="searchBar" >
      <!-- <v-spacer></v-spacer> -->
       <!-- <div class="mx-20"></div>  -->
    <v-text-field
        class="pt-5"
        solo
        clearable
        
        counter
        single-line
        maxlength="25"
        label="Movie title, Author name, Actor/Actress name"
        col 
      ></v-text-field>
<!-- :rules="rules" -->
      <v-btn icon>
        <v-icon large>mdi-magnify</v-icon>
      </v-btn>
      <div class="mr-6"></div>
    <template> 
     <v-dialog v-model="dialog" persistent max-width="600px">
         <template v-slot:activator="{ on }">
            <v-btn >
               <span large v-on="on" class="font-weight-bold" right>Sign in</span>
             </v-btn>
         </template>
         <v-card>
          <v-card-title>
           <v-icon large >mdi-account-circle</v-icon>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Account Name" required clearable></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password" type="password" required clearable></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false" >Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false" >Login</v-btn>
          </v-card-actions>
        </v-card>
       </v-dialog>

    
    
    <div class="mx-4"></div>
     <v-dialog v-model="dialog1" persistent max-width="600px">
         <template v-slot:activator="{ on }">
            <v-btn >
               <span large v-on="on" class="font-weight-bold" right>Sign up</span>
             </v-btn>
         </template>
         <v-card>
          <v-card-title>
           <v-icon large >mdi-account-circle</v-icon>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Account Name" required clearable></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password" type="password" required clearable></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Confirm Password" type="password" required clearable></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email" type="email" required clearable></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog1 = false">Close</v-btn>
            <v-btn color="blue darken-1" text bold @click="dialog1 = false">Login</v-btn>
          </v-card-actions>
        </v-card>
       </v-dialog>
       </template>
</v-toolbar>

<br>
<!-- <v-card></v-card> -->
     <!-- </v-app> -->
</div>
 </template>
<!-- </template> -->
<style scoped>
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 300%;
  font-weight: bold;
   text-align: center;
   height: 100px;
}
.tbr{
 
  top: 0px;
  z-index: 999;
   position: fixed;
   /* width:auto;
   height:100% */
   /* position:relative */
  /* position: -webkit-sticky; */
  /* position:sticky */
}

</style>
<script>
export default {
  name: 'navigation',

    data () {
     
    return {
      // drawer: true,
      // absolute: true,
      // overlay: false,
      // counter: 0,
      // fab: false,
      dialog: false,
      dialog1:false,
      // rules: [v => v.length <= 25 || 'Max 25 characters'],
    }
    },
   methods: {
      handleScroll() {
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  var offsetTop = document.querySelector('#searchBar').offsetTop
  if (scrollTop > offsetTop) {
    this.searchBarFixed = true
  } else {
    this.searchBarFixed = false
  }
      }
    },
mounted() {
      window.addEventListener("scroll", this.showIcon);
},
destroyed () {
  window.removeEventListener('scroll', this.handleScroll)
},
    

}
</script>