<template>

<div id="content">
<v-app>

<v-card
    color="indigo lighten-1"
    flat
    height="100px"
   tile
  >
  <h1 class="white--text align-end" center>Movie Time</h1>
</v-card>

<v-toolbar  class="tbr" :elevation="7" height="80px"   >
      <!-- <v-spacer></v-spacer>
      :src="bianliangming(script dingyi)" -->
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


<v-card
    color="white light-4"
    flat
    height="100px"
    tile
  >
  <h2 class="black--text align-end" center><br/>{{this.$route.query.title}}</h2>
</v-card>

<v-card width="800" class="mx-auto">
 <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.src"
      >
      </v-carousel-item>
    </v-carousel>
</v-card>

      <div class="text-center mt-12">
          <v-rating
            v-model="rating"
            color="red lighten-3"
            background-color="grey lighten-1"
            emptyIcon='mdi-heart-outline'
            fullIcon= 'mdi-heart'
            halfIcon= 'mdi-heart-half-full'
            half-increments
            hover
          ></v-rating>
        </div>
<v-container>
<v-card>

  <v-timeline dense>
        <v-timeline-item
          v-for="n in 10"
          :key="n"
        >
        <template v-slot:icon>
          <v-avatar>
            <img src="http://i.pravatar.cc/64">
          </v-avatar>
        </template>
          <span slot="opposite">Tus eu perfecto</span>
          <v-card class="elevation-2">
            <v-card-title class="headline" >Lorem ipsum 
              <v-btn v-if="isClick==0"  icon class="likeimg" @tap="like"><v-icon >mdi-heart</v-icon></v-btn>
			        <v-btn v-if="isClick==1" text icon color="pink" class="likeimg" @tap="like"><v-icon >mdi-heart</v-icon></v-btn>
             <span class="clicknum">{{clickNum}}</span>
            </v-card-title>
         
            <v-card-text class="text-md-left">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>

</v-card>
</v-container>


<br/><br/><br/>
<Footer/>
</v-app>
</div>

</template>

<script>
import Footer from"../components/Footer";
export default {
   name: 'content',
   components:{
    Footer
  },
  methods:{
				like:function(){
							if(this.isClick==0){
								this.isClick=1
								this.clickNum=this.clickNum+1
								console.log(this.clickNum)
							}else{
								this.isClick=0
								this.clickNum=this.clickNum-1
							}
				}
				
				
			},

    data(){
        return{
          clickNum:12,
				isClick:'',
      dialog: false,
      dialog1:false,
    colors: [
      'primary',
      'warning',
      'green',
      'red',
      'blue',
      'error',
      'teal',
      'red lighten-3',
    ],
    bgColor: 'grey lighten-1',
    bgColors: [
      'grey lighten-2',
      'warning lighten-1',
      'green lighten-2',
      'red lighten-2',
      'grey',
      '#eee',
      'cyan lighten-2',
      'grey lighten-1',
    ],
            // if(title === 'Movie Time Top 10 Movies'){
      slides: [
            {
          src: '../../static/pic/shawshank/shawshank-redemption-1.jpg',
        },
        {
          src: '../../static/pic/shawshank/shawshank-redemption-2.jpg',
        },
        {
          src: '../../static/pic/shawshank/shawshank-redemption-3.jpg',
        },
        {
          src: '../../static/pic/shawshank/shawshank-redemption-4.jpg',
        },
      ],
            }
        
    },
 
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
  top: 0px;
  z-index: 999;
  position: -webkit-sticky;
  position:sticky
}
</style>