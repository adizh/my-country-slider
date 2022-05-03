<template>
    <div class=''>
<h3  @click='closeSection' class="sub_title" >Ethno Games</h3>
<img  style='width: 80%; object-fit: contain;margin:10px auto;display:block;' src="../assets/trad/games.jpg" alt="national music">
 <div class='info-section animate__animated animate__zoomIn'>National entertainment occupies a prominent place in the life of Kyrgyz people. Various ethno-games and competitions are extremely popular. They are also one of the most important elements of nomadic culture, as they helped to develop the necessary skills and qualities of nomads: riding skill, strength, agility, endurance and accuracy.</div>
 
 
 <div class='gallery-slider' style='display:flex;flex-wrap:wrap;justify-content:center;
    gap:13px;
    '>
<div  class='images_'  v-for='(img, index) in gameGallery' :key='index'>
        <img  @click='showImg(img,index)' class='slider-images'  :src=img.url alt="someht">

<div class='slider-image'
:class='img.isShown ? "openedImg":"staticImg"'
 v-show='img.isShown'>
  <button class='close_btn' @click='img.isShown = false'>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg>
  </button>
 <h3 class='food_title'>{{currentGame.title}}</h3>
 <img :class='img.isShown ? "openedOne":"closedOne"' :src="currentGame.url" alt="">
<div  :class='isOpen  && smallDevices ? "slider_img_descr_open":currentGame.descr.length <=37 ? "small_desc" :"slider_img_descr"'>
    <p>{{currentGame.descr}}
</p>
<p v-show='isOpen'>{{currentGame.showDescrInfo}}</p>
<button v-show='currentGame.showDescrInfo.length > 1 '  class='btn btn-primary'  @click='isOpen = !isOpen' >{{isOpen ? 'Hide' :'Show'}} </button>
</div>
 <button @keyup.right='nextImg' @click='nextImg' class='next_btn' ><svg
 id='btn'
  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
 <button  @keyup.left='prevImg' @click='prevImg' class='prev_btn'>
     <svg  id='btns' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
 </button>

</div> 
  
  </div>

    </div>
    </div>
</template>

<script>
    export default {
        name:'Game',
        data(){
            return{
    currentIndex:0,
    isOpen:false,
    gameGallery:[
                 {
        url:require(
'../assets/trad/horserace.jpg'
    ),
        descr:'The most popular game is a horse race',
        title:'Horse race',
        showDescrInfo:`At a funeral or on holidays horse races were held over long distances. This competition is called at-chabysh. Only horses of great endurance can take part in it, so that they would overcome a distance of up to 100 km. The competition called “jorgo-salysh” is similar to al-chabysh, but the style of riding in it is amble (when a horse's hooves are raised and lowered to the ground in pairs).`,
        isShown:false
    },

                     {
        url:require(
'../assets/trad/selkinchek.jpg'
    ),
        descr:'No holiday celebration is complete without a teeter made ​​of wood and rope called “selkinchek”. Two persons usually teeter together, a boy and a girl. In the places where the teeter is set, there is always a lot of young people and you can hear their ringing voices and laughter.',
        title:'Selkincheck',
        showDescrInfo:``,
        isShown:false
    },
          {
        url:require(
'../assets/trad/kyzkuumai.jpg'
    ),
        descr:'Kyz-kuumai - (in translation from Kyrgyz -girl chasing) is one of the most ancient, interesting and cheerful Kyrgyz games played during the wedding ceremony or big holidays, bringing joy to all the guests',
        title:'Games',
        showDescrInfo:`A game is usually conducted as follows. A young man on horseback waits at a starting line. A young woman, also mounted, starts her horse galloping from a given distance behind the young man. When the young woman passes the young man, he may start his horse galloping. The two race towards a finish line some distance ahead. If the young man is able to catch up to the young woman before they reach the finish line, he may reach out to her and steal a kiss, which constitutes victory. However, if the young man has not caught up to the young woman by the time they reach the finish line, the young woman turns around and chases the young man back to the starting line. If she is in range of the young man, she may use her whip to beat him, which signifies a victory for her.`,
        isShown:false
    },
      {
        url:require(
'../assets/trad/kokboru.jpg'
    ),
        descr:'Kok – Boru (grey wolf) or Ulak-tartysh (the struggle for the goat) – a sort of horse football, invented by ancient nomads, which is used instead of a ball, the headless carcass of an animal.',
        title:'Kok boru or Ulak tartysh',
        showDescrInfo:'The game is popular not only in Kyrgyzstan but also in other countries of Central Asia and in Afghanistan and Tajikistan. The purpose of each team is to throw the carcass of an animal in the opponent"s goal. Kok-Boru is considered one of the tough sports horse games that requires dexterity and endurance, and the most importantly great skills of horse riding. You can find the similar games in Europe called horseball, and in the south America is pato. Kok-bor competitions are included in the program of the World Nomadic Games.',
        isShown:false
    },

       {
        url:require(
'../assets/trad/kuresh.jpg'
    ),
        descr:'Kuryosh (in translation from Kyrgyz - "struggle") is traditional wrestling of the Turkic peoples, which is an independent kind of sport. Koresh is belt wrestling. In Kyrgyzstan, the wrestlers of this sport are called "kureoshu", "balban".',
        title:'Kuryosh',
        showDescrInfo:'From the immemorial time, the Turks arranged the kuryosh competitions during large parties, weddings and other joyous events. In the case of Kyrgyz, Kazakhs ,the belt wrestling is accompanied by an active struggle of the legs, unlike the Bashkirs and Tatars. Competitions on kuryoshu are held among not only men, but also women and teenagers.',
        isShown:false
    },
       
    ],
            }
        },
        props:{
            isGameOpen:Boolean
        },
        methods:{
    showImg(img,index){
                img.isShown=!img.isShown;
                this.currentIndex=index
            },
            nextImg(){
               this.currentIndex+=1

            },
            prevImg(){
                this.currentIndex-=1
            },
            closeSection(){
                this.$emit('closeSection')
            }
        },
        computed:{
                      currentGame: function() {
      return this.gameGallery[Math.abs(this.currentIndex) % this.gameGallery.length];
    },
      smallDevices(){
      return window.innerWidth > 250 && window.innerWidth < 880
    }
        },
      
    }
</script>

<style  scoped>
.sub_title{
     margin-top: 5px;
    font-weight: 700;
    text-align: center;
    padding: 29px;
    font-size: 41px;
    padding-top: 25px;
    border-radius: 5px;
        display: flex;
    justify-content: center;
    align-items: center
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
.animate__animated{
    --animate-duration: 3s;
   --animate-delay: .9s;
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
.small_desc{
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
.close_btn{
   position: absolute;
    right: 135px;
    top: 32px;
    border:none;
}
.close_btn:hover{
    opacity:.7
}
.info-section{
    padding: 20px 50px;
    width: 77%;
    line-height:29px;
    margin: 10px auto;
}
.images_{
width: 25%;
position:relative;
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
@media (max-width: 480px) and (min-width: 250px){
    .images_{
        width:100%;
    }
    .info-section{
        
    width: 100%;
    padding: 3px 10px;
    text-align: center;
    margin: 26px auto;

    }
.small_desc{
    text-align: center;
    bottom: 195px;
    width: 100%;
    padding: 0;
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
        bottom:75px;
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
      .slider_img_descr_open{
         
        bottom: 15px;
          font-size: 18px;
    line-height: 33px;
    opacity: .9;
    z-index: 10;
  
    border-radius: 5px;
 width: 100%;
    padding: 0px 23px;
    text-align: center;
    margin: 0 auto;
    left: 0;
    right: 0;
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