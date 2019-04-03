require 'redcarpet'
require 'rouge/plugins/redcarpet'

module ActionView
  module Template::Handlers
    class Markdown
      class_attribute :default_format
      self.default_format = Mime[:html]

      class << self
        def call(template)
          compiled_source = erb.call(template)
          "#{name}.render(begin;#{compiled_source};end)"
        end

        def render(template)
          markdown.render(template).html_safe
        end

        private

        def md_options
          @md_options ||= {
            fenced_code_blocks: true,
            lax_spacing: true,
            highlight: true,
            autolink: true,
          }
        end

        def markdown
          @markdown ||= Redcarpet::Markdown.new(MDRender, md_options)
        end

        # unused thus far
        def erb
          @erb ||= ActionView::Template.registered_template_handler(:erb)
        end

        def haml
          @erb ||= ActionView::Template.registered_template_handler(:haml)
        end
      end
    end
  end
end

class MDRender < Redcarpet::Render::HTML
  include Rouge::Plugins::Redcarpet
end

ActionView::Template.register_template_handler(:md, ActionView::Template::Handlers::Markdown)
