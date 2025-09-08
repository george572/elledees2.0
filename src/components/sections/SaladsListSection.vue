<script setup>
import { ref, inject } from "vue";
import SaladHover from "../SaladHover.vue";
import { useStore } from '../../stores';

const images = inject('images');
const saladsData = ref([
  {
    name: "Ave Cesar",
    translationName : 'aveCesar',
    sauceName: "Sauce César",
    sauceCalories: null,
    ingredients: "",
    img: 'avecesarImg',
    showHover: false,
    customClass: 'bg-ed-pink text-ed-yellow',
    nutritionData : {
      calories: "868",
      proteines: "59G",
      glucides: "33G",
      lipides: "65G"
    }
  },
  {
    name: "Habibi Yallah",
    translationName : 'habibi',
    sauceName: "Sauce curcuma-tahini",
    sauceCalories: null,
    ingredients: "Patates douces rôties, féta, tomates cerises, boulgour, pois chiches, oignons rouges, concombres, pitas croustillantes, menthe, persil, mesclun, batavia",
    img: 'habibiImg',
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow',
    nutritionData : {
      calories: "527",
      proteines: "21G",
      glucides: "83G",
      lipides: "12G"
    }
  },
  {
    name: "Buffalo Bill",
    translationName : 'buffaloBill',
    sauceName: "Sauce Ranch",
    sauceCalories: "240",
    ingredients: "Chips de bacon, œuf dur, bleu, tomates cerises, avocat, oignons rouges, pitas croustillantes, batavia",
    img: 'bufallobillImg',
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red',
    nutritionData : {
      calories: "541",
      proteines: "35G",
      glucides: "36G",
      lipides: "40G"
    }

  },
  {
    name: "Mexican Dream",
    translationName : 'mexicanDream',
    sauceName: "Sauce coriandre-cumin",
    sauceCalories: "230",
    ingredients: "Poitrine de poulet rôtie, parmesan, avocat, chips de bacon, tomates cerises, pitas croustillantes, cébettes, batavia",
    img: 'mexicandreamImg',
    showHover: false,
    customClass: 'bg-ed-pink text-ed-yellow',
    nutritionData : {
      calories: "624",
      proteines: "36G",
      glucides: "65G",
      lipides: "33G"
    }
  },
  {
    name : "Amore Mio",
    translationName : 'amoreMio',
    sauceName: "Sauce pesto",
    sauceCalories: "240",
    ingredients: "Penne, concombres, tomates cerises, féta, oignons rouges, olives noires, pignons, roquette, mesclun",
    img: 'amoremioImg',
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red',
    nutritionData : {
      calories: "446",
      proteines: "17G",
      glucides: "59G",
      lipides: "18g"
    }
  },
  {
    name: "Big Crispy",
    translationName : 'bigCrispy',
    sauceName: "Sauce miel-moutarde",
    sauceCalories: "240",
    ingredients: "Quinoa, avocat, poitrine de poulet rôtie, tomates cerises, oignons frits, pousses d'épinards, batavia",
    img: 'bigcrispyImg',
    showHover: false,
    customClass: 'bg-ed-pink text-ed-yellow',
    nutritionData : {
      calories: "608",
      proteines: "40G",
      glucides: "50G",
      lipides: "36g"
    }

  } ,
  {
    name: "Super Sour",
    translationName : 'superSour',
    sauceName: "Sauce miel-moutarde",
    sauceCalories: "240",
    ingredients: "Avocat, brocoli cru, carottes râpées, parmesan, canneberges séchées, pitas croustillantes, graines de tournesol, roquette, batavia",
    img: 'supersourImg',
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red',
    nutritionData : {
      calories: "514",
      proteines: "20G",
      glucides: "58G",
      lipides: "32G"
    }
  },
  {
    name: "French Riviera",
    translationName : 'frenchRiviera',
    sauceName: "Vinaigrette huile d'olive-citron",
    sauceCalories: "180",
    ingredients: "Saumon mi-cuit, riz, oeuf dur, mozzarella, tomates cerises, olives noires, cébettes, pignons, mesclun, batas",
    img: 'frenchrivImg',
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow',
    nutritionData : {
      calories: "615",
      proteines: "39G",
      glucides: "41G",
      lipides: "35g"
    }

  },
  {
    name: "Veggie Madness",
    translationName : 'veggieMadness',
    sauceName: "Sauce Tamari",
    sauceCalories: "280",
    ingredients: "Tofu mariné rôti, concombre, carottes râpées, brocoli cru, chou rouge, oignons rouges, graines de sésame, mesclun, batavia",
    img: 'veggiemadnessImg',
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red',
    nutritionData : {
      calories: "249",
      proteines: "18G",
      glucides: "21G",
      lipides: "12g"
    }
  },
  {
    name: "Wild Strawberry",
    translationName : 'wildStrawberry',
    sauceName: "Vinaigrette balsamique",
    sauceCalories: "315",
    ingredients: "Fraises, avocat, carottes râpées, concombre, parmesan, pitas croustillantes, mesclun, batavia",
    img: 'wildstrawberryImg',
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow',
    nutritionData : {
      calories: "407",
      proteines: "19G",
      glucides: "44G",
      lipides: "27G"
    },
    season: "Summer"

  },
  {
    name: "Tangerine Crunch",
    translationName : 'tangerineCrunch',
    sauceName: "Vinaigrette sucrée au sésame",
    sauceCalories: "268",
    ingredients: "clémentine, nouilles croustillantes, carottes râpées, avocat, tomates cerises, graines de sésame, mesclun, batavia",
    img: 'tangerineImg',
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow',
    nutritionData : {
      calories: "329",
      proteines: "9G",
      glucides: "38G",
      lipides: "26G"
    },
  },
  {
    name: "Magic Mike",
    translationName : 'magicMike',
    sauceName: "Sauce déesse verte",
    sauceCalories: "268",
    ingredients: "Poulet miel-soja, noix caramélisées, tomates cerises, chèvre, patates douces rôties, oignons pickels, roquette, batavia ",
    img: 'magicmikeImg',
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow',
    nutritionData : {
      calories: "499",
      proteines: "37G",
      glucides: "31G",
      lipides: "26G"
    },
  },
  {
    name: "Sea Satin",
    translationName : 'seaSatin',
    sauceName: "Sauce tamari",
    sauceCalories: "268",
    ingredients: "Poulet miel-soja, noix caramélisées, tomates cerises, chèvre, patates douces rôties, oignons pickels, roquette, batavia ",
    img: 'seaSatin',
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow',
    nutritionData : {
      calories: "600",
      proteines: "33G",
      glucides: "65G",
      lipides: "23G"
    },
  },
]);


</script>

<template>
  <div
    id="salads-list"
    class="salad-wrapper py-10 sm:py-40 pb-[30px] sm:pb-[500px] flex flex-wrap flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-center px-10 box-content"
  >
    <div
      v-for="salad in saladsData"
      :key="salad.name"
      class="relative salad-item"
      @mouseenter="salad.showHover = true"
      @mouseleave="salad.showHover = false"
    >
      <img
        :src="images[salad.img].image"
        class="salad-img h-full lg:min-h-[581px] lg:max-h-[581px] object-cover w-full"
      >
      <Transition>
        <SaladHover
          v-if="salad.showHover"
          :data="salad"
        />
      </Transition>
    </div>
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
  image-orientation: none;
}
.salad-item:nth-child(2), 
.salad-item:nth-child(3), 
.salad-item:nth-child(6), 
.salad-item:nth-child(7), 
.salad-item:nth-child(9) {
    max-width: 55%;
    width: 100%;
    image-orientation: none;
}
@media only screen and (max-width: 1024px) {
  .salad-item {
    min-width: 100%;
  }
}
</style>