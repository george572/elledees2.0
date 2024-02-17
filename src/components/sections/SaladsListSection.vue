<script setup>
import { ref, inject } from "vue";
import SaladHover from "../SaladHover.vue";
import AppButton from "../AppButton.vue";

const images = inject('images');
const saladsData = ref([
  {
    name : "Amore Mio", 
    sauceName: "Sauce pesto",
    sauceCalories: "240",
    ingredients: "Penne, concombres, tomates cerises, féta, oignons rouges, olives noires, pignons, roquette, mesclun",
    img: 'amoremioImg',
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red',
    nutritionData : {
      calories: "315",
      proteines: "14G",
      glucides: "43G",
      lipides: "36g"
    }
  },
  {
    name: "Big Crispy",
    sauceName: "Sauce miel-moutarde",
    sauceCalories: "240",
    ingredients: "Quinoa, avocat, poitrine de poulet rôtie, tomates cerises, oignons frits, pousses d'épinards, batavia",
    img: 'bigcrispyImg',
    showHover: false,
    customClass: 'bg-ed-pink text-ed-yellow',
    nutritionData : {
      calories: "590",
      proteines: "33G",
      glucides: "63G",
      lipides: "27g"
    }

  } ,
  {
    name: "French Riviera",
    sauceName: "Vinaigrette huile d'olive-citron",
    sauceCalories: "180",
    ingredients: "Saumon mi-cuit, riz, oeuf dur, mozzarella, tomates cerises, olives noires, cébettes, pignons, mesclun, batas",
    img: 'frenchrivImg',
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow',
    nutritionData : {
      calories: "490",
      proteines: "32G",
      glucides: "45G",
      lipides: "20g"
    }

  },
  {
    name: "Buffalo Bill",
    sauceName: "Sauce Ranch",
    sauceCalories: "240",
    ingredients: "Chips de bacon, œuf dur, bleu, tomates cerises, avocat, oignons rouges, pitas croustillantes, batavia",
    img: 'bufallobillImg',
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red',
    nutritionData : {
      calories: "470",
      proteines: "20G",
      glucides: "21G",
      lipides: "30G"
    }

  },
  {
    name: "Mexican Dream",
    sauceName: "Sauce coriandre-cumin",
    sauceCalories: "230",
    ingredients: "Poitrine de poulet rôtie, parmesan, avocat, chips de bacon, tomates cerises, pitas croustillantes, cébettes, batavia",
    img: 'mexicandreamImg',
    showHover: false,
    customClass: 'bg-ed-pink text-ed-yellow',
    nutritionData : {
      calories: "615",
      proteines: "34G",
      glucides: "51G",
      lipides: "33G"
    }
  },
  {
    name: "Habibi Yallah",
    sauceName: "Sauce curcuma-tahini",
    sauceCalories: "230",
    ingredients: "Patates douces rôties, féta, tomates cerises, boulgour, pois chiches, oignons rouges, concombres, pitas croustillantes, menthe, persil, mesclun, batavia",
    img: 'habibiImg',
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow',
    nutritionData : {
      calories: "470",
      proteines: "19G",
      glucides: "53G",
      lipides: "14G"
    }
  },
  {
    name: "Wild Strawberry",
    sauceName: "Vinaigrette balsamique",
    sauceCalories: "315",
    ingredients: "Fraises, avocat, carottes râpées, concombre, parmesan, pitas croustillantes, mesclun, batavia",
    img: 'wildstrawberryImg',
    showHover: false,
    customClass: 'bg-ed-green text-ed-yellow',
    nutritionData : {
      calories: "450",
      proteines: "18G",
      glucides: "28G",
      lipides: "26G"
    },
    season: "Summer"

  },
  {
    name: "Veggie Madness",
    sauceName: "Sauce Tamari",
    sauceCalories: "280",
    ingredients: "Tofu mariné rôti, concombre, carottes râpées, brocoli cru, chou rouge, oignons rouges, graines de sésame, mesclun, batavia",
    img: 'veggiemadnessImg',
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red',
    nutritionData : {
      calories: "185",
      proteines: "15G",
      glucides: "21G",
      lipides: "7g"
    }
  },
  {
    name: "Super Sour",
    sauceName: "Sauce miel-moutarde",
    sauceCalories: "240",
    ingredients: "Avocat, brocoli cru, carottes râpées, parmesan, canneberges séchées, pitas croustillantes, graines de tournesol, roquette, batavia",
    img: 'supersourImg',
    showHover: false,
    customClass: 'bg-ed-yellow text-ed-red',
    nutritionData : {
      calories: "588",
      proteines: "24G",
      glucides: "31G",
      lipides: "38G"
    }
  },
  {
    name: "Ave Cesar",
    sauceName: "Sauce César",
    sauceCalories: "258",
    ingredients: "Poitrine de poulet rôtie, parmesan, avocat, chips de bacon, tomates cerises, pitas croustillantes, cébettes, batavia",
    img: 'avecesarImg',
    showHover: false,
    customClass: 'bg-ed-pink text-ed-yellow',
    nutritionData : {
      calories: "647",
      proteines: "48G",
      glucides: "18G",
      lipides: "37G"
    }
  }
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