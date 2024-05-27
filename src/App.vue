<script setup>
import AppHeader from './components/AppHeader.vue';
import AppLoading from './components/AppLoading.vue';
import { ref, onBeforeMount, provide, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import heroImg from '/src/assets/images/hero-min.JPG';
import amoremioImg from "/src/assets/images/amoremio.JPG";
import avecesarImg from "/src/assets/images/avecesar.jpg";
import bigcrispyImg from "/src/assets/images/bigcrispy.jpg";
import bufallobillImg from "/src/assets/images/buffalobill.jpg";
import frenchrivImg from "/src/assets/images/frenchriviera.jpg";
import habibiImg from "/src/assets/images/habibi.jpg";
import mexicandreamImg from "/src/assets/images/mexicandream.jpg";
import supersourImg from "/src/assets/images/supersour.jpg";
import veggiemadnessImg from "/src/assets/images/veggiemadness.jpg";
import wildstrawberryImg from "/src/assets/images/wildstrawberry.png";
import kitchenImage from "/src/assets/images/non10.JPG"
import tangerineImg from "/src/assets/images/tangerine.JPG"

const loading = ref(true);
const imagesLoaded = ref(0);
const route = useRoute();
const router = useRouter();

const assetsToLoad = ref([
  { tag : 'heroImg', image : heroImg },
  { tag : 'amoremioImg', image : amoremioImg },
  { tag : 'avecesarImg', image : avecesarImg },
  { tag : 'bigcrispyImg', image : bigcrispyImg },
  { tag : 'bufallobillImg', image : bufallobillImg },
  { tag : 'frenchrivImg', image : frenchrivImg },
  { tag : 'habibiImg', image : habibiImg },
  { tag : 'mexicandreamImg', image : mexicandreamImg },
  { tag : 'supersourImg', image : supersourImg },
  { tag : 'veggiemadnessImg', image : veggiemadnessImg },
  { tag : 'wildstrawberryImg', image : wildstrawberryImg },
  { tag : 'kitchenImg', image : kitchenImage },
  { tag : 'tangerineImg', image : tangerineImg },
]);

const loadedImages = ref({
  heroImg: "",
  amoremioImg: "",
  avecesarImg: "",
  bigcrispyImg: "",
  bufallobillImg: "",
  frenchrivImg: "",
  habibiImg: "",
  mexicandreamImg: "",
  supersourImg: "",
  veggiemadnessImg: "",
  wildstrawberryImg: "",
  kitchenImg : "",
  tangerineImg: "",
});

const isWelcomeRoute = computed(() => {
  return route.path === '/welcome';
});

onBeforeMount(() => {
  console.log(document.URL, route)
  if (document.URL.includes('welcome') && route.fullPath !== 'welcome') {
      router.push('/welcome')
    }
  let imagesToLoad = assetsToLoad.value.length;

  window.onscroll = () => {
    if (loading.value) {
      window.scrollTo(0, 0);
      return;
    }
  }

  assetsToLoad.value.forEach((image) => {
    loading.value = true;
    const img = new Image();
    img.src = image.image;
    img.onload = () => {
      imagesLoaded.value++;
      loadedImages.value[image.tag] = image;
      if (imagesLoaded.value === imagesToLoad) {
        loading.value = false;
      }
    };
  });
  provide('images', loadedImages);
});

</script>

<template>
  <TransitionGroup mode="out-in">
    <AppLoading
      v-if="loading"
      :loading-progress="(imagesLoaded / assetsToLoad.length) * 100"
    />
    <div 
      v-if="!loading"
    >
      <AppHeader v-if="!isWelcomeRoute" />
      <RouterView />
    </div>
  </TransitionGroup>
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
</style>

<style>
html {
  scroll-behavior: smooth;
}
</style>
