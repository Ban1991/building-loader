<template>

          <v-container fluid>
            <v-row>
             <v-col>
               <v-card  class="mx-auto" max-width="300"  @click="sendParams1()" >
                  <!-- href="MovieList.html" -->
               <v-img class="white--text align-end" height="200px" src="/static/pic/shawshank2.jpg" alt="The Shawshank Redemption,jpg" > 
                  <v-card-title >Movie Time Top 10 Movies </v-card-title>
               </v-img> 
               </v-card>
             </v-col>
             <v-col> <v-card  class="mx-auto" max-width="300" @click="sendParams2()">
               <v-img class="white--text align-end" height="200px" src="/static/pic/Memories of Murder.jpg" alt="Memories of Murder.jpg"> 
                  <v-card-title>Top 10 Crime Movies </v-card-title>
               </v-img> 
               </v-card></v-col>
             <v-col> <v-card  class="mx-auto" max-width="300" @click="sendParams3()">
               <v-img class="white--text align-end" height="200px" src="/static/pic/Coco.jpg" alt="Coco.jpg"> 
                  <v-card-title>Top 10 Comedy Movies </v-card-title>
               </v-img> 
               </v-card></v-col>
            
             </v-row>

            <v-row>
            <v-col><v-card  class="mx-auto" max-width="300" link>
               <v-img class="white--text align-end" height="200px" src="/static/pic/WALL·E2.jpg" alt="WALL·E.jpg"> 
                  <v-card-title>Top 10 Animation </v-card-title>
               </v-img> 
               </v-card></v-col>
              <v-col><v-card  class="mx-auto" max-width="300" link>
               <v-img class="white--text align-end" height="200px" src="/static/pic/the cove2.jpg" alt="the cove2.jpg"> 
                  <v-card-title>Top 10 Documentary </v-card-title>
               </v-img> 
               </v-card></v-col>
               <v-col><v-card  class="mx-auto" max-width="300" link>
               <v-img class="white--text align-end" height="200px" src="/static/pic/The Dark Knight2.jpg" alt="The Dark Knight2.jpg"> 
                  <v-card-title>Top 10 Horror Movies </v-card-title>
               </v-img> 
               </v-card></v-col>
                
            </v-row>

            <v-row>
              <v-col><v-card  class="mx-auto" max-width="300" link>
               <v-img class="white--text align-end" height="200px" src="/static/pic/Alice in Wonderland.jpg" alt="Alice in Wonderland.jpg"> 
                  <v-card-title>Top 10 Adventure Movies </v-card-title>
               </v-img> 
               </v-card></v-col>
               <v-col><v-card  class="mx-auto" max-width="300" link>
               <v-img class="white--text align-end" height="200px" src="/static/pic/Saving Private Ryan.jpg" alt="Saving Private Ryan.jpg"> 
                  <v-card-title>Top 10 Drama Movies</v-card-title>
               </v-img> 
               </v-card></v-col>
                <v-col><v-card  class="mx-auto" max-width="300" link>
               <v-img class="white--text align-end" height="200px" src="/static/pic/Titanic.jpg" alt="Titanic.jpg"> 
                  <v-card-title>Top 10 Romance Movies</v-card-title>
               </v-img> 
               </v-card></v-col>
                
            </v-row>

              <v-row>
              <v-col><v-card  class="mx-auto" max-width="300" link>
               <v-img class="white--text align-end" height="200px" src="/static/pic/The Flowers of War.jpg" alt="The Flowers of War.jpg"> 
                  <v-card-title>Top 10 History Movies </v-card-title>
               </v-img> 
               </v-card></v-col>
               <v-col><v-card  class="mx-auto" max-width="300" link>
               <v-img class="white--text align-end" height="200px" src="/static/pic/Train to Busan.jpg" alt="Train to Busan.jpg"> 
                  <v-card-title>Top 10 Disaster Movies </v-card-title>
               </v-img> 
               </v-card></v-col>
                <v-col><v-card  class="mx-auto" max-width="300" link>
               <v-img class="white--text align-end" height="200px" src="/static/pic/Schindler's List2.jpg" alt="Schindler's List2.jpg"> 
                  <v-card-title>Top 10 Biography </v-card-title>
               </v-img> 
               </v-card></v-col>
            </v-row>
        
          </v-container>
          
          </template>



<script>
  export default {
    name: '',
    data () {
      return {
        msg: 'test message'
      }
    },
    methods:{
      sendParams1(){
      this.$router.push({name: 'MovieList', query: { title: 'Movie Time Top 10 Movies'}});
    } ,sendParams2(){
      this.$router.push({name: 'MovieList', query: { title:'Top 10 Crime Movies', }});
    }, sendParams3(){
      this.$router.push({name: 'MovieList', query: { title:'Top 10 Comedy Movies' }});
    }
        }, 
  }
  
</script>