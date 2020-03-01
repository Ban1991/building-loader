<template>
<div id="MovieList">
   <!-- {{msg}} -->
<v-app>


<v-card
    color="indigo lighten-1"
    flat
    height="100px"
   tile
  >
  <h1 class="white--text align-end" center>Movie Time</h1>
  
</v-card>
<v-toolbar  class="tbr" :elevation="9" height="80px"   >
      <!-- <v-spacer></v-spacer> -->
       <!-- <div class="mx-20"></div>  -->
    <v-text-field
        class="pt-5"
        solo
        clearable
        :rules="rules"
        counter
        single-line
        maxlength="25"
        label="Movie title, Author name, Actor/Actress name"
        col 
      ></v-text-field>

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

<!-- <navigation/> -->

<v-card
    color="white light-4"
    flat
    height="100px"
   tile
  >
  <h2 class="black--text align-end" center><br/>—— {{this.$route.query.title}}</h2>
</v-card>

<v-container class="grey lighten-5">
<v-card height="1000" >
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        sm="5"
        md="6"
      >
        <v-card
          class="pa-2"   
          tile  
          height = "420px"  
        >
         <v-img  class="Timage mx-auto" src='/static/pic/shawshank.jpg' alt='shawshank.jpg' @click="sendParams1()"> 
               </v-img> 
        </v-card>
      </v-col>
      <v-col
        sm="5"
        
        md="6"
        >
        <!-- offset-sm="2"offset-md="0" -->
        <v-card
          class="cardText pa-2"       
          tile
           height = "420px" 
            
        >
      <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold title">The Shawshank Redemption</v-list-item-title>
        <v-list-item-title><br/></v-list-item-title>
         <v-list-item-title class="text-left font-weight-bold" >MOVIE INFO</v-list-item-title>
         <v-list-item-title><br/></v-list-item-title>
        <span class="textStyle">In 1946, a banker named Andy Dufresne (Tim Robbins) is convicted of a double murder, even though he stubbornly proclaims his innocence. He's sentenced to a life term at the Shawshank State Prison in Maine, where another lifer, Ellis "Red" Redding (Morgan Freeman), picks him as the new recruit most likely to crack under the pressure. The ugly realities of prison life are quickly introduced to Andy: a corrupt warden (Bob Gunton), sadistic guards led by Capt. Byron Hadley (Clancy Brown), and inmates who are little better than animals, willing to use rape or beatings to insure their dominance.</span>
        <v-list-item-title><br/></v-list-item-title>
        <v-list-item-title class="text-left font-weight-bold">CAST</v-list-item-title>
        <v-list-item-title>Tim Robbins</v-list-item-title>
        <v-list-item-subtitle>as Andy Dufresne</v-list-item-subtitle>
         <v-list-item-title>Morgan Freeman</v-list-item-title>
        <v-list-item-subtitle>as Ellis Boyd 'Red' Redding</v-list-item-subtitle> 
        <v-list-item-title>Bob Gunton</v-list-item-title>
        <v-list-item-subtitle>as Warden Norton</v-list-item-subtitle>      
      </v-list-item-content>
    </v-list-item>


        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters class="mb-6">
      <v-col
        sm="6"
        md="5"
        lg="6"
      >
        <v-card
          class="pa-2"
          
          tile
          height="270px"
        >
          <v-img  class="image mx-auto" src='/static/pic/inception.jpg' alt='inception.jpg' > 
                <!-- <v-card-text>{{this.$route.params.title}}</v-card-text> -->
               </v-img> 
        </v-card>
      </v-col>
      <v-col
        sm="6"
        md="5"   
        lg="6"   
      >
        <v-card
          class="cardText pa-2"
          
          tile
          height="270px"   
        >
          <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold title">INCEPTION</v-list-item-title>
        <v-list-item-title><br/></v-list-item-title>
         <v-list-item-title class="text-left font-weight-bold" >MOVIE INFO</v-list-item-title>
         <v-list-item-title><br/></v-list-item-title>
        <span class="textStyle">Dom Cobb (Leonardo DiCaprio) doesn't steal things, he steals ideas. By projecting himself deep into the subconscious of his targets, he can glean information that even the best computer hackers can't get to. In the world of corporate espionage, Cobb is the ultimate weapon. But even weapons have their weakness, and when Cobb loses everything, he's forced to embark on one final mission in a desperate quest for redemption.</span>
        <v-list-item-title><br/></v-list-item-title>
        <v-list-item-title class="text-left font-weight-bold">CAST</v-list-item-title>
        <v-list-item-title>Leonardo DiCaprio</v-list-item-title>
        <v-list-item-subtitle>as Dom Cobb</v-list-item-subtitle>
         <v-list-item-title>Ken Watanabe</v-list-item-title>
        <v-list-item-subtitle>as Saito</v-list-item-subtitle> 
        <v-list-item-title>Joseph Gordon-Levitt</v-list-item-title>
        <v-list-item-subtitle>as Arthur</v-list-item-subtitle>    
    
      </v-list-item-content>
    </v-list-item>
        </v-card>
      </v-col>
    </v-row>
     
     <v-row no-gutters class="mb-6">
      <v-col
        sm="6"
        md="5"
        lg="6"
      >
        <v-card
          class="pa-2"
          
          tile
          height="270px"
        >
          <v-img  class="image mx-auto" src='/static/pic/Forrest Gump.jpg' alt='Forrest Gump.jpg' > 
                <!-- <v-card-text>{{this.$route.params.title}}</v-card-text> -->
               </v-img> 
        </v-card>
      </v-col>
      <v-col
        sm="6"
        md="5"   
        lg="6"   
      >
        <v-card
          class="cardText pa-2"
          
          tile
          height="270px"   
        >
          <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold title">Forrest Gump</v-list-item-title>
        <v-list-item-title><br/></v-list-item-title>
         <v-list-item-title class="text-left font-weight-bold" >MOVIE INFO</v-list-item-title>
         <v-list-item-title><br/></v-list-item-title>
        <span class="textStyle">Despite his sub-normal IQ, Gump leads a truly charmed life, with a ringside seat for many of the most memorable events of the second half of the 20th century. Entirely without trying, Forrest teaches Elvis Presley to dance, becomes a football star, meets John F. Kennedy, serves with honor in Vietnam, meets Lyndon Johnson, speaks at an anti-war rally at the Washington Monument, hangs out with the Yippies, defeats the Chinese national team in table tennis, meets Richard Nixon, discovers the break-in at the Watergate, opens a profitable shrimping business, becomes an original investor in Apple Computers, and decides to run back and forth across the country for several years.</span>
        <v-list-item-title><br/></v-list-item-title>
        <v-list-item-title class="text-left font-weight-bold">CAST</v-list-item-title>
        <v-list-item-title>Tom Hanks </v-list-item-title>
        <v-list-item-subtitle>as Forrest Gump</v-list-item-subtitle>
         <v-list-item-title>Robin Wright </v-list-item-title>
        <v-list-item-subtitle>as Jenny Curran</v-list-item-subtitle> 
        <v-list-item-title>Gary Sinise </v-list-item-title>
        <v-list-item-subtitle>as Lt. Dan Taylor</v-list-item-subtitle>    
    
      </v-list-item-content>
    </v-list-item>
        </v-card>
      </v-col>
    </v-row>
</v-card>
<br/><br/><br/>
</v-container>

<Footer/>


</v-app>

</div>

</template>

<script>
import Footer from"../components/Footer";
import navigation from"../components/navigation";
export default {
    name: 'MovieList',
    components:{
    Footer,
    navigation  },
    data(){
        return{
           dialog: false,
      dialog1:false,
            // if(title === 'Movie Time Top 10 Movies'){
            }
        
    },
    methods:{
       sendParams1(){
      this.$router.push({name: 'content', query: { title: 'The Shawshank Redemption' }});
     } ,
    }
    
    }
</script>

<style >
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 300%;
  font-weight: bold;
   text-align: center;
   height: 100px;
}
.tbr{
  /* top: 0px; */
  z-index: 999;
  position: -webkit-sticky;
  position:sticky
}
/* .sty{
     color: black
 } */
 .Timage{
  width: 300px;
  height: 400px;
 }
 /* } position: absolute; 
   left: 25%; 
   top: 2%; */
 .image{
  width: 200px;
  height: 250px;
   
 }
 /* position: absolute; 
   left: 30%; 
   top: 3%; */
.textStyle{
  text-align: justify
}
.cardText{
   overflow:auto  
}

</style>