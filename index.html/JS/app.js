$(function() {
    $(window).on('scroll', function() {
       let scrollsize = $(window).scrollTop()

        if(scrollsize > 120){
            $('#nav').addClass('active');
        }
        else{
            $('#nav').removeClass('active');
        }

    })

    $(window).on('load', function() {
        $('#preloader').fadeOut(1500);
    })
})

