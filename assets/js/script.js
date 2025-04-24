console.log('jQuery versión:', $.fn.jquery);
console.log('Bootstrap Modal existe?', typeof bootstrap.Modal);

$("p").click(function(){
    $(this).hide(4000)
    $(this).fadeIn(4000)
})

$("#boton").click(function(){
    $("#div").css({
        'background-color': '#f0ad4e',
        'color': '#fff',
        'padding': '10px'
    })
})

$("#btnToggle").click(function(){
    $("#panel").slideToggle(150)
})