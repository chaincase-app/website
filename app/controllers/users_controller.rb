class UsersController < ApplicationController
  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to root_url, notice: 'Updates coming your way!'
    else
      redirect_to root_url, notice: "Failed to save. If you're not already signed up, try again"
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email)
    end
end
