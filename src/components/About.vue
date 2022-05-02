<template>
  <div>
    <img src="../assets/mainImg.jpg" class="mainImg" alt="kyrgyzstan" />
    <div class="animate__animated animate__zoomIn info">
      Kyrgyzstan is a country of Central Asia. It is bounded by Kazakhstan on
      the northwest and north, by China on the east and south, and by Tajikistan
      and Uzbekistan on the south and west. Most of Kyrgyzstan’s borders run
      along mountain crests. The capital is Bishkek - it's biggest city. Kyrgyz
      folk is one of the ancient folks: the first mention of Kyrgyz is appears
      in 10th century BC in chinese chronicles. Kyrgyz is believed to have been
      derived from the Turkic word for "We are forty", about the forty clans of
      Manas, a legendary hero who united forty regional clans. Literally, Kyrgyz
      means "We are forty".
      <img
        style="width: 50%; display: block; margin: 20px auto"
        src="../assets/mapKg.webp"
        alt="map of the KG"
      />
      <p>
        The history of the Kyrgyz in what is now Kyrgyzstan dates at least to
        the 17th century. Kyrgyzstan, known under Russian and Soviet rule as
        Kirgiziya, was conquered by tsarist Russian forces in the 19th century.
        Formerly a constituent (union) republic of the U.S.S.R., Kyrgyzstan
        declared its independence on August 31, 1991. The Kyrgyz language is
        closely related to other Turkic languages. Russian remains spoken as an
        official language. Ninety percent of Kyrgyzstan's population are Muslim,
        with the majority of its population following Sunni Islam. In addition
        to its Turko-Mongol origins, Kyrgyz culture bears elements of Slavic
        tradition and Russian influence.
      </p>

      <div></div>

      <div
        class="carousel slide animate__animated animate__zoomInLeft"
        id="carouselExampleIndicators"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block slider-img"
              src="../assets/mainPic.jpg"
              alt="First slide"
            />
            <div
              class="carousel-caption  d-md-block caption-blocks"
              style="margin: -18px auto"
            >
              <p class="smallText">
                Kyrgyzstan is a mountainous country in Central Asia.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img"
              style="width: 95%; object-fit: contain"
              src="../../public/secondImg.jpg"
              alt="Second slide"
            />
            <div
              class="carousel-caption  d-md-block caption-blocks"
              style="margin: -28px auto"
            >
              <p>
                Although geographically isolated by its highly mountainous
                terrain, Kyrgyzstan has been at the crossroads of several great
                civilizations as part of the Silk Road along with other
                commercial routes
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 slider-img"
              src="../assets/thirdImg.jpg"
              alt="Third slide"
            />
            <div class="carousel-caption d-md-block caption-blocks">
              <p class="smallText">Jailoo in the summer</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img "
              style="width: 87%"
              src="../assets/col13.jpg"
              alt=" mountain with horses"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img "
             
        
              src="../assets/col12.jpg"
              alt="flowers on the mountain"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img"
              id='fourth'
              src="../assets/col14.jpg"
              alt="lake and a mountain"
            />
          </div>

          <div class="carousel-item">
            <img
              class="d-block w-100 slider-img"
              src="../assets/yourtKG.jpg"
              alt="Fourth slide"
            />
            <div
              class="carousel-caption     d-md-block caption-blocks"
              style="margin: -18px auto"
            >
              <p class='bigText'>Yurts are traditional Kyrgyz tents.</p>
              <p v-if="isTextShown">
                They are one of the most essential parts of Kyrgyz culture, and
                are more than just houses.Kyrgyz yurts are made of a cupola
                birch poles tied to a latticework that forms the vertical walls.
                The outside is made of felt and wool, which is water repellent
                and warm, and can be easily patched as needed. The top of the
                yurt is a wooden circle, called a tunduk, which forms one of the
                most essential symbols of family. A small flap
                of felt covers the tunduk, which can be opened when weather is
                nice to let in light and fresh air, and closed when the weather
                is cold and wet.
              </p>
              <button
                class="btn btn-primary"
                @click="isTextShown = !isTextShown"
                style="display: block;
    margin: -8px auto;"
              >
                {{isTextShown ? 'Hide' : 'Show'}}
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img"
              stylea="width: 84%"
              src="../assets/kyrgyzskojYurty.jpg"
              alt="Fifth slide"
            />
            <div
              class="caption-blocks carousel-caption   d-md-block bigCaption"
            
            >
              <p  class='bigText' style="margin-top: -16px">
                They represent the family, the earth, and the universe,
              </p>
              <p v-show="isTextShown">
                and cover everything from birth to death. Yurts hold much of
                Kyrgyz culture, from important rituals and ceremonies, to
                craftsmanship and traditional artistry.Traditionally, the right
                side was reserved for women, and would hold dishes and cooking
                implements and items for sewing and knitting. The left side, the
                man’s side, would hold harnesses and hunting knives, and
                everything necessary for herding and hunting.
              </p>
              <button
                @click="isTextShown = !isTextShown"
                class="showBtn btn btn-primary"
              >
                {{ isTextShown ? "Hide" : "Show" }}
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 slider-img"
              src="../assets/mainPic2.jpg"
              alt="Fourth slide"
            />
            <div
              class="carousel-caption    d-md-block caption-blocks bigCaption"
          
            >
              <p  class='smallText' >
                Although nowadays majority of population don't live in yurts, it
                still remains the house for shepherds. In spring, near April or
                March with livestock, herds of sheep,horses,cows and other
                animals they come out to jailoo, where the rest of the spring
                and summer live like true nomads.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 slider-img"
              src="../assets/nationalClothes.jpg"
              alt="Sixth slide"
            />
            <div
              class="caption-blocks carousel-caption  bigCaption  d-md-block"
            
            >
              <p  class='bigText' >
                The traditional clothing of the Kyrgyz is an important component
                of the culture of the people as a whole.
              </p>
              <p v-show="isTextShown">
                It was inherent in peculiar features typical of the clothes of
                nomads, which finds an explanation for the whole historically
                established way of life associated with nomadic cattle breeding.
                Climatic conditions also had a great influence on clothes, the
                Kyrgyz prevailed a warm look of clothing on a cotton basis or
                from the fur of wild animals. Since the main trade lines of the
                Great Silk Road passed through the lands of the Kyrgyz tribes
                and Central Asia, Kyrgyz involved in international trade and
                were well aware of the textile production of neighboring
                peoples.
              </p>
              <button
                @click="isTextShown = !isTextShown"
                class="showBtn btn btn-primary"
              >
                {{ isTextShown ? "Hide" : "Show" }}
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 slider-img"
              src="../assets/women.jpg"
              alt="Sixth slide"
            />
            <div
              class="caption-blocks carousel-caption  bigCaption   d-md-block"
          
            >
              <p  class='bigText' >National clothes of women.</p>

              <p v-show="isTextShown">
                They might vary depending on the age of a woman. Women’s
                clothing consisted of underwear and outerwear. The main dressing
                is- shirt – koinok and harem pants. The headdresses of the women
                usually decorated with feathers of birds, various ornaments sewn
                to them: silver, pearls, coral, etc
              </p>
              <button
                @click="isTextShown = !isTextShown"
                class="showBtn btn btn-primary"
              >
                {{ isTextShown ? "Hide" : "Show" }}
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img kyrgyzGirl"
              src="../assets/kgGirlClothes.jpg"
              alt="Sixth slide"
              
            
            />
            <div
              class="caption-blocks carousel-caption  bigCaption   d-md-block"
           
            >
              <p  class='bigText' >Young girls wear a skullcap – topu and a fur hat – tebetei.</p>
              <p v-show="isTextShown">
                A short or long sleeveless jacket – chyptama, a camisole with
                short sleeves – kemelsel, a quilted robe – chepken, chapan – put
                on over a shirt dress. The embroidery on the chest of women’s
                shirts or a bib put on.
              </p>
              <button
                @click="isTextShown = !isTextShown"
                class="showBtn btn btn-primary"
              >
                {{ isTextShown ? "Hide" : "Show" }}
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img kyrgyzGirl1"
              src="../assets/collazh5.jpg"
              alt="National clothes"
             
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img kyrgyzGirl2"
           
              src="../assets/mainWomenCLothes.jpg"
              alt="Sixth slide"
            />
            <div
              class="caption-blocks carousel-caption bigCaption    d-md-block"
           
            >
              <p  class='bigText' >
                Unique elements of women’s clothing were a swing skirt –
                beldemchi,
              </p>
              <p v-show="isTextShown">
                a headdress – a turban of a married woman – elechek. Women used
                to have long velvet stripes in the form of tubes, in which
                braids were hidden – chachkap. Various decorations were sewn on
                them. Depending on age categories, women wore various silver
                jewelry and an amulet: these are oblique jewelry – chach uchtuk.
               The women’s jewelry made by them of high
                artistic dignity: bileric-bracelets, shakek-rings,
                soyko-earrings, bow and head ornaments made by craftsmen are
                able to satisfy the most demanding tastes of even modern
                fashionistas.
              </p>
              <button @click="isTextShown = !isTextShown" class="showBtn btn btn-primary">
                {{ isTextShown ? "Hide" : "Show" }}
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img kyrgyzGirl2"
              
              src="https://sputnik.kg/images/104711/83/1047118331.jpg"
              alt="Sixth slide"
            />
            <div
              class="caption-blocks carousel-caption     d-md-block"
              style="margin: -18px auto"
            >
              <p  id='smallCaption' class='smallText' >An elderly women's national clothes</p>

            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img collazhes"
             
              src="../assets/collazh2.jpg"
              alt="Sixth slide"
            />
            <div
              class="caption-blocks carousel-caption  childrenCaption   d-md-block"
           
            >
              <p id='smallCaption1'  class='smallText' >Children's national clothes</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img collazhes"
             
              src="../assets/collazh3.jpg"
              alt="Sixth slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img collazhes2"
          
              src="../assets/collazh4.jpg"
              alt="Sixth slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block slider-img collazhes2"
           
              src="../assets/Fotoram.io.jpg"
              alt="Sixth slide"
            />
          </div>
 <div class="carousel-item">
            <img
              class="d-block slider-img collazhes"
       
              src="../assets/gerb.png"
              alt="Sixth slide"
            />
            <div
              class="caption-blocks carousel-caption bigCaption    d-md-block"
             
            >
              <p  class='bigText' >
                National Emblem of Kyrgyzstan
              </p>
              <p v-show="isTextShown">
              National Emblem of Kyrgyzstan was approved on January,  14 1994 and ever since it is an official national symbol of the republic. The coat of arms represents an image of a falcon, Ak-Shumkar, "Manas with extended wings, which symbolizes the freedom of the state, the generosity and vigilance, the height of thoughts of the Kyrgyz people living in the country of mountains.

