<template>
  <q-page class="flex flex-center">
    <div class="row flex-center">
      <div @click="link2alchemie()" class="q-ma-md col-3">
     <q-card inline >
      <q-card-media>
        <img src="statics\Bildersuche\alchemie.jpg"
          style="object-fit: cover; height: 150px; object-position: center;">
        <q-card-title slot="overlay">
          Alchemie
        </q-card-title>
      </q-card-media>
    </q-card>
</div>

<div @click="link2ingi()" class="q-ma-md col-3">
    <q-card inline>
      <q-card-media>
        <img src="statics\Bildersuche\ingi.jpg"
          style="object-fit: cover; height: 150px; object-position: center;">
        <q-card-title slot="overlay">
          Ingenieurskunst
        </q-card-title>
      </q-card-media>
    </q-card>
</div>

<div @click="link2inschrift()" class="q-ma-md col-3">
     <q-card inline >
      <q-card-media>
        <img src="statics\Bildersuche\inschrift.jpg"
          style="object-fit: cover; height: 150px; object-position: center;">
        <q-card-title slot="overlay">
          Inschriftenkunde
        </q-card-title>
      </q-card-media>
    </q-card>
</div>

<div @click="link2juwe()" class="q-ma-md col-3">
    <q-card inline>
      <q-card-media>
        <img src="statics\Bildersuche\juwe.jpg"
        style="object-fit: cover; height: 150px; object-position: center;">
        <q-card-title slot="overlay">
          Juwelenschleifen
        </q-card-title>
      </q-card-media>
    </q-card>
</div>

<div @click="link2schmiede()" class="q-ma-md col-3">
     <q-card inline >
      <q-card-media>
        <img src="statics\Bildersuche\schmiede.jpg"
          style="object-fit: cover; height: 150px; object-position: center;">
        <q-card-title slot="overlay">
          Schmiedekunst
        </q-card-title>
      </q-card-media>
    </q-card>
</div>

 <div @click="link2schneider()" class="q-ma-md col-3">
     <q-card inline >
      <q-card-media>
        <img src="statics\Bildersuche\schneider.jpg"
          style="object-fit: cover; height: 150px; object-position: center;">
        <q-card-title slot="overlay">
          Schneiderei
        </q-card-title>
      </q-card-media>
    </q-card>
</div>

 <div @click="link2verzauber()" class="q-ma-md col-3">
     <q-card inline >
      <q-card-media>
        <img src="statics\Bildersuche\vz.jpg"
          style="object-fit: cover; height: 150px; object-position: center;">
        <q-card-title slot="overlay">
          Verzauberkunst
        </q-card-title>
      </q-card-media>
    </q-card>
</div>

 <div @click="link2kochkunst()" class="q-ma-md col-3">
     <q-card inline >
      <q-card-media>
        <img src="statics\Bildersuche\kochkunst.jpg"
          style="object-fit: cover; height: 150px; object-position: center;">
        <q-card-title slot="overlay">
          Kochkunst
        </q-card-title>
      </q-card-media>
    </q-card>
</div>

    </div>
  </q-page>
</template>


<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      myName: 'Hallo Welt!',
    };
  },
  methods:
  {
    link2alchemie() {
      this.$router.push('alchemie');
    },
    link2kochkunst() {
      this.$router.push('kochkunst');
    },
    link2ingi() {
      this.$router.push('ingi');
    },
    link2inschrift() {
      this.$router.push('inschrift');
    },
    link2juwe() {
      this.$router.push('juwe');
    },
    link2schmiede() {
      this.$router.push('schmiede');
    },
    link2schneider() {
      this.$router.push('schneider');
    },
    link2verzauber() {
      this.$router.push('verzauber');
    },
  },
};
</script>
