require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "can get home" do
    get "/"
    assert_select "h2", "Bitcoin privacy by design"
  end
end
