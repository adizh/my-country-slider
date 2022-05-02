<template>
  <div id="app">
  <div class='pages'>
<div>
   <router-link    to="/"  class='links'>About</router-link>
</div>
 <div>
     <router-link  to="/food"   class='links '>Food</router-link>
 </div>
 <div>
     <router-link  to="/traditions"   class='links '>Traditions</router-link>
 </div>
 <div>
     <router-link  to="/places"   class='links '>Sights</router-link>
 </div>
  <div>
     <router-link   to="/crafts"   class='links '>Craft</router-link>
 </div>
</div>
    <Slide class='inactive'>
     <div>
   <router-link    to="/"  class='links'>About</router-link>
</div>
 <div>
     <router-link  to="/food"   class='links '>Food</router-link>
 </div>
 <div>
     <router-link  to="/traditions"   class='links '>Traditions</router-link>
 </div>
 <div>
     <router-link  to="/places"   class='links '>Sights</router-link>
 </div>
  <div>
     <router-link   to="/crafts"   class='links '>Craft</router-link>
 </div>
    </Slide>


<vue-page-transition name="fade-in-down">
  <router-view/>
</vue-page-transition>



  </div>
</template>
<script>
import { Slide } from 'vue-burger-menu' 
export default {
  name: 'App',
  data(){
    return{
         isLinkActive:false,
    }
  },
  components:{
    Slide
  },
  methods:{
    activeLink(){
      this.isLinkActive = true;
      console.log('true',this.isLinkActive)
    }
  }
}
</script>

<style>

* {
 font-family: 'Oxygen', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #282828;
  color:white;
}
#app{
  margin-bottom: 30px;
}

.pages{
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    margin: 2px;
}

.links{
      color:burlywood;
    text-decoration: underline;
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
    transition:all .4s
}

.links:hover{
 transition: all .4s;
  color: floralwhite;
  text-decoration:none;
}
/* div a.active{
 border-bottom:1px solid floralwhite;
 color:white;
}
 */
div a.router-link-exact-active{
  border-bottom:1px solid floralwhite;
 color:white; 
}
.inactive{
  display: none
}

.btn-hover {
  display:block;
  text-align: center;
text-decoration: none;
width: 100px;
    font-size: 17px;
    font-weight: 600;
    border:none;
    color: #fff;
    cursor: pointer;
    margin:  5px 20px;
    padding: 9px;
    text-align:center;
    border: none;
    background-size: 300% 100%;

    border-radius: 50px;
      display:block;
  text-align: center;
text-decoration: none;
display:flex;justify-content:center;
align-items: center;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-hover:hover {
  color:white;
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    text-decoration: none;
}

.btn-hover:focus {
    outline: none;
}
.btn-hover.color-3 {
  text-decoration: none;
   background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
}

@media  (max-width: 480px) and (min-width: 250px){
  .inactive{
  display: block
}

.pages{
  display:none
}

.bm-menu{
  background-color: #282828;
}

.line-style{
display:block;
background-color:white;
}

.bm-burger-button{
  background:transparent;
}
span.cross-style{
    right: 43px;
    top: 30px;
}
span.bm-cross-button span.bm-cross{
  height:29px  !important;
}
span.bm-cross-button span.bm-cross:first-child{
transform: rotate(-42deg)  !important;
}
}
</style>
