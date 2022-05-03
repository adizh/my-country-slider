<template>
  <div>
    <h3 class="sub_title">Music and national instruments</h3>
    <img
      style="width: 80%; object-fit: contain; margin: 10px auto; display: block"
      src="../assets/trad/music.jpg"
      alt="national music"
    />
    <div class="info-section animate__animated animate__backInDown">
      Since ancient time music played an important role in the life of Kyrgyz
      people. Any holiday in the village did not do without music, and young and
      old people gathered to listen to wonderful tunes of master musicians.
      Kyrgyz people, like any nation, have their traditional musical
      instruments, reflecting the unique national character.
    </div>
    <div
      class="gallery-slider"
      style="display: flex; flex-wrap: wrap; justify-content: center; gap: 13px"
    >
      <div class="images_" v-for="(img, index) in musicGallery" :key="index">
        <img
          @click="showImg(img, index)"
          class="slider-images"
          :src="img.url"
          alt="someht"
        />
<transition name="fadeIn">
        <div
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
              class="bi bi-x-lg close_slider"
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
          <h3 class="food_title">{{ currentMusic.title }}</h3>
          <img
            :class="img.isShown ? 'openedOne' : 'closedOne'"
            :src="currentMusic.url"
            alt=""
          />
          <div  :class='currentMusic.descr.length <=66 ? "descr_": isOpen && smallDevices ? "slider_img_descr_open":"slider_img_descr"' >
            <p >{{ currentMusic.descr }}</p>
            <p v-show="isOpen">{{ currentMusic.showDescrInfo }}</p>
            <button
              v-show="currentMusic.showDescrInfo.length > 1"
              @click="isOpen = !isOpen"
              class="btn btn-primary"
            >
              {{ isOpen ? "Hide" : "Show" }}
            </button>
          </div>
          <button @keyup.right="nextImg" @click="nextImg" class="next_btn">
            <svg
            id='btns'
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
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
                id='btn'
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
  name: "Music",
  data() {
    return {
      isOpen: false,
      musicGallery: [
        {
          url: require("../assets/trad/komuz.jpg"),
          descr:
            "Comuz - crafted from a single piece of wood, with three strings that are played by plucking. ",
          title: "Kyrgyz stringed instruments",
          showDescrInfo:
            " A special feature of the comuz is the ability to tune the strings in variety of ways to suit the music being played. To play the comuz, the performer holds it in a horizontal position while seated or - more rarely - standing. The comuz is a standard member of any Kyrgyz folk music group. According to legend, the first comuz was made by the hunter, Kambar. He himself was a master performer (komuzchi), and Kambarkan became one of the distinctive creative genres of Kyrgyz folk music.",
          isShown: false,
        },

        {
          url: require("../assets/trad/kyyak.jpg"),
          descr:
            "Kyyak (kyl kyyak) - a string and bow instrument 60-70 cm in length",
          title: "Kyyak",
          showDescrInfo: `The kyyak is played by a master performer (kyyakchi) in a seated position 
        with the instrument held vertically, while the stretched hair on the bow is drawn gently 
        across the strings. Given two options for tuning, the upper string is melodious while the 
         lower string is resonant. The traditional kyyak is an instrument transposing one octave down. 
         The majority of the traditional compositions for the kyyak are very lyrical and heartfelt, 
         which is completely in accordance with the musical nature of the instrument.`,
          isShown: false,
        },
        {
          url: require("../assets/trad/temirkomuz.jpg"),
          descr:
            `The temir komuz, or jaw harp, is another popular instrument in Kyrgyzstan. Temir comuz is found across the Turkic world, it is unusually popular in Kyrgyzstan, 
            and musicians can reach virtuosic levels. `,
          title: "Temir komuz",
          showDescrInfo:
            '',
          isShown: false,
        },
        {
          url: require("../assets/trad/choor.jpg"),
          descr:
            "Chopo Choor – choor is made of clay. Generally it is spread in the south of Kyrgyzstan.",
          title: "Chopo Choor",

          showDescrInfo: "",
          isShown: false,
        },

        {
          url: require("../assets/trad/sybyzgy.jpg"),
          descr:
            "Sybyzgy is made from the wood of apricot, barbery, reed or copper.",
          title: "Sybyzgy",
          showDescrInfo: "",
          isShown: false,
        },
        {
          url: require("../assets/trad/Surnay.jpg"),
          descr:
            "Surnay is a tube-like instrument with a double reed. It sounds harsh with nasal tone. Previously it was used as a signaling instrument. At present, it almost ceased to exist.",
          title: "Surnay",
          showDescrInfo: "",
          isShown: false,
        },
      ],
      currentIndex: 0,
    };
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
  computed: {
    currentMusic: function () {
      return this.musicGallery[
        Math.abs(this.currentIndex) % this.musicGallery.length
      ];
    },
      smallDevices(){
      return window.innerWidth > 250 && window.innerWidth < 880
    }
  },
};
</script>

<style scoped>
.descr_{
    bottom: -40px;
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
.title {
  margin-top: 20px;
  font-weight: 700;
  text-align: center;
  padding: 29px;
  background: url("../assets/trad/traditions.jpg") no-repeat center;
  font-size: 41px;
  min-height: 566px;
  padding-top: 25px;
  background-size: contain;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
 .slider-images:hover{
   opacity: .6;
   cursor: pointer;
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
.animate__animated {
  --animate-duration: 6s;
  --animate-delay: 7.9s;
}
.animate__backInDown {
  --animate-duration: 5s;
  --animate-delay: 7.9s;
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
.food_title {
  padding: -15px 0 0;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 53px;
  font-size: 25px;
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
.info-section {
  padding: 20px 50px;
  width: 77%;
  line-height: 29px;
  margin: 10px auto;
}
.images_ {
  width: 25%;
  position: relative;
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
.sub_title {
  text-align: center;
  margin: 70px 10px 30px;
}
.info-section {
  padding: 30px 60px;
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



@media screen and (max-width:480px) and (min-width: 250px){
  .info-section{
    padding: 5px 12px;
    width: 100%;
    text-align: center;
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
    .close_slider{
      width: 35px;
      height: 28px;
    }
    .slider_img_descr{
       bottom: 183px;
    width: 100%;
    padding: 0px 23px;
    text-align: center;
    }
    .slider_img_descr_open{
        bottom: -205px;
          font-size: 18px;
    line-height: 33px;
    opacity: .9;
    z-index: 10;
    position: absolute;
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
    .descr_{
    width: 100%;
    bottom: 156px;
    padding: 0px 40px;
    text-align: center;
    }
}
</style>