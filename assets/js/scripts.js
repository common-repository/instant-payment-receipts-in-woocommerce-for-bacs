 jQuery(document).on('click', '.save-support', function (e) {

        var supporttitle = jQuery('.support-title').val();
        var supporttitle = jQuery('.support-title').val();
        var order_id = jQuery('.order_id').val();

        var querytype = jQuery('.support-query').val();
        var file_data = jQuery('#sortpicture').prop('files')[0];

        var form_data = new FormData();
        if (supporttitle == '') {
            jQuery('.support-title').css({"border": "1px solid red"})
            return false;
        } else {
            jQuery('.support-title').css({"border": "1px solid #e3ecf0"})
        }

        form_data.append('file', file_data);
        form_data.append('action', 'wbr_support_save');
        form_data.append('supporttitle', supporttitle);
        form_data.append('order_id', order_id);

        jQuery.ajax({
            url: myAjax.ajaxurl,
            type: 'post',
            contentType: false,
            processData: false,
            data: form_data,
            success: function (response) {
              jQuery(".res_scripts").html('<img src="'+response+'" width="150" height="150">');
            },  
            error: function (response) {
             console.log('error');
            }

        });
});
