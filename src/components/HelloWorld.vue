<template>
  <div id="app">
  <v-app id="inspire">
     <el-button type="primary" @click="getArticle">调用后台接口</el-button>
     <el-input v-model="inpContent"></el-input>
<!-- <navigation/> -->
  <v-card
      id="title"
    color="indigo lighten-1"
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
    <v-container> 
      <v-card
        height="920" >
     <HomeList/> 
      </v-card>
      <!-- <GoBack/>  -->
    </v-container>

    <Footer/>
 
</v-app>
</div>
</template>

<script>
import HomeList from "../components/HomeList";
import Footer from"../components/Footer";
import GoBack from "../components/GoBack"
// import navigation from"../components/navigation";
export default {
  name: 'HelloWorld',
  
  
  components:{
    HomeList,
    Footer,
    GoBack
    // navigation
  },
  
    data () {
     
    return {
       inpContent: 'HelloWord',
      // drawer: true,
      // absolute: true,
      // overlay: false,
      // counter: 0,
      // fab: false,
      dialog: false,
      dialog1:false,
     
      // rules: [v => v.length <= 25 || 'Max 25 characters'],
      // icons: [
      // 'mdi-facebook-box',
      // 'mdi-twitter',
      // 'mdi-google-plus',
      // 'mdi-linkedin',
      // 'mdi-instagram',
      // ],
      // methods: {
      //    onScroll (e) {
      //      if (typeof window === 'undefined') return
      //      const top = window.pageYOffset ||   e.target.scrollTop || 0
      //      this.fab = top > 3
      //    },
      //    toTop () {
      //    this.$vuetify.goTo(0)
      //    }
      //  }
      // items: [
      //   { title: 'Home', icon: 'home' },
      //   { title: 'Review', icon: 'book' },
      //   { title: 'More', icon: 'search' },
      // ],
      // color: '#9575CD',
      // colors: [
      //   'primary',
      //   'blue',
      //   'success',
      //   'red',
      //   'teal',
      // ],
      // right: true,
      // miniVariant: false,
      // expandOnHover: true,
      // background: false,
      
    }
  },  
  methods: {
    getArticle() {
      this.$http.get('/api/getArticle')
        .then( (res) => {
          console.log('res', res);
          this.inpContent = res.data.data;
        })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 300%;
  font-weight: bold;
   text-align: center;
   height: 100px;
}
.bottom{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 150%;
  text-align: center;
}
.tbr{
  top: 0px;
  z-index: 999;
  position: -webkit-sticky;
  position:sticky
}
/* .footBar{ */
  
  /* bottom: 0;  */
 
/* } */
/* .logpop{z-index: 999;} */
/* .v-list-item-title{
  font-size: 300%;
  font-weight: bold
} */
/* ul {
  list-style-type: none;
  padding: 0;
} */
/* li {
  display: inline-block;
  margin: 0 10px;
} */
/* a {
  color: #42b983;
} */
</style>
