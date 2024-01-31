<script setup lang='ts'>
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
    let script = document.createElement('script');
    script.setAttribute('id', 'zelty-order-iframe');
    script.innerHTML = `
      (function(){
        window._zwg = window._zwg || {}
        window._zwg.key = 'f56abaf7f6f026d'
        var z = document.createElement('script')
        z.type = 'text/javascript'
        z.src = 'https://order.zelty.fr/loader-iframe.js'
        var allScripts = document.getElementsByTagName('script'),
            s = allScripts[allScripts.length - 1];
        s.parentNode.insertBefore(z, s)
      })();
    `;
    if (!document.getElementById('zelty-order-iframe')) {
      document.body.appendChild(script);
    }
});
</script>

<template>
  <div />
</template>