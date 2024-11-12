<template>
  <div class="admin-layout">
    <div class="top-bar sticky-top">
      <admin-top-bar></admin-top-bar>
    </div>
    <div id="wrapper">
      <admin-side-bar></admin-side-bar>
      <slot></slot>
    </div>
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                  <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  </button>
               </div>
               <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
               <div class="modal-footer">
                  <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                  <div class="btn btn-primary" @click="goTo('/auth')">Logout</div>
               </div>
            </div>
         </div>
      </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
import AdminTopBar from './partials/AdminTopBar.vue';
import AdminSideBar from './partials/AdminSideBar.vue';

  @Component({
    components: {
      AdminTopBar,
      AdminSideBar
    }
  })
  export default class AdminLayout extends Vue {
    active = '';
    get getActivePage() {
        return this.$store.getters.getActivePage;
    }
    goTo(url: string) {
      if (this.getActivePage == url) return;
      this.active = url;
      switch (url) {
         case '/auth':
            this.$store.dispatch('handleChangeActivePage', 'Auth');
         break;

         default:
            break;
      }
      this.$router.push(this.active);
    }
  }
</script>