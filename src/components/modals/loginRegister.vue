<template>
    <q-modal @hide="$emit('closeModal')" :value= "showModal">
      <div>
      <q-tabs animated swipeable inverted color="purple-6" align="justify">
        <q-tab default name="tab1" slot="title" label="Login" />
        <q-tab name="tab2" slot="title" label="Bin ich neu hier" />
<!-- Tab 1 -->
        <q-tab-pane name="tab1">

          <q-field icon="mdi-account-circle" >
              <q-input  v-model="text"
                        type="text"
                        color="purple-6"
                        float-label="Benutzername"
                        clearable
                />
          </q-field>
          <q-field icon="mdi-lock-question" >
              <q-input  v-model="password"
                        type="password"
                        color="purple-6"
                        float-label="Passwort"
                        clearable
                          />
                      </q-field>

          <div class="q-mt-lg row">

            <q-btn  label="Einloggen"
                    class ="q-mt-xs col-6"
                    color="purple-6"
                    @click="startLogin"
            />
            <q-btn  label="Doch nicht..."
                    class ="q-mt-xs col-6"
                    color="purple-6"
                    @click="$emit('closeModal')"
            />
          </div>
        </q-tab-pane>
<!-- Tab 2 -->
        <q-tab-pane name="tab2">

<q-stepper ref="stepper" color="purple-9" v-model="currentStep">

  <!-- Step 1 -->
  <q-step default name ="1" title="First Step" subtitle="Deine Daten">

      <q-field icon="mdi-account-circle" >
        <q-input v-model="text" color="grey-7" float-label="Benutzername" clearable />
      </q-field>

      <q-field icon="mdi-lock-question" >
        <q-input v-model="text" color="grey-7" float-label="Passwort" clearable />
      </q-field>

      <q-field icon="mdi-lock-reset" >
        <q-input v-model="text" color="grey-7" float-label="Passwort wiederholen" clearable />
      </q-field>
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
  methods: {
    startLogin() {
      console.log('einloggen');
    },
  },
};
// validations: {
//   loginObjekt: {
//    mail: { required, email };
//    pw: { required, minLength: minLength(8) };
//  },
// };
</script>

<style>
</style>
