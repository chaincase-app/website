require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "can get home" do
    get "/"
    assert_select "h2", "Bitcoin privacy by design"
  end

  test "can sign up email" do
    post "/users",
      params: { user: { email: "dan@chaincase.cash" } }
    assert_response :redirect
    follow_redirect!
    assert_response :success
    assert_select ".alert", "Updates coming your way!"
  end
end
