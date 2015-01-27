var $ = jQuery.noConflict();


function seomgr_show_popup(popup_id, title, data_id) {
    var seomgr_ajaxurl = ajaxurl + '?page=' + popup_id;
    data_id = data_id == 'undefined' ? 0 : data_id;
    var data = {
        'action': popup_id,
        'data_id': data_id
    };
    // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
    $.post(seomgr_ajaxurl, data, function (response) {
        $("#dialog").html(response);
        $("#dialog").dialog(
                {
                    minWidth: 500,
                    modal: true,
                    title: title
                }
        );
    });
}

function seomgr_delete(popup_id, data_id) {
    var seomgr_ajaxurl = ajaxurl + '?page=' + popup_id;
    data_id = data_id == 'undefined' ? 0 : data_id;
    var data = {
        'action': popup_id,
        'data_id': data_id
    };
    // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
    $.post(seomgr_ajaxurl, data, function (response) {
        response = $.parseJSON(response);
        if (response.status == 'success') {
            show_alert('success', response.msg);
        } else {
            show_alert('error', response.msg);
        }
        //$("#dialog").dialog();
    });
}


function seomgr_save_form(form_id, ajax_notification) {
    var seomgr_ajaxurl = ajaxurl + '?page=' + form_id;
    var data = $('#' + form_id).serialize();
    console.log();
    console.log(data);
    // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
    $.post(seomgr_ajaxurl, data, function (response) {
        response = $.parseJSON(response);
        $("#dialog").dialog("close");
        if (response.status == 'success') {
            show_alert('success', response.msg);
        } else {
            show_alert('error', response.msg);
        }

    });
}

function show_alert(type, message) {
    $('.alert').html(message);
    $('.alert').addClass('alert-info').show();
    $("html, body").animate({scrollTop: 0}, 600);
    setTimeout(function () {
        $('.alert').hide();
        $('.alert').removeClass('alrt_info');
        $('.alert').html('');
        window.location.reload();
    }, 2000);
}
