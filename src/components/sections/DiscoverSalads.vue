<script setup lang='ts'>
import AppButton from '../AppButton.vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center pt-40 pb-28 gap-20">
    <h1 class="font-[Geomanist-Bold] text-[45px] text-ed-green text-center max-w-[1000px] mx-auto px-5">
      ELLE & DEE’S CE SONT DES SALADES PRÉPARÉES À BASE D’INGRÉDIENTS FRAIS ET SAVOUREUX POUR RASSASIER MÊME LES PLUS GROSSES DALLES. UNE SÉLECTION PLÉTHORIQUE QUI SATISFERA TOUTES VOS ENVIES DE FRAÎCHEUR.
    </h1>
    <div class="flex flex-col md:flex-row justify-center items-center gap-5">
      <AppButton
        :additional-styles="'text-ed-pink border border-ed-pink'"
        :outline="true"
      >
        commander
      </AppButton>
      <AppButton
        :additional-styles="'text-ed-pink border border-ed-pink'"
        :outline="true"
      >
        DÉCOUVRIR LE MENU
      </AppButton>
    </div>
  </div>
</template>