<template>
  <q-page padding>
    <!-- content -->
   <q-btn v-for="trank in tranke" :key="trank.id"
        :label="`${trank.name}`" />
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      tranke: [
        {
          id: 0,
          name: 'trank der lebenden totes',
          beschreibung: 'du lebst nach dem tode weiter und so.',
        },
      ],
    };
  },
};
</script>

<style>
</style>
