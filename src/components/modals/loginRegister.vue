<template>
    <q-modal @hide="$emit('closeModal')" :value= "showModal">
      <div>
      <q-tabs animated swipeable inverted color="purple-6" align="justify">
        <q-tab default name="tab1" slot="title" label="Login" />
        <q-tab name="tab2" slot="title" label="Bin ich neu hier" />
<!-- Tab 1 - "Login" -->
        <q-tab-pane name="tab1">
     <!-- Login.Mail -->
          <q-field  icon="mdi-account-circle"
                    :error="$v.loginObjekt.mail.$error"
                    error-label="Kein gültiges Mailformat erkannt"
                    class="q-mr-xl q-ml-lg"
                    >
              <q-input  v-model="loginObjekt.mail"
                        @blur="$v.loginObjekt.mail.$touch"
                        type="email"
                        color="purple-6"
                        float-label="E-Mail"
                        clearable
                        />
            </q-field>
      <!-- Login.Passwort -->
          <q-field  icon="mdi-lock-question"
                    :error="$v.loginObjekt.pw.$error"
                    error-label="Gebe bitte dein richtiges Passwort ein"
                    class="q-mr-xl q-ml-lg"
                    >
              <q-input  v-model="loginObjekt.pw"
                        @blur="$v.loginObjekt.pw.$touch"
                        type="password"
                        color="purple-6"
                        float-label="Passwort"
                        clearable
                        />
                      </q-field>
        <!-- some-Space -->
          <div class="q-mt-md row ">
        <!-- Einloggen.Button -->
            <q-btn  label="Einloggen"
                    class ="q-mt-xs q-mr-xs q-ml-sm col-6"
                    color="positive"
                    @click="startLogin"
            />
        <!-- Cancel.Button -->
            <q-btn  label="Doch nicht"
                    class ="q-mt-xs col-5"
                    color="negative"
                    @click="$emit('closeModal')"
            />
          </div>
        </q-tab-pane>

<!-- Tab 2 _ "Bin ich neu hier" -->
        <q-tab-pane name="tab2">

  <!-- Stepper.Einbauen -->
<q-stepper ref="stepper" color="purple-9" v-model="currentStep">

  <!-- Step 1 -->
  <q-step default name ="1" title="First Step" subtitle="Deine Daten">

        <!-- Register.Mail -->
      <q-field  icon="mdi-account-circle"
                :error="$v.register.mail.$error"
                error-label="Bitte gebe eine gültige Mail Adresse ein"
                >
        <q-input  type="text"
                  color="grey-7"
                  float-label="Deine Mail Adresse"
                  @blur="$v.register.mail.$touch"
                  v-model="register.mail"
                  clearable />
      </q-field>

       <!-- Register.Passowort -->
      <q-field icon="mdi-lock-question" >
        <q-input  type="text"
                  color="grey-7"
                  float-label="Passwort"
                  clearable />
      </q-field>

       <!-- Register.Passowort.Wiederholen -->
      <q-field icon="mdi-lock-reset" >
        <q-input  type="text"
                  color="grey-7"
                  float-label="Passwort wiederholen"
                  clearable />
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
<q-btn class ="q-mt-xs col-6" color="positive"
                      @click="startRegister" label="ja man!" />

          <q-btn class ="q-mt-xs col-6" color="negative"
                      @click="$emit('closeModal')" label="Doch nicht" />
        </q-tab-pane>
      </q-tabs>
      </div>
    </q-modal>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators';

export default {
  // name: 'ComponentName',
  props: ['showModal'],
  data() {
    return {
      currentStep: '1',

      loginObjekt: {
        mail: '',
        pw: '',
      },
      registerInfo: {
        pw: '',
        pw2: '',
      },
      register: {
        mail: '',
      },
    };
  },
  methods: {
    startLogin() {
      console.log('einloggen');
    },
    startRegister() {
      console.log('register');
    },
  },
  validations: {
    loginObjekt: {
      mail: { required, email },
      pw: { required, minLength: minLength(8) },
    },
    registerInfo: {
      pw: { required, minLength: minLength(8) },
      pw2: { required, sameAsPassword: sameAs('pw') },
    },
    register: {
      mail: { required, email },
    },
  },
// niemals untere klammer löschen !!! never ever
};
</script>

<style>
</style>
