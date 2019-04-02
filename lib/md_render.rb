require 'redcarpet'
require 'rouge'
require 'rouge/plugins/redcarpet'

class MDRender < Redcarpet::Render::HTML
  include Rouge::Plugins::Redcarpet
end

