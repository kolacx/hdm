"use strict";
// define(["jquery"], function($) {
   
    
    
$(function () {
    $("[name=send]").click(function () {

        $(":input.error").removeClass('error');
        $(".allert").remove();
        var error;
        var btn = $(this); 
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea, select');
        var send_btn = btn.closest('form').find('[name=send]');

        var ch = btn.closest('form').find('[name=otr]').val();


         $(ref).each(function() {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<span class="allert">Fill this field</span>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if(!pattern.test($(this).val())) {
//                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<span class="allert">Enter a valid e-mail</span>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
                var patterntel = /^[+]?(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?)(?:[ -]?(?:\(\d+(?:\.\d+)?\)|\d+(?:\.\d+)?))*(?:[ ]?(?:x|ext)\.?[ ]?\d{1,5})?$/;
                if ( $(this).attr("type") == 'tel') {
                    if(!patterntel.test($(this).val())) {
//                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<span class="allert">Enter a valid phone number</span>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
                
                 var patterntext = /^([a-z])[a-z]/i;
                if ($(this).attr("type") == 'text') {
                    if(!patterntext.test($(this).val())) {
                        var errorfield = $(this);
                        $(this).addClass('error').parent('.field').append('<span class="allert">input letters only</span>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }

                if ($(this).attr("type") == 'selec') {
                    if($(this).val() == null) {
                        var errorfield = $(this);
                        $(this).addClass('error').parent('.field').append('<span class="allert">Choose your Experience</span>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        })


        if (!(error == 1)) {
            $(send_btn).each(function () {
                $(this).attr('disabled', true);
            });
            $(function () {
                var form = $(this).closest('form'),
					name = form.find('.name').val();
                if ($(this).val() == '') {
                    console.log('okk');
                            // $.fancybox.open({
                            //     src  : '#trueModal',
                            //     type : 'inline',
                            //     opts : {
                            //         afterShow : function( instance, current ) {
                            //             console.info( 'done!' );
                            //         }
                            //     }
                            // });

                }
            });
        } ;


        return false;
    })
});
    

    
    

    
    

// });

