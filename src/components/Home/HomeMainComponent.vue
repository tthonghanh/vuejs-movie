<template>
  <div class="mainComponent">
    <div class="main_2 clearfix">
   <section id="center" class="center_home">
 <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-md-block">
         <h5 class="text-white-50 release ps-2 fs-6">NEW RELEASES</h5>
        <h1 class="font_80 mt-4">The Rise Of <br> The Show</h1>
		<h6 class="text-white"><span class="rating d-inline-block rounded-circle me-2 col_green">6.1</span> <span class="col_green">IMDB SCORE</span> <span class="mx-3">2022</span> <span class="col_red">Romance, Action</span></h6>
		<p class="mt-4">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.</p>
		<h5 class="mb-0 mt-4 text-uppercase"><a class="button" href="#"><i class="fa fa-youtube-play me-1"></i> Watch Trailer</a></h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/2.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-md-block">
         <h5 class="text-white-50 release ps-2 fs-6">NEW RELEASES</h5>
        <h1 class="font_80 mt-4">Detail Of Popular<br>  New Show</h1>
		<h6 class="text-white"><span class="rating d-inline-block rounded-circle me-2 col_green">7.3</span> <span class="col_green">IMDB SCORE</span> <span class="mx-3">2022</span> <span class="col_red">Romance, Action</span></h6>
		<p class="mt-4">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.</p>
		<h5 class="mb-0 mt-4 text-uppercase"><a class="button" href="#"><i class="fa fa-youtube-play me-1"></i> Play Movie</a></h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/3.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-md-block">
         <h5 class="text-white-50 release ps-2 fs-6">NEW RELEASES</h5>
        <h1 class="font_80 mt-4">Lorem Ipsum <br> Sit Dolor</h1>
		<h6 class="text-white"><span class="rating d-inline-block rounded-circle me-2 col_green">8.2</span> <span class="col_green">IMDB SCORE</span> <span class="mx-3">2022</span> <span class="col_red">Romance, Action</span></h6>
		<p class="mt-4">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.</p>
		<h5 class="mb-0 mt-4 text-uppercase"><a class="button" href="#"><i class="fa fa-youtube-play me-1"></i> Watch Trailer</a></h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">{{ $t("Previous") }}</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">{{ $t("Next") }}</span>
  </button>
</div>
</section>
 </div>
  </div>
</template>

<script>
  export default {
    name: "HomeMainComponent"
  }
</script>