In addition, Issyk-Kul Lake, the most precious treasure of Kyrgyzstan is depicted on the flag, surrounded by high rocky ridges of the Ala-Too. Water smooth surface of the lake symbolises beauty of nature, the source of life and energy. The mountains, illuminated by the sun, resemble Kyrgyz national hat “kalpak”.
              </p>
              <button @click="isTextShown = !isTextShown" class="showBtn btn btn-primary">
                {{ isTextShown ? "Hide" : "Show" }}
              </button>
            </div>
          </div>
 <div class="carousel-item">
            <img
              class="d-block slider-img flagKg"
          
              src="../assets/flag.jpg"
              alt="Sixth slide"
            />
            <div
              class="caption-blocks carousel-caption   bigCaption  d-md-block"
            
            >
              <p  class='bigText' >
                National Flag of Kyrgyzstan
              </p>
              <p v-show="isTextShown">
            The red colour of the banner symbolizes valour and courage. This colour was also on the banner of Manas, the hero of the famous Kyrgyz epic. In addition, the word "Kyrgyz" corresponds to the word "red", as a red colour was traditionally venerated and considered a national colour from times immemorial. The sun, bathing in its rays is a symbol of light, eternity of existence, peace and wealth. Image of the sun resembles a roofing of Kirghiz nomads` typical yurt. This is a symbol of warmth and hospitality, unity of time and space, the source of life and solidarity. 40 rays signify forty Kyrgyz tribes.

Tunduk embodies a paternal house, which also to wider extent represents a world as the universe and cohesion of the peoples living in the republic.
              </p>
              <button @click="isTextShown = !isTextShown" class="showBtn btn btn-primary">
                {{ isTextShown ? "Hide" : "Show" }}
              </button>
            </div>
          </div>
          
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div style="margin: 30px auto">
      <router-link
        @click="window.scrollTo(0, 0)"
        style="text-decoration: none"
        to="/places"
      >
        <div class="crafts-link">
          <p class="craft_text"></p>
          <span class="text_">Sightseeings of Kyrgyzstan</span>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
import "vue2-animate/dist/vue2-animate.min.css";

export default {
  name: "About",
  data() {
    return {
      isTextShown: false,
      show:false
    };
  },
  components: {
    
  },
  mounted(){

  }
 
};
</script>

<style scoped>

.crafts-link {
  width: 45%;
  position: relative;
  height: 300px;
  margin: 10px 20px;
  left: 0;
  right: 0;
  top: 40px;
  margin: 0 auto;
}
.craft_text {
  width: 100%;
  height: 100%;
  /*background-color: black; */
  background: url("../assets/crafts/crafts.jpg");

  background-position: center;
  background-size: cover;
  border-radius: 15px;
  transition: all 0.9s;
  font-weight: 800;
  font-size: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fruit-list-move {
  transition: transform 1s;
}
 .fade-enter{
        opacity: 0 15s;
    }
    .fade-enter-active{
        transition: opacity 15s;
    }
    .fade-leave{
       
    }
    .fade-leave-active{
        transition: opacity 13s;
        opacity: 0;
    }
.craft_text {
  width: 100%;
  height: 100%;
  background: url("../assets/place/place.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  transition: all 0.9s;
  font-weight: 800;
  font-size: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.crafts-link:hover .craft_text,
.crafts-link:focus .craft_text {
  transform: scale(1.2);
  display: block;
  font-weight: 800;
  font-size: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
#fourth{
  width: 87%;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.text_ {
  top: 48%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  text-align: center;
  border: 1px solid white;
  border-radius: 12px;
  font-size: 20px;
  padding: 8px;
  width: 80%;
}
.crafts-link:hover .text_ {
  position: absolute;
  z-index: 10;
  color: white;
}

.text_ {
  display: block;
  background: none;
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

.crafts-link:hover .craft_text:before,
.crafts-link:focus .craft_text:before {
  display: block;
}
.crafts-link:focus .craft_text {
  opacity: 0.6;
}
.title {
  text-align: center;
  padding: 29px;
}
.slider-img {
  height: 524px;
  width: 80%;
  display: block;
  margin: 0 auto;
}
.caption-blocks {
  left: 6px;
  width: 100%;
  min-height: 60px;
  margin: -16px auto;
}
.carousel-caption {
  margin: -16px auto;
}
.showBtn {
  border: none;
  display: block;
  margin: -14px auto;
}
.smallText {
  height: 0;
}
.showBtn:hover {
  opacity: 0.83;
}
.carousel-caption {
  width: 50%;
}
.slideImages {
  width: 80%;
  margin: 0 auto;
  display: block;
}
.firstImg {
  object-fit: cover;
  width: 80%;
}
.animate__animated.animate__zoomIn {
  --animate-duration: 6s;
  --animate-delay: 7.9s;
}
.animate__zoomInLeft {
  --animate-duration: 7s;
  --animate-delay: 8.4s;
}
.mainImg {
  width: 94%;
  border-radius: 8px;
  display: block;
  margin: 20px auto;
  object-fit: contain;
}
.carousel-caption {
  width: 100%;
  margin: 10px auto;
  color: red;
}
#silentbox-overlay__description {
  color: red;
}
.info {
  margin: 10px 20px;
  padding: 10px;
  line-height: 26px;
  text-align: center;
}
.bigCaption{
  margin: -18px auto
}
.kyrgyzGirl{
  width:43%;
}
.kyrgyzGirl1{
  width:79%;
}
.kyrgyzGirl2{
  width:52%;
}
.collazhes{
  width: 50%
}
.collazhes2{
  width:82%
}
.flagKg{
  width: 72%;
}
.childrenCaption{
  margin: -58px auto;
}






@media screen and (max-width: 480px) and (min-width: 250px){
.slider-img{
  width: 100%;
  object-fit:contain;
}
/* #fourth{
  object-fit:cover;
} */
.smallText{
  margin-top: -66px;
}
.bigText{
  margin-top: -66px;
}
.bigCaption{
  margin: -10px auto 0;
}
#smallCaption{
  margin-top: -117px;
}
#smallCaption1{
  margin-top: -81px;
}
.crafts-link{
  width: 83%;
}
}


@media screen and  (max-width: 780px) and (min-width: 481px){
.crafts-link{
  width:60%
}    
}

</style>