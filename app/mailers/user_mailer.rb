class UserMailer < ApplicationMailer
  default from: Rails.application.credentials.mail[:email]

  def sign_up_email
    @user = params[:user]
    @url  = 'https://chaincase.app'
    mail(to: 'dan@chaincase.cash', subject: @user.email + ' signed up')
  end
end
