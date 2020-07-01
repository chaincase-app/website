class ApplicationMailer < ActionMailer::Base
  default from: Rails.application.credentials.mail[:email]
  layout 'mailer'
end
