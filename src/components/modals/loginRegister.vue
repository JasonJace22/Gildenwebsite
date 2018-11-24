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
                    :count="8"
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

       <!-- Register.Passwort -->
      <q-field  icon="mdi-lock-question"
                :error="$v.registerPw.pw.$error"
                error-label="Bitte gebe ein Passwort ein. Mindestlänge: 8"
                :count="8"
      >
        <q-input  type="password"
                  color="grey-7"
                  float-label="Passwort"
                  @blur="$v.registerPw.pw.$touch"
                  v-model="registerPw.pw"
                  clearable />
      </q-field>

       <!-- Register.Passwort.Wiederholen -->
      <q-field  icon="mdi-lock-reset"
                :error="$v.registerPw.pw2.$error"
                error-label="Bitte wiederhole das gleiche Passwort wie oben"
                :count="8"
      >
        <q-input  type="password"
                  color="grey-7"
                  float-label="Passwort wiederholen"
                  @blur="$v.registerPw.pw2.$touch"
                  v-model="registerPw.pw2"
                  clearable />
      </q-field>
  </q-step>

  <!-- Step 2 -->
  <q-step title="Step 2" subtitle="und noch mehr">

      <!-- Geschlecht -->
                <q-field
                  icon="mdi-gender-male-female"
                  label="Geschlecht"
                >
                  <q-select
                    color="positive"
                    v-model="register.geschlecht"
                    :options="[
                                { label: 'Herr', value: 'herr' },
                                { label: 'Frau', value: 'frau' },
                                { label: 'Turtle', value: 'turtle' }
                                ]"
                  />
                </q-field>

      <!-- Dein.Name -->
      <!-- Geburtstag -->
      <!-- Charaktername -->
      <!-- Rasse -->
      <!-- Klasse -->
      </q-step>
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
    <!-- Positive.Button -->
<div class="row">
    <q-btn  class ="q-mt-sm q-mr-auto col-6"
            color="positive"
            @click="startRegister"
            label="ja man!"
            />
    <!-- Positive.Button -->
      <q-btn  class ="q-mt-sm col-6"
              color="negative"
              @click="$emit('closeModal')"
              label="Doch nicht"
              />
      </div>
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

      select: 'herr',

      loginObjekt: {
        mail: '',
        pw: '',
      },

      registerPw: {
        pw: '',
        pw2: '',
      },

      register: {
        mail: '',
        geschlecht: 'herr',
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
    registerPw: {
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
