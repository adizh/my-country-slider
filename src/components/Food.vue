<template>
    <div >
<h1 class='title'>National Food</h1>
        <div class='info-section animate__animated  animate__zoomIn '>
Traditional Kyrgyz food revolves around mutton, beef and horse meat, as well as various
 dairy products. The preparation techniques and major ingredients have been strongly
  influenced by the nation's historically nomadic way of life. Thus, many cooking
   techniques are conducive to the long-term preservation of food. 
<p>Kyrgyzstan is a country where a nomadic and sedentary culture united at the 
    crossroads of the Great Silk Road. That is why the Kyrgyz national cuisine is
     an amazing combination of dishes of different Central Asian nationalities: Kyrgyz,
      Uzbeks, Uighurs and Dungans. A distinctive feature of Kyrgyz dishes is that all
       of them are prepared exclusively from fresh products and are rarely stored for
        future use, and the recipes for their preparation, although they seem quite 
        simple, in fact, contain a lot of subtleties, quite difficult to cook</p>
        </div>
<div class='gallery-slider ' style='display:flex;flex-wrap:wrap;justify-content:center;
    gap:13px;
    '>
<div  class='images_ '  v-for='(img, index) in foodGallery' :key='index' >
        <img   @click='showImg(img,index)' class='slider-images '  :src=img.url alt="someht">
          <p class="img_title">{{ img.title }}</p>
<transition name="fadeIn">
<div class='slider-image'
:class='img.isShown ? "openedImg":"staticImg"'
 v-show='isGalleryOpen && img.isShown '>
  <button class='close_btn' @click='closeGallery(img)'>
<svg   xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg>
  </button>
 <h3 class='food_title'>{{currentImg.title}}</h3>
 <img :class='img.isShown ? "openedOne" : "closedOne"' :src="currentImg.url" alt="food">
<div  class='slider_img_descr'>
    <p>{{currentImg.descr}}
</p>
 <transition name="fade"><p v-show='isOpen'>{{currentImg.showDescrInfo}}</p> </transition>
<button v-show='currentImg.showDescrInfo.length' @click='isOpen = !isOpen' class='btn btn-primary' >{{isOpen ? 'Hide' :'Show'}} </button>
</div>
 <button @keyup.right='nextImg' @click='nextImg' class='next_btn' ><svg id='btns' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
 <button  @keyup.left='prevImg' @click='prevImg' class='prev_btn'>
     <svg  id='btn' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
 </button>

</div> 
</transition>
  </div>

    </div>

    </div>
