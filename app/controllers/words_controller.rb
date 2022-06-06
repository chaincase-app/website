class WordsController < ApplicationController
  def show
    @essay = params[:essay]
  end
end

