<template>
    <div class='traditions_section'>
<h1 class="title">Traditions & Culture</h1>
<div class='info-section  animate__animated  animate__backInLeft'>
    Kyrgyz culture has been greatly influenced by their nomadic 
    heritage. It is reflected in the way a household was run, in
     customs and rites. People decorated their homes with items that were
      both beautiful and practical.
    Being a mountainous country with a very rich baggage of culture and
 traditions. Its history of traditions dates back to the period when Turkic
  tribes moved and settled in Central Asia. Thus, Kyrgyz tribes were very much
   influenced by Turkic traditions, sharing significant cultural similarities.
    Kyrgyz people have always been practicing nomadic lifestyle over the centuries.
     It ingrained into the Kyrgyz ideology that even today many people still are
      nomads who live in mountains. That nomadic lifestyle was very strongly
       embedded into Kyrgyz culture that even communism during the Russian rule 
       over the Kyrgyz Socialist was impotent to abolish it.  A lot of customs were preserved from those 
       times and are practiced today.
</div>
 <div class='gallery-slider' style='display:flex;flex-wrap:wrap;justify-content:center;
    gap:13px;
    '>
<div  class='images_'  v-for='(img, index) in foodGallery' :key='index'>
        <img  @click='showImg(img,index)' class='slider-images'  :src=img.url alt="someht">
<transition name="fadeIn">
<div class='slider-image'
:class='img.isShown ? "openedImg":"staticImg"'
 v-show='img.isShown'>
  <button class='close_btn' @click='img.isShown = false'>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg>
  </button>
 <h3 class='food_title'>{{currentImg.title}}</h3>
 <img :class='img.isShown ? "openedOne":"closedOne"' :src="currentImg.url" alt="">
<div  :class=' isOpen ? "slider_img_descr_open" :"slider_img_descr"'>
    <p>{{currentImg.descr}}
</p>
<transition name="fade"><p v-show='isOpen'>{{currentImg.showDescrInfo}}</p></transition>
<button   v-show='currentImg.showDescrInfo.length' @click='isOpen = !isOpen'  class='btn btn-primary' >{{isOpen ? 'Hide' :'Show'}} </button>
</div>
 <button @keyup.right='nextImg' @click='nextImg' class='next_btn' ><svg id='btn' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
 <button  @keyup.left='prevImg' @click='prevImg' class='prev_btn'>
     <svg  id='btns' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
 </button>

</div> 
</transition>
  </div>

    </div>

<Music />

<div  class='  animate__animated   animate__fadeInTopLeft links_page' >





<div v-if='isGameOpen'>   
    <div class='crafts-link'>
   <p class='craft_text games'>
   </p>
   <span class='text_' @click='isGameOpen =!isGameOpen'> Ethno Games  </span>
    </div>
 
</div>

<div>
    <router-link  @click='window.scrollTo(0,0)' style='text-decoration:none' to='/crafts'>
    <div class='crafts-link'>
   <p class='craft_text'>
   </p>
   <span class='text_'> Kyrgyz Craft  </span>
    </div>
    </router-link>
</div>

</div>

<div  v-if='!isGameOpen'>
    <Games @closeSection='closeSection'/>
</div>






    </div>
</template>

<script>

