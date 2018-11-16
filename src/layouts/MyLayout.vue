<template>
  <q-layout view="hHh LpR lFr">
    <q-layout-header>
      <q-toolbar
        color="purple-6"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          NoName
          <div slot="subtitle">Alleria / Rexxar</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item>
          <q-item-side> <img style="width: 50px" src="statics/Turtle.png"/>
          </q-item-side>
          <q-item-main label="NoName"/>
        </q-item>
        <q-list-header>Berufe</q-list-header>
        <!-- alchemie -->
        <q-item to="alchemie">
          <q-item-side icon="local_florist" />
          <q-item-main label="Alchemie"/>
        </q-item>
        <!-- Ingi -->
        <q-item to="ingi">
          <q-item-side icon="mdi-screwdriver" />
          <q-item-main label="Ingenieurskunst"/>
        </q-item>
        <q-item to="inschrift">
          <q-item-side icon="mdi-book-open-page-variant" />
          <q-item-main label="Inschriftenkunde" />
        </q-item>
        <q-item to="juwe">
          <q-item-side icon="mdi-diamond"/>
          <q-item-main label="Juwelenschleifen"/>
        </q-item>
        <q-item to="schmiede">
          <q-item-side icon="mdi-hammer"/>
          <q-item-main label="Schmiedekunst" />
        </q-item>
        <q-item to="schneider">
          <q-item-side icon="mdi-scissors-cutting" />
          <q-item-main label="Schneiderei"/>
        </q-item>
        <q-item to="verzauber">
          <q-item-side icon="mdi-auto-fix" />
          <q-item-main label="Verzauberkunst" />
        </q-item>
        <q-item to="kochkunst">
          <q-item-side icon="mdi-fish" />
          <q-item-main label="Kochkunst"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
    link2alchemie() {
      this.$router.push('alchemie');
    },
  },
  created: function setupFireBase() {
    this.$store.dispatch('speicher/FirebaseSetup');
  },
};
</script>

<style>
</style>
