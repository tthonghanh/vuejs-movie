<template>
  <div class="category-component">
    <div id="content-wrapper">
            <div class="container-fluid">
               <div class="video-block section-padding">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="main-title">
                           <div class="btn-group float-right right-action">
                              <a href="#" class="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {{ $t("sort-by") }}<i class="fa fa-caret-down" aria-hidden="true"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right">
                                 <a class="dropdown-item" href="#"><i class="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                 <a class="dropdown-item" href="#"><i class="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                 <a class="dropdown-item" href="#"><i class="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                              </div>
                           </div>
                           <h6>Categories</h6>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s1.png" alt="">
                              <h6>Your Life <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></span></h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s3.png" alt="">
                              <h6>Service Reviewing</h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s4.png" alt="">
                              <h6>Gaming <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></span></h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s5.png" alt="">
                              <h6>Technology Tutorials</h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s6.png" alt="">
                              <h6>Singing</h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s7.png" alt="">
                              <h6>Cooking</h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s8.png" alt="">
                              <h6>Traveling</h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s1.png" alt="">
                              <h6>Education</h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s2.png" alt="">
                              <h6>Noodles, Sauces & Instant Food</h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s3.png" alt="">
                              <h6>Comedy <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></span></h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="category-item mt-0 mb-0">
                           <a href="shop.html">
                              <img class="img-fluid" src="img/s4.png" alt="">
                              <h6>Lifestyle Advice</h6>
                              <p>74,853 {{ $t("views") }}</p>
                           </a>
                        </div>
                     </div>
                  </div>
                  <nav aria-label="Page navigation example">
                     <ul class="pagination justify-content-center pagination-sm mb-0">
                        <li class="page-item disabled">
                           <a class="page-link" href="#" tabindex="-1">{{ $t("Previous") }}</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                           <a class="page-link" href="#">{{ $t("Next") }}</a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
            <!-- /.container-fluid -->
            <!-- Sticky Footer -->
            <footer class="sticky-footer">
               <div class="container">
                  <div class="row no-gutters">
                     <div class="col-lg-6 col-sm-6">
                         <p class="mt-1 mb-0"><strong class="text-dark">Vidoe</strong>. 
                           <small class="mt-0 mb-0"><a class="text-primary" target="_blank" href="https://templatespoint.net/">TemplatesPoint</a>
                           </small>
                        </p>
                     </div>
                     <div class="col-lg-6 col-sm-6 text-right">
                        <div class="app">
                           <a href="#"><img alt="" src="img/google.png"></a>
                           <a href="#"><img alt="" src="img/apple.png"></a>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
         </div>
   
  </div>
</template>

<script>
import { Component, Vue }from 'vue-property-decorator';

@Component
export default class CategoryComponent extends Vue {}

</script>