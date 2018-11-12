<template>
  <q-page padding>
    <!-- content -->
    {{getTranke[0].name}}
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      selectedTab: 'Tab-1',
    };
  },
  methods: {

  },
  computed: {
    getTranke() {
      return this.$store.getters['speicher/getTranke'];
    },
  },
};
</script>

<style>
</style>
