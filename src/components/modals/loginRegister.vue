<template>
    <q-modal @hide="$emit('closeModal')" :value= "showModal">
      <div>
      <q-tabs animated swipeable inverted color="purple-6" align="justify">
        <q-tab name="tab1" slot="title" label="Login" />
        <q-tab name="tab2" slot="title" label="Bin ich neu hier" />
        <q-tab-pane name="tab1">gzffgfugugwefug</q-tab-pane>
        <q-tab-pane name="tab2">gzffgfugugwefug</q-tab-pane>
      </q-tabs>
        <q-btn class ="q-mt-xs" color="purple-6" @click="$emit('closeModal')" label="Close" />
      </div>
    </q-modal>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['showModal'],
  data() {
    return {};
  },
};
</script>

<style>
</style>