import Music from './Music'
import Games from './Games'
    export default {
        name:'Traditions',
        components:{
            Music,
            Games
        },
        data(){
            return{
                isOpen:false,  
                isGameOpen:true, 
                foodGallery: [
    {
    url:require(
'../assets/trad/cradle.jpg'),
    descr:'Childbirth is considered to be one of the most important events and, thus, various customs are performed before and after a baby is born.',
    title:'Childbirth Traditions',
    showDescrInfo:`The first one is suiunchu, happy news about a baby birth that are told with the aim of getting a present. People who come and see a newborn baby have to give a korunduk, any present or money to the family of a baby.
    One of the most famous traditions is a beishik toi, a celebration when a baby is born.The most interesting part of the celebration is a cradle custom. Parents of a baby’s mother should prepare specific bedding for a cradle which needs to be greased by butter and archa (juniper). After a cradle is prepared, a mother should take it and walk around a house. All of the guests give their blessings to a newborn baby and his or her mother. The tradition used to be performed many years ago, and today, unfortunately, it is being forgotten because only few people from rural areas preserve it.
    
    `,
    isShown:false
    },
 {
        url:require(
'../assets/trad/beshiktoi.jpg'
    ),
        descr:"This feast celebrates a new child's first day in the cradle, within a week of his or her birth.",
        title:'Beshik Toi(cradle feast)',
        showDescrInfo:'The beshik is a wooden cradle used to swaddle a child until he or she starts walking. Historically, the Kyrgyz made very simple beshiks, suitable to their nomadic way of life. Two arcs are made from a bunch of dry willow as thick as a forearm; holes are made in their bases. Sticks matching these holes are attached, and wicker rope is strung between the sticks. A mattress is spread out inside.',
        isShown:false
    },
 {
        url:require(
'../assets/trad/jentektoi.jpg'
    ),
        descr:"New parents show their happiness by treating their neighbors, and a mark of respect is to treat people to sary mai (yellow butter). ",
        title:'Jentek Toi(Birth feast)',
        showDescrInfo:" First it is put into the baby's mouth, followed by the oldest person in the house. The sary mai is kept in a slaughtered lamb's, sheep's or calf's stomach for the purpose of this feast. To honor ne baby, guests bring clothes, animals or food. Relatives offer calves, sheep or lambs. They can also present a shyrdak (carpet) or horsecloth.",
        isShown:false
    },
    {
        url:require(
'../assets/trad/tushoo.jpg'
    ),
        descr:'Other famous tradition is tushoo kesuu, a ceremony when a baby starts making first steps.',
        title:'Tushoo kesuu',
        showDescrInfo:'It is one of the oldest Kyrgyz customs. They invite many guests, mostly relatives and close friends. In return guests should bring presents to a baby. The main ritual is performed as follows: the baby’s legs are tied with white and black rope. The colors symbolize the struggle between two principles — good and evil. Small kids, teenage children, adults, and even seniors have to compete in racing, and the one who comes to the finish line first needs to cut the rope with a specially prepared knife that is taken by the winner. Once the rope is cut, a baby is supposed to be walked by a winner. The purpose of this race is to prepare a baby to learn to walk faster. To show gratitude the hosts give various presents to guests Presents vary from small toys to cattle.',
        isShown:false
    },
     {
        url:require(
'../assets/trad/circumcision2.jpg'
    ),
        descr:'Circumcision is among the oldest Kyrgyz Muslim traditions. ',
        title:'Sunnot',
        showDescrInfo:'When a baby boy turns three, five, or seven, he certainly needs to go thought this custom. According to Islamic precepts, the age of a boy should be an odd number. Visiting guests usually come to see a boy and give him either money or presents, the most valuable present is a horse. This custom is considered to be a sacred duty because a boy transits from one age condition to another.',
        isShown:false
    },
     {
        url:require(
'../assets/trad/wedding.jpg'
    ),
        descr:'Wedding traditions has evolved for many centuries. Some of them are still hold by population',
        title:'Wedding traditions',
        showDescrInfo: `
          Historically, the former custom was very popular when future couple
           was not even born. Specifically, two families in a very good
            friendship relationship used to agree on marrying their children
            to each other in order to tie their friendship even better.
              Kyz ala kachuu or bride kidnapping was very popular in past. Two 
               people agreed on marrying each other, and a groom always had a 
               consent of a bride before bride kidnapping her. The tradition
                was as well popular if bride’s parents were against the marriage. 
                After the bride is kidnapped, she cannot leave the house of the
                 groom. In this case bride’s parents had no other choice, but to 
                 accept the marriage. `,
        isShown:false
    },

        {
        url:require(
'../assets/trad/kyzuzatuu.jpeg'
    ),
        descr:'Before an actual wedding there is kyz uzatuu, a custom when bride’s family and relatives say goodbye to her by holding a toi (feast).',
        title:'Kyz uzatuu',
        showDescrInfo:`Most of the times, after the toi, she is taken to the groom’s house to start her new life there.
Actual wedding consists of two parts: fun part with friends and younger relatives and toi in the evening. Young people enjoy driving around a city in a procession of decorated cars, visiting famous sites, and taking pictures and saying toasts. Afterwards, the couple and all of the guests arrive to the restaurant to celebrate. It includes eating, drinking, saying toasts and wishes, and dancing`,
        isShown:false
    },
      {
        url:require(
'../assets/trad/wedding2.jpg'
    ),
        descr:'Modern weddings are more popular in Kyrgyzstan today.',
        title:'Modern weddings',
        showDescrInfo:'Even though they are called modern, they still include practicing traditional customs. For example, nike kyiuu, Muslim legalization of marriage, takes place sometime before the wedding. Frankly speaking, moldo (mullah) comes and reads a prayer and asks a couple whether they are certain about their decisions to marry each other.',
        isShown:false
    },
     {
        url:require(
'../assets/trad/funeral.jpg'),
        descr:'The notification of death, kabar aituu or suuk kabar, is very responsible and difficult news to share.',
        title:'Funeral Traditions',
        showDescrInfo:`Almost all of the funeral customs of Kyrgyz people have experienced a great influence of pre-Islamic or Islamic traditions.
         When one dies cattle is sacrificed and 
         distributed to those who come to a funeral. 
         When close people feel that a person is dying,
          they invite moldo (mullah) who tells yiman (prayer),
           blesses, and lets one rest in peace. Then the body of the deceased is
            placed in a yurt. Women cry inside of the yurt and do koshok aituu,
             folklore singing that is sung when one dies. Incoming women should
              enter the yurt and express their condolences, konul aituu. Men cry
               outside of the yurt. Everyone should wear a traditional hat on that
                day, women wear jooluk (scarf) and men wear kalpak and tebetei 
                (traditional male hats). Incoming people should come into a house 
                and drink tea. Therefore, dastorkon, a table is laid from the beginning
                 of the funeral. 
         `,
        isShown:false
    },
    
      {
        url:require(
'../assets/trad/funeral.jpg'
    ),
        descr:`On the third day before the burial, the body of
                  the deceased is washed by close people. Then, it is wrapped in
                  a cloth that is called kepin. After this custom, it is believed
                   that the deceased is ready to rest in peace. `,
        title:'Funeral Traditions',
        showDescrInfo:`While moldo reads
                    janaza (prayer), the deceased’s son, brother, or uncle shall 
                    repeat after him: “Atamdyn (apamdyn, baikemdin) karyzy bolso 
                    menden algyla, alasasy bolso kechtim.” It means that if the 
                    deceased had debts, his sons or brothers have to repay it. If 
                    someone borrowed from the deceased, the debt should be forgiven.
                     Afterwards, soektu uzatuu begins, when the body is taken to 
                     the cemetery. According to Islamic traditions, only men can
                      accompany the body to the cemetery. Women go to the yurt and 
                      continue crying there. After the body is buried, men start
                       okuruu, lamenation while returning from the cemetery. At 
                       the end of the funeral kuran (prayer) is read again. It is
                        believed that it helps the deceased in another world.`,
        isShown:false
    },

     {
        url:require(
'../assets/trad/aytysh.jpg'
    ),
        descr:'Aytysh is a song competition held between two aqyns. ',
        title:'Aytysh',
        showDescrInfo:" Each usually strums a national instrument (qomuz in the case of the Kyrgyz), and they respond to each other in spontaneous rhyming verse on a range of topics. They may make backhanded political statements, criticise each other's style, flirt, and flat-out insult one another, but it is all done in good humour: Kyrgyz aqyns even often state that one must have good intentions to be a good aqyn. Because of this, it is a commonly held belief that one cannot hold what an aqyn says against them, and the only way for one aqyn to' get back at 'another aqyn is to attempt to outdo them at aytysh.",
        isShown:false
    },
    
  {
        url:require(
'../assets/trad/manas.jpg'
    ),
        descr:'The Epic of Manas is a great masterpiece of folklore of  Kyrgyz people. It is the longest epic poem in the world.',
        title:'The Epic of Manas',
        showDescrInfo:'In one of its iterations it consists of more than 500 000 lines. In 1995 people of Kyrgyzstan celebrated the 1,000th anniversary of the Epic of Manas. Throughout the ages the Epic of Manas went the round, enriching and getting new shades, but keeping a clear storyline. True skill of the narrative work was achieved by national storytellers called “manaschy”. They can tell fascinating stories about the great hero Manas and his exploits for many hours. Each manaschy has his own style of presentation and his own interpretation of the events of the epic, but all of them keep to the same storyline. Currently 35 different iterations of the epic are known. They were written from the words the famous and skillful narrators S.Orozbakov, S.Karalaev, Togolok Moldo and others.',
        isShown:false
    },
],
    currentIndex:0,
            }
        },
        computed:{
             currentImg: function() {
      return this.foodGallery[Math.abs(this.currentIndex) % this.foodGallery.length];
    },
   
        },
        methods:{
            closeSection(){
                this.isGameOpen=true;
            },
              showImg(img,index){
                img.isShown=!img.isShown;
                this.currentIndex=index
            },
            nextImg(){
               this.currentIndex+=1

            },
            prevImg(){
                this.currentIndex-=1
            }
        }
    }
