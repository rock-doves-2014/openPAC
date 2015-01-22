class PoliticianStance < ActiveRecord::Base
  belongs_to :politician
  belongs_to :stance
end