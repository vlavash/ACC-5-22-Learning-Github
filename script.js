
/*By: Valerie Lavash
Description: This is a project for an educational course through
Albany Can Code which was assigned by Steve Cifarelli on 5/1/2018.
  Our task was to use the OWL Carousel pluggin and do something
  creative with it.    */



            $(function(){
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:10,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    nav:true,
                    mouseDrag:false,
                    items:3,

                });
            });
