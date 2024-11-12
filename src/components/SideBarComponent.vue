<template>
  <div class="side-bar-component">
    <ul class="sidebar navbar-nav">
            <li class="nav-item" :class="getActivePage == 'Home' ? 'active' : ''" style="cursor: pointer;">
               <div class="nav-link" @click="goTo('/')">
               <i class="fas fa-fw fa-home"></i>
               <span>{{ $t('home') }}</span>
               </div>
            </li>
            <li class="nav-item" :class="getActivePage == 'Channels' ? 'active' : ''" style="cursor: pointer;">
               <div class="nav-link" @click="goTo('/channels')">
               <i class="fas fa-fw fa-users"></i>
               <span>{{ $t('channels') }}</span>
               </div>
            </li>
            <li class="nav-item" :class="getActivePage == 'SingleChannels' ? 'active' : ''" style="cursor: pointer;">
               <div class="nav-link" @click="goTo('/single-channels')">
               <i class="fas fa-fw fa-user-alt"></i>
               <span>{{ $t('single-channel') }}</span>
               </div>
            </li>
            <li class="nav-item" :class="getActivePage == 'Videos' ? 'active' : ''" style="cursor: pointer;">
               <div class="nav-link" @click="goTo('/videos')">
               <i class="fas fa-fw fa-video"></i>
               <span>{{ $t('video-page') }}</span>
               </div>
            </li>
            <li class="nav-item" :class="getActivePage == 'UploadVideos' ? 'active' : ''" style="cursor: pointer;">
               <div class="nav-link" @click="goTo('/upload-videos')">
               <i class="fas fa-fw fa-cloud-upload-alt"></i>
               <span>{{ $t('upload-video') }}</span>
               </div>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <i class="fas fa-fw fa-folder"></i>
               <span>{{ $t('pages') }}</span>
               </a>
               <div class="dropdown-menu">
                  <h6 class="dropdown-header">{{ $t("Login") }} Screens:</h6>
                  <div class="dropdown-item" @click="goTo('/auth')">{{ $t("Login") }}</div>
                  <a class="dropdown-item" href="register.html">{{ $t("Register") }}</a>
                  <a class="dropdown-item" href="forgot-password.html">{{ $t("Forgot Password") }}</a>
                  <div class="dropdown-divider"></div>
                  <h6 class="dropdown-header">{{ $t("other-pages") }}:</h6>
                  <a class="dropdown-item" href="404.html">404 Page</a>
                  <a class="dropdown-item" href="blank.html">Blank Page</a>
               </div>
            </li>
            <li class="nav-item" :class="getActivePage == 'History' ? 'active' : ''" style="cursor: pointer;">
               <div class="nav-link" @click="goTo('/histories')">
               <i class="fas fa-fw fa-history"></i>
               <span>{{ $t('history-page') }}</span>
               </div>
            </li>
            <li class="nav-item dropdown" :class="getActivePage == 'Categories' ? 'active' : ''" style="cursor: pointer;">
               <div class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="goTo('/categories')">
               <i class="fas fa-fw fa-list-alt"></i>
               <span>{{ $t('categories') }}</span>
               </div>
               <div class="dropdown-menu">
                  <a class="dropdown-item" href="categories.html">{{ $t("Movie") }}</a>
                  <a class="dropdown-item" href="categories.html">{{ $t("Music") }}</a>
                  <a class="dropdown-item" href="categories.html">{{ $t("Television") }}</a>
               </div>
            </li>
            <li class="nav-item channel-sidebar-list">
               <h6>{{ $t('subscriptions') }}</h6>
               <ul>
                  <li :class="getActivePage == 'Subscription' ? 'active' : ''" style="cursor: pointer;">
                     <div @click="goTo('/subscriptions')">
                     <img class="img-fluid" alt="" src="img/s1.png"> Your Life 
                     </div>
                  </li>
                  <li>
                     <a href="subscriptions.html">
                     <img class="img-fluid" alt="" src="img/s2.png"> Unboxing  <span class="badge badge-warning">2</span>
                     </a>
                  </li>
                  <li>
                     <a href="subscriptions.html">
                     <img class="img-fluid" alt="" src="img/s3.png"> Product / Service  
                     </a>
                  </li>
                  <li>
                     <a href="subscriptions.html">
                     <img class="img-fluid" alt="" src="img/s4.png">  Gaming 
                     </a>
                  </li>
               </ul>
            </li>
         </ul>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class SideBarComponent extends Vue {
    active = '/';
    get getActivePage() {
      return this.$store.getters.getActivePage;
    }
    goTo(url: string) {
      if (this.active == url) return;
      this.active = url;
      switch (url) {
        case '/': {
            this.$store.dispatch('handleChangeActivePage', 'Home');
          }
        break;
        case '/channels': {
            this.$store.dispatch('handleChangeActivePage', 'Channels');
          }
        break;
        case '/single-channels': {
            this.$store.dispatch('handleChangeActivePage', 'SingleChannels');
          }
        break;
        case '/videos': {
            this.$store.dispatch('handleChangeActivePage', 'Videos');
          }
        break;
        case '/upload-videos': {
            this.$store.dispatch('handleChangeActivePage', 'UploadVideos');
          }
        break;
        case '/histories': {
            this.$store.dispatch('handleChangeActivePage', 'History');
          }
        break;
        case '/categories': {
            this.$store.dispatch('handleChangeActivePage', 'Categories');
          }
        break;
        case '/subscriptions': {
            this.$store.dispatch('handleChangeActivePage', 'Subscription');
          }
        break;
        case '/auth': {
            this.$store.dispatch('handleChangeActivePage', 'Auth');
          }
        break;
      
        default:
          break;
      }
      this.$router.push(this.active);
    }
  }
</script>