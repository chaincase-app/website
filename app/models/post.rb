require 'find'
require 'nokogiri'

class Post
  extend ActiveModel::Naming
  attr_reader :name

  def initialize(path)
    path = path[path.index('_')+1..-1]
    @name = path[0..path.index('.')-1]
    puts @name
  end

  def self.get_posts
    posts = []
    posts_paths = []
    Find.find('app/views/blog/') do |path|
      posts_paths << path if path =~ /\/_/

    end
    puts posts_paths
    posts_paths
  end

  def get_preview
    post = render_to_string partial: @name 
    #whitespace .gsub(/\s+/, ""
    doc = Nokogiri::HTML(post)
    post = doc.xpath('//body/*[position() < 5]').to_html()
    @post = render_to_string inline: post
  end

  def get_posts
  end
  
 
end
