<!-- NOTIZEN ANFANG
- Bilder zentral einen Rahmen legen lassen
NOTIZEN ENDE -->

<!-- ALCHEMIE BILD / ÜBERSCHRIFT -->
<template>
      <q-page>
   <img class="q-ma-md" src="statics\Bildersuche\AlchemieUeber.jpg"/>
   <q-list padding style="max-width: 600px;">
<!-- erster -->
<q-collapsible popup style="col-4">
  <template slot="header">
    <q-chip small class="q-mr-sm">
      <img class="rahmen" src="statics\Tränke\manatrank_der_küste.jpg"/>
    </q-chip>
    <q-item-main label="Manatrank der Küste" />
  </template>
      <q-collapsible>
       <template slot="header">
     <q-item-side icon="mdi-file"/>
     <div style="color: green"><b>Benutzen:</b>
     Stellt 11084 Mana wieder her. (1 Min Abklingzeit)</div>
      </template>
              <q-chip>
              <div class="q-ml-xl" style="color: black">
                <img class="q-mr-sm; rahmen2" src="statics\Tränke\flussknospe.jpg"/>
                Flussknospe: 3 oder 2 davon!
                <p/>
                <img class="q-mr-sm; rahmen2"
                src="statics\Tränke\kristallphiole.jpg"/>
                Kristallphiole: Einmal oder so </div>
            </q-chip>
      </q-collapsible>
</q-collapsible>
<!-- zweiter -->
<q-collapsible popup style="col-4">
  <template slot="header">
    <q-chip small class="q-mr-sm">
      <img class="rahmen" src="statics\Tränke\heiltrank_der_küste.jpg"/>
    </q-chip>
    <q-item-main label="Heiltrank der Küste" />
  </template>
      <q-collapsible>
       <template slot="header">
     <q-item-side icon="mdi-file"/>
     <div style="color: green"><b>Benutzen:</b> Stellt 33251 Gesundheit
        wieder her. (1 Min Abklingzeit)</div>
      </template>
              <q-chip>
              <div class="q-ml-xl" style="color: black">
                <img class="q-mr-sm; rahmen2" src="statics\Tränke\sirenenpollen.jpg"/>
                Sirenenpollen: 3 oder 2 davon!
                <p/>
                <img class="q-mr-sm; rahmen2"
                src="statics\Tränke\kristallphiole.jpg"/>
                Kristallphiole: Einmal oder so </div>
            </q-chip>
      </q-collapsible>
</q-collapsible>
<!-- dritter -->
<!-- vierter -->
<!-- fünfter -->
   </q-list>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style>
.rahmen {
  border: gray 3px ridge;
  border-radius: 10px;
}

.rahmen2 {
  border: gray 3px ridge;
  border-radius: 10px;
  height: 40px;
  width: 40px;
}
</style>
