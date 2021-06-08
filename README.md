# chaincase.cash
Our website runs on UX, Rails, Haml, Sass, and Love

## How to Run for Development
Prerequisites:
* ruby 2.6.0 ([install via RVM](https://rvm.io/rvm/install))
* [PostgreSQL](http://postgresguide.com/setup/install.html)
* bundler (`$ gem install bundle`)

### Run the following: 
From within the cloned repository

Start postgres daemon:
linux:
```console
service postgresql start
```
macOS:
```console
brew services start postgresql
```

[windows](https://stackoverflow.com/questions/36629963/how-to-start-postgresql-on-windows):
```console
pg_ctl -D "D:\PSG_SQL\data" restart
```

followed by:
```console
bundle install
rails db:setup
rails server
```

The server will be running on `localhost:3000`. Access via the browser. Changes will be hot-swapped when saved and reflected in the browser on refresh.
