require 'rails_helper'

describe UpvotesController do
  it "creates an upvote in the db" do
    # Factory
    user = User.create(first_name: 'first', last_name: 'last', username: 'username', password: 'a', email: 'email@example.com')
    # You keep doing this pattern with user_id: 1, position_id: 1, why are we
    # repeating this? can you put that in a factory?
    stance = Stance.create(user_id: 1, position_id: 1)
    expect {
      post :create, upvote: {user_id: user.id, stance_id: stance.id }
    }.to change(Upvote, :count).by(1)
  end
end
