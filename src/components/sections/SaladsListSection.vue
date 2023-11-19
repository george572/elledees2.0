<script setup lang='ts'>
import { ref } from "vue";
import amoremioImg from "../../assets/images/amoremio.png";
import avecesarImg from "../../assets/images/avecesar.png";
import bigcrispyImg from "../../assets/images/bigcrispy.png";
import bufallobillImg from "../../assets/images/bufallobill.png";
import frenchrivImg from "../../assets/images/frenchriv.png";
import habibiImg from "../../assets/images/habibi.png";
import mexicandreamImg from "../../assets/images/mexicandream.png";
import supersourImg from "../../assets/images/supersour.png";
import veggiemadnessImg from "../../assets/images/veggiemadness.png";
import wildstrawberryImg from "../../assets/images/wildstrawberry.png";
import SaladHover from "../SaladHover.vue";
import AppButton from "../AppButton.vue";

const amoremio = amoremioImg;
const avecesar = avecesarImg;
const bigcrispy = bigcrispyImg;
const bufallobill = bufallobillImg;
const frenchriv = frenchrivImg;
const habibi = habibiImg;
const mexicandream = mexicandreamImg;
const supersour = supersourImg;
const veggiemadness = veggiemadnessImg;
const wildstrawberry = wildstrawberryImg;

const saladsData = ref([
  {
    name : "Amore Mio", 
    sauceName: "Sauce pesto",
    ingredients: "Penne, concombres, tomates cerises, féta, oignons rouges, olives noires, pignons, roquette, mesclun",
    img: amoremio,
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red'
  },
  {
    name: "Big Crispy",
    sauceName: "Sauce miel-moutarde",
    ingredients: "Quinoa, avocat, poitrine de poulet rôtie, tomates cerises, oignons frits, pousses d'épinards, batavia",
    img: bigcrispy,
    showHover: false,
    customClass: 'bg-ed-pink text-ed-yellow'

  } ,
  {
    name: "French Riviera",
    sauceName: "Vinaigrette huile d'olive-citron",
    ingredients: "Saumon mi-cuit, riz, oeuf dur, mozzarella, tomates cerises, olives noires, cébettes, pignons, mesclun, batas",
    img: frenchriv,
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow'

  },
  {
    name: "Buffalo Bill",
    sauceName: "Sauce Ranch",
    ingredients: "Chips de bacon, œuf dur, bleu, tomates cerises, avocat, oignons rouges, pitas croustillantes, batavia",
    img: bufallobill,
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red'

  },
  {
    name: "Mexican Dream",
    sauceName: "Sauce coriandre-cumin",
    ingredients: "Poitrine de poulet rôtie, parmesan, avocat, chips de bacon, tomates cerises, pitas croustillantes, cébettes, batavia",
    img: mexicandream,
    showHover: false,
    customClass: 'bg-ed-pink text-ed-yellow'
    
  },
  {
    name: "Habibi Yallah",
    sauceName: "Sauce curcuma-tahini",
    ingredients: "Patates douces rôties, féta, tomates cerises, boulgour, pois chiches, oignons rouges, concombres, pitas croustillantes, menthe, persil, mesclun, batavia",
    img: habibi,
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow'
  },
  {
    name: "Wild Strawberry",
    sauceName: "Vinaigrette balsamique",
    ingredients: "Fraises, avocat, carottes râpées, concombre, parmesan, pitas croustillantes, mesclun, batavia",
    img: wildstrawberry,
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow'

  },
  {
    name: "Veggie Madness",
    sauceName: "Sauce Tamari",
    ingredients: "Tofu mariné rôti, concombre, carottes râpées, brocoli cru, chou rouge, oignons rouges, graines de sésame, mesclun, batavia",
    img: veggiemadness,
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red'
  },
  {
    name: "Super Sour",
    sauceName: "Sauce miel-moutarde",
    ingredients: "Avocat, brocoli cru, carottes râpées, parmesan, canneberges séchées, pitas croustillantes, graines de tournesol, roquette, batavia",
    img: supersour,
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red'
  },
  {
    name: "Ave Cesar",
    sauceName: "Sauce César",
    ingredients: "Poitrine de poulet rôtie, parmesan, avocat, chips de bacon, tomates cerises, pitas croustillantes, cébettes, batavia",
    img: avecesar,
    showHover: false,
    customClass: 'bg-ed-pink text-ed-yellow'
  }
]);


</script>

<template>
  <div class="salad-wrapper py-40 pb-[500px] flex flex-wrap flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-center px-10 box-content">
    <div
      v-for="salad in saladsData"
      :key="salad.name"
      class="salad-item relative"
      @mouseenter="salad.showHover = true"
      @mouseleave="salad.showHover = false"
    >
      <img
        :src="salad.img"
        class="salad-img h-full lg:min-h-[581px] lg:max-h-[581px] object-cover w-full"
      >
      <Transition>
        <SaladHover
          v-if="salad.showHover"
          :data="salad"
        />
      </Transition>
    </div>
    <AppButton :additional-styles="'bg-white text-ed-red mt-20'">
      Découvrir le menu
    </AppButton>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.salad-item {
  max-width: 44%;
  width: 100%;
}
.salad-item:nth-child(2), 
.salad-item:nth-child(3), 
.salad-item:nth-child(6), 
.salad-item:nth-child(7), 
.salad-item:nth-child(9) {
    max-width: 55%;
    width: 100%;
}
@media only screen and (max-width: 1024px) {
  .salad-item {
    min-width: 100%;
  }
}
</style>