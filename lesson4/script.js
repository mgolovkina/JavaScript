(function($){
    $(function(){
        $('p').each(function(index){
            if (index != 0)
                $(this).hide();
        });

        $('li').eq(0).addClass('selected-tab');

        $('li').click(function(event){
            var idx = $('li').index(event.target);

            $(this).addClass('selected-tab');
            $('p').eq(idx).show();

            $('p').each(function(index){
                if (index != idx)
                    $(this).hide();
            });

            $('li').each(function(index){
                if (index != idx)
                    $(this).removeClass('selected-tab');
            });
        });

    });
})(jQuery);
