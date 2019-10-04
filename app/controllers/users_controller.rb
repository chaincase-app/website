class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to "/", notice: 'Updates coming your way!'
      # no else, worst case, user already exists. Else, form should capture it
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email)
    end
end
