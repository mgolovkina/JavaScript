(function($){
    $(function(){

    $('#submit').on('click', function(event) {
        event.preventDefault();

        $('#result').load(
            "validator.php",

            {
                username: $('#username').val(),
                password: $('#password').val(),
                email: $('#email').val(),
                gender: $('#gender').val(),
                credit_card: $('#credit_card').val(),
                bio: $('#bio').val()
            },

            function (data, textStatus) {
                console.log(data);
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
