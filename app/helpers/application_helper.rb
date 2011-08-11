module ApplicationHelper
  def icon(name)
    content_tag('span', '',
      :class => "ui-icon ui-icon-#{name.to_s}").html_safe
  end

  def icon_button(name)
    content_tag('div',
      icon(name),
      :class => "ui-state-default ui-corner-all icon-button")
  end
end
