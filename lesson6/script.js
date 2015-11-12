(function($){
    $(function(){


    $('form').on('submit', function(event) {
        event.preventDefault();

        var params = $(this).serializeArray();

        $.post(
            "validator.php",
            params,
            function (data, textStatus) {
                $('div').css({'border': "none"});
                $('em').text("");

                if (data.result == 'true') {
                    $(this).css({'color': 'green'});
                    $(this).text("Form is valid");
                }
                else {
                    var errors = data.error;
                    var css_set = {'border': "1px solid red"};

                    if (errors['Username'])
                    {
                       $("input[name='username']").parent().css(css_set);
                       $("input[name='username']").next().text('Error: ' + errors['Username']);
                    }
                    if (errors['Password'])
                    {
                        $("input[name='password']").parent().css(css_set);
                        $("input[name='password']").next().text('Error: ' + errors['Password']);
                    }
                    if (errors['Email'])
                    {
                        $("input[name='email']").parent().css(css_set);
                        $("input[name='email']").next().text('Error: ' + errors['Email']);
                    }
                    if (errors['Gender'])
                    {
                        $("input[name='gender']").parent().css(css_set);
                        $("input[name='gender']").next().text('Error: ' + errors['Gender']);
                    }
                    if (errors['Credit Card'])
                    {
                        $("input[name='credit_card']").parent().css(css_set);
                        $("input[name='credit_card']").next().text('Error: ' + errors['Credit Card']);
                    }
                    if (errors['Bio'])
                    {
                        $("textarea[name='bio']").parent().css(css_set);
                        $("textarea[name='bio']").next().text('Error: ' + errors['Bio']);
                    }
                }
            },
            "json"
        );
    });

    });
})(jQuery);