</template>
<script>
    export default {
        name:'Food',
        data(){
            return{
                isOpen:false,
                isGalleryOpen:false,
             
foodGallery: [
    {
    url:require(
'../assets/food/beshbarmak.jpg'),
    descr:'Beshbarmak is one of the most favorite and traditional Kyrgyz dishes',
    title:'Beshbarmak',
    showDescrInfo:` Beshbarmak is a chopped meat with noodles, onions and meat broth. It is noteworthy that traditionally beshbarmak is eaten by hands. This is the reason for the name of the dish: in translation from Kyrgyz, “beshbarmak” means “five fingers”. Beshbarmak is widespread mainly in the north of Kyrgyzstan, in Chui, Talas and Naryn oblasts`,
    isShown:false
    },
    {
        url:require(
'../assets/food/shorpo.jpeg'
    ),
        descr:'Shorpo is a strong and fat meat broth, which can contain carrots, potatoes, noodles and greens.',
        title:'Shorpo',
        showDescrInfo:'Shorpo is cooked everywhere in Kyrgyzstan, however, the recipe for its preparation can be very different depending on the place. For example, in the northern regions of Kyrgyzstan almost no seasonings are added to shorpo and the whole emphasis is on the prolonged cooking of meat broth. In the southern part of the country, on the contrary, a large number of aromatic spices and ingredients are added to shorpo.',
        isShown:false
    },
     {
        url:require(
'../assets/food/lagman.jpg'
    ),
        descr:'Lagman is a boiled noodle, seasoned with fried, then extinguished vegetables and meat.',
        title:'Lagman',
        showDescrInfo:'Lagman has Dungan roots and since ancient times is one of the favorite dishes of national cuisine. Like plov, the lagman has many varieties: fried boso-lagman, served separately gyuro-lagman, etc. Also, the ingredients may vary quite a bit, depending on the season or place of preparation.  In Kyrgyzstan, the lagman is spread everywhere.',
        isShown:false
    },
     {
        url:require(
'../assets/food/plov.jpg'
    ),
        descr:'Plov is a traditional Central Asian dish that comes from the Ferghana Valley(Uzbekistan) and is widespread in southern Kyrgyzstan.',
        title:'Plov',
        showDescrInfo:'The basis of the dish is rice, carrots and meat, first fried and then cooked. There is no canonical recipe for cooking plov and practically every region has its own recipe. The quantity of meat, rice and carrot can vary, additional ingredients such as garlic, raisins, dried apricots, nuts, etc., can be added. However, the most delicious is the plov from Uzgen rice, which is prepared in Uzgen and Osh.',
        isShown:false
    },
      {
        url:require(
'../assets/food/manty.jpg'
    ),
        descr:'Manty is a dough filled with meat, prepared on steam. ',
        title:'Manty',
        showDescrInfo:'This is a traditional Central Asian dish with Chinese roots. In Kyrgyzstan, the most common is filling finely chopped lamb or beef with onions. Often, to the meat is added  pumpkin or jusai. Vinegar is used as a seasoning for manty. The dish is widely distributed throughout Kyrgyzstan.',
        isShown:false
    },
        {
        url:require(
'../assets/food/kuurdak.jpg'
    ),
        descr:'Kuurdak is a fried meat with potatoes, onions and a lot of spices. It is cooked almost everywhere in Kyrgyzstan.',
        title:'Kuurdak',
        showDescrInfo:'',
        isShown:false
    },
     {
        url:require(
'../assets/food/dymdama2.jpg'
    ),
        descr:'Dymdama is stewed vegetables and meat in a cauldron, vegetables are cabbage, potatoes, carrots, eggplants, peppers, onions, celery and many others.',
        title:'Dymdama',
        showDescrInfo:'',
        isShown:false
    },
     {
        url:require(
'../assets/food/pelmeni.jpg'
    ),
        descr:'Pelmeni or meat dumplings, that are made with a simple dough of flour, water, eggs, and salt. Typically, they are stuffed with a filling of ground pork, chicken, turkey, or beef seasoning with onions and salt and pepper. ',
        title:'Pelmeni',
        showDescrInfo:'',
        isShown:false
    },
      {
        url:require(
'../assets/food/ashlaynfu.jpg'
    ),
        descr:'Ashlyan-fu is a cold soup of Dungan origin, prepared from sour-spicy vegetable broth, noodles and starch',
        title:'Ashlayn-fu',
        showDescrInfo:'The dish is common in the Chui and Issyk-Kul regions of the country, but the most delicious is Ashlyan-fu, which is prepared in the city of Karakol, where Ashlyan-fu is served with a small fried patty with potatoes.',
        isShown:false
    },
      {
        url:require(
'../assets/food/chuchuk.jpg'
    ),
        descr:'Chuchuk (or kazy, kazy karta, etc.) is a Central Asian sausage made from horse meat. For its production, horse instine is stuffed with horse meat with salt and spices. Use chuchuk in dried, boiled or smoked.',
        title:'Chuchuk',
        showDescrInfo:'',
        isShown:false
    },

      {
        url:require(
'../assets/food/oromo.jpg'
    ),
        descr:'The name means "to roll"/"to wrap", referring to how the food is made.',
        title:'Oromo',
        showDescrInfo:'The dough for orama is made from flour, water, and salt. It is kneaded and rolled thin, and a filling is spread over it. The filling may contain minced potatoes, minced meat, animal fat, and sometimes minced pumpkin or some other vegetable. ',
        isShown:false
    },
      {
        url:require(
'../assets/food/kurut.jpg'
    ),
        descr:'This is a sour-milk product, in the form of small dried beads, a kind of Central-Asian cheese.',
        title:'Kurut',
        showDescrInfo:'The history of kurut goes deep into the nomadic antiquity of the Turkic peoples. Manufacturing kuruts was one of the few ways to stock up provisions for a long time. Kurutas are noteworthy for the fact that they can be stored literally for years. The taste is salty and sourish. It is widely distributed throughout the territory of Kyrgyzstan.',
        isShown:false
    },

       {
        url:require(
'../assets/food/boorsok.jpg'
    ),
        descr:'Boorsok is the most favorite kind of bread for holidays. It is a small piece of yeast dough fried in oil. Bohorsoks are tasty, it can be both salty and sweet.',
        title:'Boorsok',
        showDescrInfo:'',
        isShown:false
    },
        {
        url:require(
'../assets/food/kattama.jpg'
    ),
        descr:'This is bread made from yeast dough, baked in a frying pan with a large amount of butter or kaimak – fatty sour cream. Often kattama is filled with onions.',
        title:'Kattama',
        showDescrInfo:'',
        isShown:false
    },

       {
        url:require(
'../assets/food/maksym2.jpg'
    ),
        descr:'Maksim is a Kyrgyz national drink made from cereals: barley, millet, wheat and corn. It has a sour taste.',
        title:'Maksym',
        showDescrInfo:'',
        isShown:false
    },
         {
        url:require(
'../assets/food/airan.jpg'
    ),
        descr:'Ayran is a sour-milk product distributed in Central Asia. It is a thick mixture, tasteful like yogurt.',
        title:'Airan',
        showDescrInfo:'',
        isShown:false
    },
     {
        url:require(
'../assets/food/chalap.jpg'
    ),
        descr:'Chalap is diluted with water ayran, to give a more liquid consistency. Also widely known as tan.',
        title:'Chalap',
        showDescrInfo:'',
        isShown:false
    },

   {
        url:require(
'../assets/food/kymyz.jpg'
    ),
        descr:'Kymyz is a traditional Kyrgyz drink produced by their mare’s milk, by careful whipping. Kymyz is prepared only for the period from May to September, when the mare’s feed their offspring and they can be milked. Kymyz has a tonic effect and at the same time is slightly alcoholic',
        title:'Kymyz',
        showDescrInfo:'',
        isShown:false
    },
  {
        url:require(
'../assets/food/bozo.jpg'
    ),
        descr:'Bozo is a low-alcoholic Kyrgyz national drink made from millet with the addition of yeast.',
        title:'Bozo',
        showDescrInfo:'',
        isShown:false
    },
],
    currentIndex:0,
    count:0,
            }
        },
        computed: {
    currentImg: function() {
        return this.foodGallery[Math.abs(this.currentIndex) % this.foodGallery.length]
    }
  },
        methods:{
            showImg(img,index){
                img.isShown=!img.isShown;
                this.currentIndex=index
                this.isGalleryOpen=true
            },
            nextImg(){
               this.currentIndex+=1
            },
            prevImg(){
                this.currentIndex-=1
            },
            closeGallery(img){
                img.isShown = false;
                this.isGalleryOpen = false
            }
         
        },
        mounted() {
  
        },
    }
