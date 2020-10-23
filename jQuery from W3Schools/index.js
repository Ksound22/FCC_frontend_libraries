// alert("lets learn jQuery big time na so")

//demonstrating element selector 
$(document).ready(function(){
   /* $("button").click(function(){
        $("p").hide(2000);
    }); */

//demonstrating click event 
   /* $("h2").dblclick(function(){
        $(this).hide(1000);
    }); */

//demonstrating mousenter event
   /* $("p.enter").mouseenter(function(){
        $(this).hide(1000)
    }); */

//demonstrating hover event
   /* $("p.hover").hover(function(){
        $(this).hide(2000)
    }); */

//demonstrating focus and blur
    /*$("input").focus(function(){
        $(this).css("background-color", "green");
    }); */

    /*$("input").blur(function(){
        $(this).css("background-color", "black");
    }); */

//demonstrating multiple event handling with the on() method
   /* $("p.mouseevents").on({
        mouseenter: function() {
            $(this).css("background-color", "violet");
        },
        mouseleave: function() {
            $(this).css("background-color", "indigo");
        },
        click: function() {
            $(this).css("background-color", "cyan");
        }
    }); */

//demonstrating jQuery effects

//demonstrating hide, show and togglehide

    /*$("#hide").click(function(){
        $("p.hideshow").hide(2000)
    });

    $("#show").click(function(){
        $("p.hideshow").show(2000)
    });

    $("button.toggleshow").click(function(){
        $("h4").toggle(2000)
    }); */

//demonstrating fade in, fade out, fadeTo and fadetoggle
    // fadeIn()
   /* $("button.fades").click(function(){
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(2000);
        $("#div3").fadeIn(3000);
    });
*/
    // fadeOut()
    /*$("button.fadout").click(function(){
        $("#div4").fadeOut(1000);
        $("#div5").fadeOut(2000);
        $("#div6").fadeOut(3000); 
    }); */

    // fadeToggle
    /*$("button.fadout").click(function(){
        $("#div7").fadeToggle(1000);
        $("#div8").fadeToggle(2000);
        $("#div9").fadeToggle(3000); 
    }); */

    /*$("button.fadout").click(function(){
        $("#div10").fadeTo("slow", 0.15);
        $("#div11").fadeTo("slow", 0.4);
        $("#div12").fadeTo("slow", 0.7); 
    }); */

    // The above principles apply to slide too
    // Then, jQuery animate() is used to create custom animations

    // Demonstrating jQuery animate()
    /*$("button.animate").click(function(){
        $("#div13").animate({left: '250px'});
    }); */

    //Animating multiple properties
   /* $("button.anim").click(function(){
        $("#div14").animate({
            left: '450px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    }); */

    //Animating using relative values
   /* $("button.multi").click(function(){
        $("#div15").animate({
            left: '250px',
            opacity: '0.5',
            height: '+=150px',
            width: '+=150px'
        }); 
    }); */

    //Animating using queue functionality
   /* $("button.queue").click(function(){
        var div = $("#div16");
        div.animate({height: '300px', opacity: '0.4'}, 2000)
        div.animate({width: '300px', opacity: '0.8'}, 2000)
        div.animate({height: '100px', opacity: '0.4'}, 2000)
        div.animate({width: '100px', opacity: '0.8'}, 2000)
    }); */

    // Demonstrating jQuery stop() - used for stopping an animation before it ends
    /*$("#flip").click(function(){
        $("#panel").slideDown(5000);
    })
    $("#stop").click(function(){
        $("#panel").stop();
    }); */

    // jQuery Callback functions
    // JavaScript statements are executed line by line. 
    // But with effects, the next line of codes could run when the effect us still runnig
    // This could create error(s). To prevent the errors, callback comes into the picture
    // syntax = $(selector).hide(speed, callback)
   /* $("button.call").click(function(){
        $("p.callback").hide("slow", function(){
            alert("The button is now hidden")
        })
    }) */

    // jQuery cahaining
    // With jQuery chaining, multiple actions and methods can be chained
    /*$("button.chain").click(function(){
        $("#chain").css("color", "green").slideUp(2000).slideDown(2000);
    }); */ 
    
});