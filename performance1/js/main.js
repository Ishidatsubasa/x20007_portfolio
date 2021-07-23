$(function() {
    $("#typo").on("mouseover", function() {
        $("#typo").css("color", "#3498db");
    });
});
$(function() {
    $("#typo")
        .on("mouseover", function() {
            $("#typo").animate(
                {
                    "opacity" : 0,
                    "font-size" : "0px"
                },
                
                3000,
                "linear",
                function() {
                    $("#typo").css("color", "#3498db");
                    $("#typo").animate(
                        {
                            "opacity" : 1,
                            "font-size" : "120px"
                        },
                        1000
                    );
                    $("#typo").on("mouseover", function() {
                        $("#typo").css("color", "red");
                    });
                }
            );
        });
});

