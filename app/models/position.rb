class Position < ActiveRecord::Base
  has_many :stances
  belongs_to :issue
end