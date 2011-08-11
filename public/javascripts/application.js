/* DO NOT MODIFY. This file was compiled Thu, 11 Aug 2011 01:28:49 GMT from
 * /home/bartlowa/Projects/backbone/app/coffeescripts/application.coffee
 */

(function() {
  $(function() {
    $.datepicker.setDefaults({
      dateFormat: 'yy-mm-dd'
    });
    $('[data-datetimepicker]').datetimepicker();
    $('[data-timepicker]').timepicker();
    $('[data-datepicker]').datepicker();
    $(':button').each(function() {
      var opts, self;
      opts = {};
      self = $(this);
      if (self.attr('data-icon')) {
        opts.icons = {
          primary: 'ui-icon-' + self.attr('data-icon')
        };
      } else if (self.attr('data-icon-only')) {
        opts.icons = {
          primary: 'ui-icon-' + self.attr('data-icon-only')
        };
        opts.text = false;
      }
      return self.button(opts);
    });
    return $('.buttonset').buttonset();
  });
}).call(this);
