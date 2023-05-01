let buttonenabled=!0,scroll=0;$(document).on("click",".darkmode",(function(){buttonenabled&&(buttonenabled=!1,$(".clip").html($("body >.container")[0].outerHTML),//Copy container to inside clip
scrollbind($(".clip .container")),$(".clip .container").toggleClass("dark").scrollTop(scroll),//Toggle dark mode and set scroll
$(".clip .darkmode").toggleClass("fa-moon").toggleClass("fa-sun"),//Make changes: change button icon
$(".clip").addClass("anim"),//Animate the clip
setTimeout((function(){$("body >.container").replaceWith($(".clip").html()),//Replace container with clip html
scrollbind($("body >.container")),//bind scroll with new container
$("body >.container").scrollTop(scroll),//Set scroll position
$(".clip").html("").removeClass("anim"),//Hide clip
buttonenabled=!0}),1e3))}));const scrollbind=l=>l.bind("scroll",(function(){scroll=$(this).scrollTop(),$(".container").length>1&&//No point setting it if there is only 1
$(".container").scrollTop(scroll)}));scrollbind($(".container"));