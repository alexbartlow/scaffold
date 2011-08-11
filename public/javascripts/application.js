// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
//
  $(function(){
    //$.datetimepicker.setDefaults({dateFormat: 'yy-mm-dd'});
    $.datepicker.setDefaults({dateFormat: 'yy-mm-dd'});
    $('[data-datetimepicker]').datetimepicker();
    $('[data-timepicker]').timepicker();
    $('[data-datepicker]').datepicker();
    $(':button').each(function() {
      var opts = {};
      var self = $(this);
      if(self.attr('data-icon')) {
        opts.icons = { primary : 'ui-icon-'+self.attr('data-icon')}
      } else if (self.attr('data-icon-only')) {
        opts.icons = {
          primary : 'ui-icon-'+self.attr('data-icon-only')
        };
        opts.text = false;
      }

      self.button(opts);
    });
    $('.buttonset').buttonset();
  });
