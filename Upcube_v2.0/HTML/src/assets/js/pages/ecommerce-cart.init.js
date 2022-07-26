/*
Template Name: Upcube -  Admin & Dashboard Template
Author: Themesdesign
Contact: themesdesign.in@gmail.com
File: ecommerce cart Js File
*/

var defaultOptions = {
};

$('[data-bs-toggle="touchspin"]').each(function (idx, obj) {
    var objOptions = $.extend({}, defaultOptions, $(obj).data());
    $(obj).TouchSpin(objOptions);
});