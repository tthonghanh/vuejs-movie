<template>
  <div class="admin-top-bar">
    <nav class="navbar navbar-expand navbar-light bg-white static-top osahan-nav">
         &nbsp;&nbsp; 
         <button class="btn btn-link btn-sm text-secondary order-1 order-sm-0" id="sidebarToggle">
         <i class="fas fa-bars"></i>
         </button> &nbsp;&nbsp;
         <a class="navbar-brand mr-1" href="index.html"><img class="img-fluid" alt="" src="img/logo.png"></a>
         <!-- Navbar Search -->
         <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
            <div class="input-group">
               <input type="text" class="form-control" :placeholder="$t('search-for') + '...'">
               <div class="input-group-append">
                  <button class="btn btn-light" type="button">
                  <i class="fas fa-search"></i> 
                  </button>
               </div>
            </div>
         </form>
         <!-- Navbar -->
         <ul class="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
            <li class="nav-item mx-1" :class="getActivePage == 'Upload' ? 'active' : ''" style="cursor: pointer;">
               <div class="btn btn-primary" @click='onChangeLanguage()'>{{ $t('change-language') }}</div>
            </li>
            <li class="nav-item dropdown no-arrow mx-1">
               <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <i class="fas fa-bell fa-fw"></i>
               <span class="badge badge-danger">9+</span>
               </a>
               <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                  <a class="dropdown-item" href="#"><i class="fas fa-fw fa-edit "></i> &nbsp; Action</a>
                  <a class="dropdown-item" href="#"><i class="fas fa-fw fa-headphones-alt "></i> &nbsp; Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fas fa-fw fa-star "></i> &nbsp; Something else here</a>
               </div>
            </li>
            <li class="nav-item dropdown no-arrow mx-1">
               <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <i class="fas fa-envelope fa-fw"></i>
               <span class="badge badge-success">7</span>
               </a>
               <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                  <a class="dropdown-item" href="#"><i class="fas fa-fw fa-edit "></i> &nbsp; Action</a>
                  <a class="dropdown-item" href="#"><i class="fas fa-fw fa-headphones-alt "></i> &nbsp; Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fas fa-fw fa-star "></i> &nbsp; Something else here</a>
               </div>
            </li>
            <li class="nav-item dropdown no-arrow osahan-right-navbar-user">
               <a class="nav-link dropdown-toggle user-dropdown-link" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <img alt="Avatar" src="img/user.png">
               Osahan 
               </a>
               <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                  <div class="dropdown-item" :class="getActivePage == 'Account' ? 'active' : ''" style="cursor: pointer;" @click="goTo('/account')"><i class="fas fa-fw fa-user-circle"></i> &nbsp; {{ $t("My Account") }}</div>
                  <div class="dropdown-item" :class="getActivePage == 'Subscription' ? 'active' : ''" style="cursor: pointer;" @click="goTo('/subscriptions')"><i class="fas fa-fw fa-video"></i> &nbsp; Subscriptions</div>
                  <div class="dropdown-item" :class="getActivePage == 'Setting' ? 'active' : ''" style="cursor: pointer;" @click="goTo('/settings')"><i class="fas fa-fw fa-cog"></i> &nbsp; Settings</div>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"><i class="fas fa-fw fa-sign-out-alt"></i> &nbsp; {{ $t("Logout") }}</a>
               </div>
            </li>
         </ul>
      </nav>
  </div>
</template>

<script lang="ts">
  import i18n from "@/i18n";
import { Vue, Component } from "vue-property-decorator"

  @Component
  export default class AdminTopBar extends Vue {
   active = '';
   get getActivePage() {
      return this.$store.getters.getActivePage;
   }
   goTo(url: string) {
      if (this.getActivePage == url) return;
      this.active = url;
      switch (url) {
         case '/upload':
            this.$store.dispatch('handleChangeActivePage', 'Upload');
         break;
         case '/account':
            this.$store.dispatch('handleChangeActivePage', 'Account');
         break;
         case '/subscriptions':
            this.$store.dispatch('handleChangeActivePage', 'Subscription');
         break;
         case '/settings':
            this.$store.dispatch('handleChangeActivePage', 'Setting');
         break;
      
         default:
            break;
      }
      this.$router.push(this.active);
   }
   onChangeLanguage() {
      i18n.locale = i18n.locale === 'en' ? 'vi' : 'en';
   }
  }
</script>