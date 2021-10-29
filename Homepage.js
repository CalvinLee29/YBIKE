let $news = $('.news')
let $slides1 = $news.find('.slides1')
let $slide1 = $slides1.find('.slide1')



let $speed = 1000
let $delay = 3000

let $totalSlide1 = $slide1.length
let $width1 = $slide1.width()
let $currSlide1 = 0


$slides1.css({
    width: ($totalSlide1 * $width1) + 'px'
})


setInterval(function(){
    if($currSlide1 == $totalSlide1){
        $currSlide1 = 0
        $slides1.css({
            marginLeft : 0
        })
    }
    $slides1.animate({
        'margin-left' : -($currSlide1 * $width1)
    },$speed)
    $currSlide1++;
}, $delay)




let $expo = $('.expo')
let $slides2 = $expo.find('.slides2')
let $slide2 = $slides2.find('.slide2')

let $totalSlide2 = $slide2.length
let $width2 = $slide2.width()
let $currSlide2 = 0


$slides2.css({
    width: ($totalSlide2 * $width2) + 'px'
})


setInterval(function(){
    if($currSlide2 == $totalSlide2){
        $currSlide2 = 0
        $slides2.css({
            marginLeft : 0
        })
    }
    $slides2.animate({
        'margin-left' : -($currSlide2 * $width2)
    },$speed)
    $currSlide2++;
}, $delay)



