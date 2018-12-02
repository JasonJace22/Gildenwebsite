<template>
    <q-modal content-classes="loginmodal" @hide="$emit('closeModal')" :value= "showModal">
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
                        color="positive"
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
                        color="positive"
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
  <q-step default name ="first" title="First Step" subtitle="Deine Daten">

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
  <q-step title="Step 2" name ="second" subtitle="und noch mehr" :order="2">

      <!-- Dein.Name -->
            <q-field  icon="mdi-account-card-details"
                      label="Name"
                >
                  <q-input  type="text"
                            class="q-ma-xs"
                            color="grey-7"
                            v-model="register.name"
                            @blur="$v.register.name.$touch"
                            clearable
                  />
              </q-field>

      <!-- Geschlecht -->
            <q-field  icon="mdi-gender-male-female"
                      label="Geschlecht"
                      class="q-mt-md"
            >
              <q-select color="positive"
                        v-model="register.geschlecht"
                        :options="[
                            { label: 'Herr', value: 'herr' },
                            { label: 'Frau', value: 'frau' },
                            { label: 'Turtle', value: 'turtle' }
                            ]"
              />
            </q-field>

      <!-- Geburtstag -->
            <q-field  icon="mdi-cake-variant"
                      label="Geburtstag"
            >
              <q-datetime type="date"
                          v-model="register.bday"
                          color="secondary"
                          float-label="yyyy.mm.dd"
                          :max="new Date()"
              />
            </q-field>
      </q-step>

    <!-- Step 3 -->
    <q-step title="Step 3" name ="third" subtitle="Ingame Daten" :order="3">

      <!-- Charaktername -->
                  <q-field  icon="mdi-account-circle"
                            label="Charaktername"
                            class="q-mt-md"
                >
                  <q-input  type="text"
                            class="q-ma-xs"
                            color="grey-7"
                            v-model="register.char"
                            clearable
                  />
              </q-field>

      <!-- Klasse -->
                  <q-field  icon="mdi-gender-male-female"
                            label="Klasse"
                            class="q-mt-md"
            >
              <q-select color="positive"
                        v-model="register.klasse"
                        :options="[
                            { label: 'Krieger', value: 'krieger' },
                            { label: 'Paladin', value: 'paladin' },
                            { label: 'Druide', value: 'druide' }
                            ]"
              />
            </q-field>

      <!-- Rasse -->
            <q-field  icon="mdi-gender-male-female"
                      label="Rasse"
                      class="q-mt-md"
            >
              <q-select color="positive"
                        v-model="register.rasse"
                        :options="[
                            { label: 'Mensch', value: 'mensch' },
                            { label: 'Gnom', value: 'gnom' },
                            { label: 'Zwerg', value: 'Zwerg' }
                            ]"
              />
            </q-field>
 </q-step>

  <!-- Step 4 -->
  <q-step title="Step 4" subtitle="Passt auch alles?" :order="4">
    <div class="row">

    <q-card inline color="blue-1" class="text-black col-12">
      <q-card-title>
        First Step
      </q-card-title>
      <q-card-main>
        E-Mail Adresse: {{register.mail}}
      </q-card-main>
      <q-card-separator />
          <span class="q-ma-sm">Du möchtest etwas ändern?</span>
        <q-btn
          class="q-ma-xs"
          color="indigo-6"
          @click="currentStep = 'first'"
          label="Go to Step 1"
        />
    </q-card>

    <q-card inline color="blue-1" class="q-mt-md text-black col-12">
      <q-card-title>
        Step 2
      </q-card-title>
      <q-card-main>
        <p /><b>Dein Name:</b> {{register.name}}
        <p /><b>Dein Geschlecht:</b> {{register.geschlecht}}
        <p /><b>Dein Geburtstag:</b> {{register.bday}}
      </q-card-main>
      <q-card-separator />
        <span class="q-ma-sm">Du möchtest etwas ändern?</span>
        <q-btn
          class="q-ma-xs"
          color="indigo-6"
          @click="currentStep = 'second'"
          label="Go to Step 2"
        />
    </q-card>

<q-card inline color="blue-1" class="q-mt-md text-black col-12">
      <q-card-title>
        Step 3
      </q-card-title>
      <q-card-main>
    <p>{{register.char}}</p>
    <p>{{register.rasse}}</p>
    <p>{{register.klasse}}</p>
      </q-card-main>
      <q-card-separator />
      <span class="q-ma-sm">Du möchtest etwas ändern?</span>
        <q-btn
          class="q-ma-xs"
          color="indigo-6"
          @click="currentStep = 'third'"
          label="Go to Step 3"
        />
    </q-card>

</div>
    </q-step>

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
      currentStep: 'first',

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
        name: '',
        bday: '',
        char: '',
        rasse: 'mensch',
        klasse: 'krieger',
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
      name: { required },
      bday: { required },
    },
  },
// niemals untere klammer löschen !!! never ever
};
</script>

<style>
      .loginmodal {
      max-width:700px;
      width: 100%
      };
</style>
