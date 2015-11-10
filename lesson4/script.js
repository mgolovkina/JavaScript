(function($){
    $(function(){
        
        $('p').hide();

        $('li').eq(0).addClass('selected-tab');
        $('p').eq(0).show();

        $('li').click(function(event){
            var idx = $('li').index(event.target);

            $('li').removeClass('selected-tab');
            $(this).addClass('selected-tab');

            $('p').hide();
            $('p').eq(idx).show();
        });

    });
})(jQuery);
