var myApp=new Framework7({animateNavBackIcon:true});var $$=Dom7;var mainView=myApp.addView('.view-main',{dynamicNavbar:true,domCache:true});

$(document).ready(function(){

jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    var offset = this.offsetHeight - this.clientHeight;
 
    var resizeTextarea = function(el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
});
    

$("textarea.title-input").keyup(function(){
  
    if ( $(".title-input").val().length >= 80 ) {
        $(  );
    }
        
});
    
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('.main-image-click').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
$(".main-image-input").change(function(){
        readURL(this);
});

    
});