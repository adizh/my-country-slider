<template>
  <div>
    <h1 class="title">Sightseeings of Kyrgyzstan</h1>
    <div class="info">
      <p>
        Kyrgyzstan is a beautiful landlocked country defined by its raw beauty
        of nature defined by its unspoilt mountainscapes, pristine valleys,
        celestial lakes, rare flora and fauna and so much more.
      </p>
    </div>
    <div
      class="gallery-slider"
      style="display: flex; flex-wrap: wrap; justify-content: center; gap: 13px"
    >
      <div class="images_" v-for="(img, index) in foodGallery" :key="index">
        <img
          @click="showImg(img, index)"
          class="slider-images"
          :src="img.url"
          alt="someht"
        />
        <p class="img_title">{{ img.title }}</p>
       <transition name="fadeIn">   <div
          class="slider-image"
          :class="img.isShown ? 'openedImg' : 'staticImg'"
          v-show="img.isShown"
        >
          <button class="close_btn" @click="img.isShown = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fill-rule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </button>
          <h3 class="place_title">{{ currentImg.title }}</h3>
          <img
            :class="img.isShown ? 'openedOne' : 'closedOne'"
            :src="currentImg.url"
            alt=""
          />
          <div :class=" isOpen ? 'slider_img_descr_open':'slider_img_descr'">
          <p>{{ currentImg.descr }}</p>
          <transition name="fade">    <p v-show="isOpen">{{ currentImg.showDescrInfo }}</p></transition>
            <button
              v-show="currentImg.showDescrInfo.length"
              @click="isOpen = !isOpen"
              class="btn btn-primary"
              style="border: none"
            >
              {{ isOpen ? "Hide" : "Show" }}
            </button>
          </div>
          <button @keyup.right="nextImg" @click="nextImg" class="next_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
              id='btn'
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
          <button @keyup.left="prevImg" @click="prevImg" class="prev_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
              id='btns'
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
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
  name: "Places",
  data() {
    return {
      isOpen: false,

      foodGallery: [
        {
          url: require("../assets/place/sarychelek.jpg"),
          descr:
            'The Sary-Chelek lake is very popular among the travelers and the tourists, for it"s charming wild nature.',
          title: "Sary-Cheleck",
          showDescrInfo: `From the Kyrgyz language Sary-chelek means “a yellow vase”,  due to the 
          fact that the lake has a shape of deep vessel. In the fall, the Sary-Chelek lake is
           covered with the yellow leaves, therefore it looks like yellow vase.Sary-Chelek
            is a unique lake.  It is the third deepest lake in the Central Asia, and the second in
             Kyrgyzstan.  The lake was formed by the devastating earthquake 10 thousand years ago
              when a massive landslide blocked the effluxion  of the Kara-Suu – Koldjo-Ata rivers,
                consequently the river flooded the whole valley.Sary-Chelek is freshwater lake, and there
                 is one  river flow out  of Sary-Chelek named Kodjo-Ata.  Here you can observe the diverse
                   flora and fauna (300 species of plants, 32 species of trees, 80 types of bushes,
                    38 species of animals and 157 species of birds).`,
          isShown: false,
        },
        {
          url: require("../assets/place/konorchek.jpg"),
          descr:
            "The canyon looks like another canyon Grand canyon in America but still has its own elements.",
          title: "Konorchek Canyon",
          showDescrInfo: `Fantastic thing about reaching to the canyon is that you have to walk through
         labyrinths of rocks on the bed of a dried river. Konorchek is full of red stones that you 
         can see for miles, so you may find your walk never ending if you walk to the end of these
          stones. 
        A special attraction of canyons is an extinct volcano, age of which is estimated as 
        3 million years. The climate in the canyons of Konorchek is quite unusual and original.
   `,
          isShown: false,
        },
        {
          url: require("../assets/place/jetuoguz.jpg"),
          descr:
            "The name means “seven bulls”, which comes from the fact that the rocks look like seven bulls. Jeti-Oguz Rocks are a protected Nature Monument.",
          title: "Karakol/Jeti-Oguz Gorge",
          showDescrInfo:
            '',
          isShown: false,
        },
        {
          url: require("../assets/place/alaarcha.jpeg"),
          descr:
            "The park's name in translated from Kyrgyz as the Speckled Juniper (Archa), in honor of a plant which can be seen here at every turn. ",
          title: "Ala Archa",
          showDescrInfo: "",
          isShown: false,
        },
        {
          url: require("../assets/place/sonkol.jpg"),
          descr:
            "Song-Kol (also known as Sonkol, Song-Köl, and Son-Kul) is a large alpine lake, sandwiched in a hollow between the inner spurs of the Tien Shan in the Naryn region. ",
          title: "Song Kol Lake",
          showDescrInfo: `Sitting at 3016 meters above sea level, the lake is surrounded by virgin pastures, a conservation area, and the ridges of Sonköltoo and Moldotoo.

The shores of the lake are low, swamped, and in some places overgrown with reeds. The lake is glacier-fed and drains into the Son-Kul river and eventually the Naryn river. Ice on the lake is common from late September to late May.`,
          isShown: false,
        },
        {
          url: require("../assets/place/GrigorievGorge.jpg"),
          descr:
            "Grigoriev Gorge is a long and picturesque gorge on the northern shore of the Lake Issyk-Kul, near the village of Grigorievka. The gorge is famous for its wooded slopes and three mountain lakes.",
          title: "Grigoriev Gorge",
          showDescrInfo: "",
          isShown: false,
        },
        {
          url: require("../assets/place/isukkul.jpg"),
          descr:
            'The pearl of the Tien Shan - Issyk-Kul is the largest lake in Kyrgyzstan. Issyk-Kul translates as "hot lake". The water temperature here does not drop to minus even in winter, so the lake never freezes.',
          title: "Issyk Kul Lake",
          showDescrInfo:
            "Since 2014, the World Nomad Games have been held in Issyk-Kul. This includes various competitions in ethnic sports. For example, kok-boru (goat-picking), alysh (belt wrestling) and alchiki (a game using cattle bones). Nomad games attract players and tourists from all over the world.",
          isShown: false,
        },

        {
          url: require("../assets/place/skazka.jpg"),
          descr:
            " Fairy Tale canyon is representation of the red stones which have been eroded and shaped by the elements.",
          title: "Skazka (Fairy Tale) Canyon",
          showDescrInfo: `The Skaza or the fairy tale canyon has some historical stories
           going behind it as well. Some formations in the canyon have names because of their similarity 
           to well known objects. One of those set is known as the “Chinese Wall” because it looks
            similar to the Great Wall of China. To your surprise you will find formation of rocks
             which appear to be statues of a hippopotamus, snake, dragon, sleeping giant and even 
             whole castles. Because the different rocks have amazing colors, the rocky statues not 
             only have unusual shapes, but also magical colors.`,
          isShown: false,
        },
        {
          url: require("../assets/place/burana.jpg"),
          descr:
            "The Burana Tower is a large minaret in the Chuy Valley in northern Kyrgyzstan.",
          title: "Burana Tower",
          showDescrInfo:
            "Burana Tower is all that’s left of the city of Balasagun, which was the capital of the Karakhanid Empire in the 9th century. Around the base of the tower are several excavation sites that show brick foundations of buildings, though archaeologists have shown that the town actually extended for quite a bit further (shops, bazaars, baths, and houses have all been discovered).",
          isShown: false,
        },
        {
          url: require("../assets/place/tashrabat.jpg"),
          descr:
            "Tash Rabat is a well preserved stone caravanserai sitting at the height of 3200 meters.",
          title: "Tash Rabat",
          showDescrInfo:
            "This is a carefully restored stone building that once housed an inn on the Great Silk Road. Its date of origin is strictly unknown - but there is archaeological evidence to suggest that the site was occupied in the 10th century. Set some 15 km up a small, beautiful valley in the foothills of the Tian Shan, embedded against the hillside. There is evidence that it was a place of both rest and worship and would have served to protect caravans to and from China from both the ravages of the weather and of bandits - from before the time of either Tamerlane or Genghis Khan. ",
          isShown: false,
        },
        {
          url: require("../assets/place/Museum.jpg"),
          descr:
            "The State History Museum, formerly known as the Lenin Museum, is located on Ala-Too Square.",
          title: "State History Museum",
          showDescrInfo: `Visitors can view exhibits such as samples of rock paintings, household items from the Bronze Age, jewelry from nomads dating from the 1st to the 5th century CE, a collection of Turkic kurgan stelae, stones from Talas with runic inscriptions, as well as a great number of ancient coins.

The museum has an extensive collection of ethnographic objects from the late 19th and early 20th centuries, including felt, leather, wool, woodworks, knitting, embroidery, clothing, jewelry, and horse harnesses and gear of artistic merit.`,
          isShown: false,
        },
        {
          url: require("../assets/place/sulaiman.jpg"),
          descr:
            'Osh is another ancient city of Central Asia, the main city of modern Kyrgyzstan"s south.',
          title: "Sulaiman Too",
          showDescrInfo: `Sulaiman-Too is the first object in Kyrgyzstan which have become a UNESCO World Heritage Site. It is located in the center of Osh city, and rises to 175 m above it. Since ancient times, Sulaiman-Too has been a sacred place for Muslims, and now it also attracts a lot of pilgrims.

Currently, the mountain itself and the works involved, many of which were built several centuries ago, are the part of the historical and architectural complex. They include remains of the medieval bath in the eastern part of the mountain (11th-14th centuries), the mosque Takht-i Suleiman on the top of the mountain (16th century), the mosque Rawat-Abdullakhan (16th century) and the mausoleum of Asaf-ibn-Burhia in the south-east of the mountain (18th century).`,
          isShown: false,
        },
      ],
      currentIndex: 0,
      count: 0,
    };
  },
  computed: {
    currentImg: function () {
      return this.foodGallery[
            Math.abs(this.currentIndex) % this.foodGallery.length
          ];
    },
  },
  methods: {
    showImg(img, index) {
      img.isShown = !img.isShown;
      this.currentIndex = index;
    },
    nextImg() {
      this.currentIndex += 1;
    },
    prevImg() {
      this.currentIndex -= 1;
    },
  },
};
</script>

