// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
//
  $(function(){
    //$.datetimepicker.setDefaults({dateFormat: 'yy-mm-dd'});
    $.datepicker.setDefaults({dateFormat: 'yy-mm-dd'});
    $('[data-datetimepicker]').datetimepicker();
    $('[data-timepicker]').timepicker();
    $('[data-datepicker]').datepicker();
  });
