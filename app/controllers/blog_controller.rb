class BlogController < ApplicationController
  def show
    @post
    File.open('public/posts/1.md', 'r') do |f|
      f.each_line do |line|
        @post = line
      end
    end
  end
end
