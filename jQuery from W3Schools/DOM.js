// alert("Hello World")

$(document).ready(function(){
    // demonstrating how to get contents with jQuery text() and html()
   /* $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });

    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    }); */
 
    //demonstrating how to get the value of an input field with jQuery val()
    /*$("button.val").click(function(){
        alert("The value is " + $("#form").val());
    }); */

    //demonstrating how to get the value of an input field with jQuery val()
    /* $("button.href").click(function(){
         alert($("#href").attr("href"));
     }); */
     
     // demonstrating how to set contents with jQuery text() and html()
     /*$("#btn-set1").click(function(){
         $("#set1").text("Hello World, Hello Africa");
     });
     $("#btn-set2").click(function(){
        $("#set2").html("<b>Hello World</b>, <b>Hello Africa</b>");
    });
    $("#btn-set3").click(function(){
        $("#set3").val("Koladevs Blog is coming");
    }); */

    // demonstrating callback functions for text(), val() and html()
    // All the three jQuery methods also come with a callback function.
    // The callback function has two parameters: the index of the current
    // element in the list of elements selected and the original (old) val
    // One then return the string one wishes to use as the new value from the function
    /*$("button#btn-call1").click(function(){
        $("#callb1").text(function(i, origText){
            return "Old Text: " + origText + " New Text: Hello World, Hello Africa (index: " + i + ")";
        }); 
    });
    $("button#btn-call2").click(function(){
        $("#callb2").html(function(i, origText){ 
            return "Old HTML: " + origText + " New HTML: Hello World, <b>Hello Africa</b> (index: " + i + ")";
        }); 
    }); */

    // demonstrating set attribute
    // Used for setting and changing attributes
    /*$("#setbtn").click(function(){
        $("#setter").attr({
            "href" : "https:koladevs.com",
            "title" : "Kolade's blog"
        }); 
    }); 
    // Just like set and get, attr also has its callback */

    // demonstrating Add 
    // append()
    // prepend()
    // after()
    // before()
   /* $("button#append1").click(function(){
        $("p.app").prepend(" <b>Appended Text</b>.")
    });
    $("button#append2").click(function(){
        $("ol").append(" <li>Appended List</li>.")
    }); */

    // Appending multiple text
    /*function appendText() {
        var txt1 = "<p>A text</p>"; //Created with HTML
        var txt2 = $("<p></p>").text("Another Text"); //Createed with jQuery
        var txt3 = document.createElement("p");
        txt3.innerHTML = "One more text" //Created with JS DOM
        $("body").append(txt1, txt2, txt3); //Append new elements
        // Didn't work
        // Same applies to after() and before() 
    } */

    // demonstrating remove() and empty
    // remove() removes the selected element and its child elements
    // empty() removes the child elements from the selected element
   /* $("button.remove").click(function(){
        $("#div1").empty()
    }); */
    // The elements to be removed can also be filtered
    // Example: $("p").remove(".test, .demo") removes all classes test and demo

    // Manipulating CSS with jQuery
    // addClass() adds one or more classes to the selected elements
    // removeClass() removes one or more classes from the selected element
    // toggleClass() toggles between two css classes
    // css() sets or returns the style attribute
});   