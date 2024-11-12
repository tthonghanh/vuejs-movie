<template>
  <div id="app">
    <component :is="layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
// import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
import { Vue, Component } from 'vue-property-decorator'
import TopBarComponent from './components/TopBarComponent.vue';
import LogOutModalComponent from './components/LogoutModalComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import SideBarComponent from './components/SideBarComponent.vue';

@Component({
  components: {
    // HeaderComponent
    TopBarComponent,
    LogOutModalComponent,
    HomeComponent,
    SideBarComponent,
  }
})
class App extends Vue {
  name = 'Hanh';
  layout = this.$route.meta!.layout;
}
export default App
</script>