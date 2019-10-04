class User < ApplicationRecord
  before_save { |user| user.email = user.email.downcase }
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: URI::MailTo::EMAIL_REGEXP, message: 'invalid address format' },
                    uniqueness: true
end