<style scoped>
.info {
  padding: 30px 60px;
  line-height: 29px;
  margin: 10px auto;
}
.title {
  margin-top: 20px;
  font-weight: 700;
  text-align: center;
  padding: 29px;
  background: url("../assets/place/place2.jpg") no-repeat center;
  font-size: 41px;
  min-height: 566px;
  padding-top: 25px;
  background-size: cover;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_title {
  background: dimgrey;
  padding: 5px;
  border-radius: 5px;
  font-size: 18px;
}
.place_title {
  text-align: center;
  padding-top: 30px;
  margin-bottom: -90px;
}
.next_btn {
  position: absolute;
  top: 80%;
  right: 22px;
  border: none;
}
.prev_btn:focus,
.next_btn:focus {
  outline: none;
}
.slider_img_descr {
  bottom: -191px;
  font-size: 18px;
  line-height: 33px;
  padding: 23px 142px;
  opacity: 0.9;
  z-index: 10;
  position: absolute;
  border-radius: 5px;
  width: 87%;
  margin: 0 auto;
  left: 0;
  right: 0;
}
.prev_btn {
  position: absolute;
  top: 80%;
  left: 22px;
  border: none;
}
.openedImg {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background: #282828; /* Fallback color */
}
.close_btn {
  position: absolute;
  right: 135px;
  top: 32px;
  border: none;
}
.close_btn:hover {
  opacity: 0.7;
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
        /* opacity: 1; fadeIn */
    }
    .fadeIn-leave-active{
     /*    transition: opacity 1s;
        opacity: 0; */
    }
.images_ {
  width: 25%;
  position: relative;
}
.slider-images:hover {
  cursor: pointer;
  opacity: 0.7;
}

.slider-images {
  width: 100%;
  min-height: 200px;
  position: relative;
}
#silentbox-overlay__description {
  left: -133px;
  margin-top: -281px;
  position: relative;
  width: 130%;
  z-index: 100;
  right: 25px;
}

.openedOne {
  display: block;
  width: 70%;
  margin: 0 auto;
  padding: 86px 12px;
  margin-top: 30px;
}
.closedOne {
  width: 25%;
}
.staticImg {
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