module ApplicationHelper
  def icon(name)
    content_tag('span', '',
      :class => "ui-icon ui-icon-#{name.to_s}").html_safe
  end

  def icon_button(name, *args)
    opts = args.extract_options!
    text = args[0] || name
    opts = {
      :value => text
    }
    unless args[0]
      opts['data-icon-only'] = name
    else
      opts['data-icon'] = name
    end
    content_tag('button', text, opts)
  end
end
