class Upvote < ActiveRecord::Base
  belongs_to :user
  belongs_to :stance
end