</script>

<style  scoped>
   .fadeIn-enter{
        opacity: 0;
    }
    .fadeIn-enter-active{
        transition: opacity 1s;
    }
    .fadeIn-leave{
        /* opacity: 1; fadeIn */
    }
    .fadeIn-leave-active{
     /*    transition: opacity 1s;
        opacity: 0; */
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


.crafts-link {
  width: 350px; 
  position:relative;
  height: 300px;
  margin: 10px 20px; 
  
}
.animate__animated{
    --animate-duration: 6s;
   --animate-delay: 7.9s;
}
.animate__backInLeft{
     --animate-duration: 2.5s;
   --animate-delay: 2.9s;
}
.animate__fadeInUp{
        --animate-duration: .5s;
   --animate-delay: 7.9s;
}
.animate__fadeInTopLeft{
        --animate-duration: 6s;
   --animate-delay: 17s;  
}
.craft_text {
  width: 100%;
  height: 100%;
  /*background-color: black; */
  background:url('../assets/crafts/crafts.jpg');
  
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  transition: all 0.9s;
 font-weight: 800;
  font-size:30px;
  text-align:center;
  display:flex;justify-content:center;
  align-items: center;
}
.games{
    background:url("../assets/trad/games.jpg");
      
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  transition: all 0.9s;
 font-weight: 800;
  font-size:32px;
  text-align:center;
  display:flex;justify-content:center;
  align-items: center;
}

.crafts-link:hover .craft_text,
.crafts-link:focus .craft_text {
  transform: scale(1.2);
  display:block;
  font-weight: 800;
  font-size:32px;
  text-align:center;
  display:flex;justify-content:center;
  align-items: center;
  opacity:.6;
}
.text_{
       top: 48%;
    /* top: 48px; */
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    text-align: center;
    border:1px solid white;
    border-radius:12px;
    font-size: 25px;
    padding:8px;
    width:50%;

}
.crafts-link:hover .text_{
    position:absolute;
    z-index:10;
    color:white;
   
}

.text_{
 display:block;
background:none;
}
.craft-text::before {
  content: "";
  display: none;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

}
.slider-images:hover{
    cursor:pointer;
    opacity:.6;
}

.crafts-link:hover .craft_text:before,
.crafts-link:focus .craft_text:before
{
  display: block;
 
}
.crafts-link:focus .craft_text{
    opacity:.6
}
.title{
     margin-top: 20px;
    font-weight: 700;
    text-align: center;
    padding: 29px;
    background: url('../assets/trad/traditions.jpg') no-repeat center;
    font-size: 41px;
    min-height: 566px;
    padding-top: 25px;
    background-size:contain;
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
.food_title{
        padding: -15px 0 0;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 53px;
    font-size: 25px;
}
.links_page{
display:flex; 
justify-content:space-evenly; 
margin: 80px auto 20px
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
.sub_title{
    text-align: center;
    margin: 70px 10px 30px;

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





@media screen and (max-width: 480px) and (min-width: 250px){
    .traditions_section{
        margin-top: -170px;

    }
    .info-section{
    margin: -99px auto;
    text-align: center;
    padding: 5px 20px;
    width:100%;
   
   
    }
    .gallery-slider{
        margin: 155px auto;
    }
    .images_{
        width: 100%
    }
     .next_btn,.prev_btn{
        top: 30%;
        border:none;
        background:transparent;
    }
    .slider_img_descr{
    bottom:168px;
    width: 100%;
    padding: 0px 23px;
    text-align: center;
    }
    .slider_img_descr_open{
    bottom: 195px;
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
    .openedOne{
        width: 89%;
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
    .title{
        width: 100%
    }
    .links_page{
        flex-direction: column;
    }
    .crafts-link{
    height: 244px;
    width: 89%;
    }
    .text_{
    padding: 1px;
    width: 73%;
    }
}
</style>