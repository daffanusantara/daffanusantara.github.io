// event pada saat link di klik
$('.page-scroll').on('click', function(e){


    // ambil isi href
    var tujuan = $(this).attr('href');

    // nama elemen ybs
    var elemenTujuan = $(tujuan);

    // pind scroll
    $('html,body').animate ({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});

// about
$(window).on('load', function () {
    $('.habout').addClass('hgo')
    
});

// paralax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css ({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css ({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css ({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });


// paragraf yang ada dilam about
if(wScroll > $('.about').offset().top - 200 ) {
    $('.p1').addClass('pgo');
}

if(wScroll > $('.about').offset().top - 200 ) {
    $('.p2').addClass('pgo');
}


    // portfolio 

    if(wScroll > $('.portfolio').offset().top - 200 ) {
        $('.portfolio .habout').addClass('hgo');
    }
    
    

    
    if( wScroll > $('.portfolio').offset().top - 400 ) {
        $('.portfolio .thumbnail').each(function(i) {
         setTimeout(function() {
            $ ('.portfolio .thumbnail').eq(i).addClass('muncul');
         }, 500 *  (i+1));   
        });

        
    } 

    // contact me
    if(wScroll > $('.contactme').offset().top - 330 ) {
        $('.contactme .habout').addClass('hgo');
    }

    


  

});