class BlogController < ApplicationController
  def show
    @post = params[:post]
  end
end
