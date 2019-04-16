require 'nokogiri'
require 'ostruct'

class StaticPagesController < ApplicationController
  def home
    # get blog previews from all of the md posts

    posts = Post.get_posts 
    @blog_previews = []
    posts.first(5).each do |post|
      post = Post.new(post)
      preview = OpenStruct.new
      preview.content = get_preview(post)
      preview.name = post.name
      @blog_previews << preview
    end
  end

  private

  def get_preview(post)
    post = render_to_string partial: "blog/#{post.name}"
    #whitespace .gsub(/\s+/, ""
    doc = Nokogiri::HTML(post)
    post = doc.xpath('//body/*[position() < 6]').to_html()
    @post = render_to_string inline: post
  end

end
