module ApplicationHelper
  def icon(name)
    content_tag('span', '',
      :class => "ui-icon ui-icon-#{name.to_s}").html_safe
  end

  def icon_button(name, text="")
    opts = {
      :value => "button"
    }
    if text.empty?
      opts['data-icon-only'] = name
    else
      opts['data-icon'] = name
    end
    content_tag('button', "button", opts)
  end
end
