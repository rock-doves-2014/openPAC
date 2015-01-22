class BillVote < ActiveRecord::Base
  belongs_to :bill
  belongs_to :politician
end