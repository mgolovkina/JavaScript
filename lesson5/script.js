(function($){
    $(function(){

    $('form').on('submit', function(event) {
        event.preventDefault();

        var params = $(this).serializeArray();

        $('#result').load(
            "validator.php",
            params,
            function (data, textStatus) {
                if (data == 'true') {
                    $(this).css({'color': 'green'});
                    $(this).text("Form is valid");
                }
                else {
                    $(this).css({'color': 'red'});
                    $(this).text("Form is not valid");
                }
            }
        );
    });

    });
})(jQuery);
