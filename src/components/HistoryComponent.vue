<template>
  <div class="history-component">
   

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
                           <h6>{{ $t("Watch History") }}</h6>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v1.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v2.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v3.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-danger">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i class="fas fa-frown text-danger"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v4.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v5.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v6.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-danger">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i class="fas fa-frown text-danger"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v7.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v8.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v2.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v3.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-danger">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i class="fas fa-frown text-danger"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v4.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3 col-sm-6 mb-3">
                        <div class="video-card history-video">
                           <div class="video-card-image">
                              <a class="video-close" href="#"><i class="fas fa-times-circle"></i></a>
                              <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v1.png" alt=""></a>
                              <div class="time">3:50</div>
                           </div>
                           <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1:40</div>
                           </div>
                           <div class="video-card-body">
                              <div class="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div class="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div class="video-view">
                                 1.8M {{ $t("views") }} &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
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
export default class HistoryComponent extends Vue {}

</script>