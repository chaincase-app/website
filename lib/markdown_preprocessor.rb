require 'md_render'
require 'redcarpet'

class MarkdownPreprocessor
    parser = Redcarpet::Markdown.new(MDRender.new, fenced_code_blocks: true, lax_spacing: true, highlight: true)
  def call(input)
    return { data: parser.render(input[:data]) }
  end
end

