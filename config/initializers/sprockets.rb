require 'markdown_preprocessor'

Sprockets.register_preprocessor('text/markdown; charset=UTF-8', MarkdownPreprocessor.new)
