<template>
    <q-modal @hide="$emit('closeModal')" :value= "showModal">
      <div>
      <q-tabs animated swipeable inverted color="purple-6" align="justify">
        <q-tab default name="tab1" slot="title" label="Login" />
        <q-tab name="tab2" slot="title" label="Bin ich neu hier" />
        <q-tab-pane name="tab1">
           <q-input v-model="text"
                    type="text"
                    float-label="Benutzername"
                    color="purple-6" clearable/>
           <q-input v-model="password" color="purple-6"
                    type="password" float-label="Passwort" clearable />
          <div class="q-mt-md row">
              <q-btn class ="q-mt-xs col-6" color="purple-6" label="Einloggen" />
              <q-btn class ="q-mt-xs col-6" color="purple-6"
                      @click="$emit('closeModal')" label="Doch nicht..." />
          </div>
        </q-tab-pane>
        <q-tab-pane name="tab2">
<!-- -->
<q-stepper ref="stepper" color="purple-9" v-model="currentStep">

  <!-- Step 1 -->
  <q-step default name ="1" title="First Step" subtitle="Deine Daten">
    ...Step content, components, ...
  </q-step>

  <!-- Step 2 -->
  <q-step title="Step 2" subtitle="und noch mehr">...</q-step>

  <!-- Step 3 -->
  <q-step title="Step 3" subtitle="Passt auch alles?">...</q-step>

  <!-- weiteres -->
  <q-stepper-navigation>
    <q-btn
      flat
      @click="$refs.stepper.previous()"
      label="Back"
    />
    <q-btn
      @click="$refs.stepper.next()"
      label="Next"
    />
  </q-stepper-navigation>
</q-stepper>
<!-- -->
          <q-btn class ="q-mt-xs col-6" color="purple-6"
                      @click="$emit('closeModal')" label="Doch nicht..." />
        </q-tab-pane>
      </q-tabs>
      </div>
    </q-modal>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['showModal'],
  data() {
    return {
      currentStep: '1',
    };
  },
};
</script>

<style>
</style>
