source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.6.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.2.4.6'
# Provide Haml generators for rails
gem 'haml-rails', '~> 1.0'
# Render Markdown as HTML
gem 'kramdown', '2.3.1'
# Use Puma as the app server
gem 'puma', '~> 4.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use SCSS for stylesheets
gem 'sassc-rails', '2.1.0'
# Use meta tags for previews
gem 'meta-tags', '2.18.0'

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'

gem 'mimemagic', github: 'mimemagicrb/mimemagic', ref: '01f92d86d15d85cfd0f20dabd025dcbd36a8a60f'

# Required for cap deploy via net-ssh 4.0
gem 'ed25519', '>= 1.2', '< 2.0'
gem 'bcrypt_pbkdf', '>= 1.0', '< 2.0'

group :production do
  # Use postgres as the database for Active Record
  gem 'pg', '>= 0.18', '< 2.0'
end

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'sqlite3', '1.3.11'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'capistrano', '3.11'
  gem 'capistrano-rails', '1.4'
  gem 'capistrano-rvm'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "bootsnap", "~> 1.4"