</script>

<style scoped>
.item-move {
  /* applied to the element when moving */
  transition: transform .5s cubic-bezier(.55,0,.1,1);
}
.title{
  margin-top: 20px;
    font-weight: 700;
    text-align: center;
    padding: 29px;
    background: url('../assets/mainFoodImg.jpg') no-repeat center;
    font-size: 41px;
    min-height: 206px;
    padding-top: 25px;
}
.next_btn{
position:absolute;
top:80%;
right:22px;
border:none
}
.prev_btn:focus, .next_btn:focus{
    outline:none
}
.food_title{
        padding: -15px 0 0;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 53px;
    font-size: 25px;
}

.slider_img_descr{
       bottom: -191px;
    font-size: 18px;
    line-height: 33px;
    padding: 23px 142px;
    opacity: .9;
    z-index: 10;
    position: absolute;
    border-radius: 5px;
    width: 87%;
    margin: 0 auto;
    left: 0;
    right: 0;
}
.slider-images[data-v-26954ce4] {
    height: 200px;
}
.animate__animated.animate__zoomIn{
  --animate-duration: 3.4s;
   --animate-delay: 3.9s;
}
.prev_btn{
position:absolute;
top:80%;
left:22px;
border:none
}
.openedImg{
   
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
   background: #282828; /* Fallback color */
  

}
.slider-images:hover {
  cursor: pointer;
  opacity: 0.7;
}
.close_btn{
   position: absolute;
    right: 135px;
    top: 32px;
    border:none;
}
.close_btn:hover{
    opacity:.7
}
.images_{
width: 25%;
position:relative;
}
/* .images_:hover{
    opacity:.6;
    cursor:pointer;
} */
.img_title {
  background: burlywood;
  padding: 5px;
  border-radius: 5px;
  font-size: 18px;
}
.slider-images{
    width:100%;
    min-height:200px;
    position:relative;
}
#silentbox-overlay__description {
    left: -133px;
    margin-top: -281px;
    position: relative;
    width: 130%;
    z-index: 100;
    right: 25px;
}
.info-section{
padding:  30px 60px;
}
 .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{
        /* opacity: 1; fadeIn */
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }



 .fadeIn-enter{
        opacity: 0;
    }
    .fadeIn-enter-active{
        transition: opacity 1s;
    }
    .fadeIn-leave{
        
    }
    .fadeIn-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }

.openedOne{
  display: block;
    width: 70%;
    margin: 0 auto;
    padding: 86px 12px;
    margin-top: 30px;
}
.closedOne{
    width:25%
}
.staticImg{
    width: 50%;
}
@media (max-width: 780px) and (min-width: 481px){
    .images_{
        width:46%;
    }
    .slider_img_descr{
            bottom: -37px;
    width: 100%;
    }
    .next_btn,.prev_btn{
        top:45%
    }
}


@media screen and (max-width: 480px) and (min-width: 250px){
    .info-section {
         padding: 29px 12px;
    text-align: center;
    } 
    .images_{
        width:90%;
    }
    .slider-images{
        width:100%;
    }
    .next_btn,.prev_btn{
        top: 30%;
        border:none;
        background:transparent;
    }
    .slider_img_descr{
        bottom:175px;
    width: 100%;
    padding: 0px 23px;
    text-align: center;
    }
    .openedOne{
        width: 99%;
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    #btns{
        background:none;
    }
    #btn{
        background:none
    }
    .close_btn{
        top: 12px;
    right: 12px;
    }
}





</style>