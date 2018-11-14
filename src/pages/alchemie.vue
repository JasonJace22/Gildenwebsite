<!-- ALCHEMIE BILD / ÜBERSCHRIFT -->
<template>
      <q-page>
   <img class="q-ma-md" src="statics\Bildersuche\AlchemieUeber.jpg"/>
   <q-list padding style="max-width: 600px;">
<!-- collapsible -->
<q-collapsible popup style="col-4"
v-for="tranke in getTranke" :key="tranke.id">
  <template slot="header">
    <q-chip small class="q-mr-sm">
      <img class="rahmen" :src="tranke.bild"/>
    </q-chip>
    <q-item-main :label="tranke.name"/>
  </template>
      <q-collapsible>
       <template slot="header">
     <q-item-side icon="mdi-file"/>
     <div style="color: green"><b>Benutzen: </b>{{tranke.beschreibung}}</div>
      </template>
              <q-chip>
              <div class="q-ml-xl" style="color: black">
                <img class="q-mr-sm; rahmen2"
                :src="tranke.zutat1bild">
                {{tranke.zutat1}}
                <p/>
                <img class="q-mr-sm; rahmen2"
                :src="tranke.zutat2bild">
                {{tranke.zutat2}}</div>
            </q-chip>
      </q-collapsible>
</q-collapsible>
   </q-list>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  computed: {
    getTranke() {
      return this.$store.getters['speicher/getTranke'];
    },
  },
};
</script>

<style>
.rahmen {
  border: gray 3px ridge;
  border-radius: 10px;
}

.rahmen2 {
  border: gray 3px ridge;
  border-radius: 10px;
  height: 40px;
  width: 40px;
}
</style>
