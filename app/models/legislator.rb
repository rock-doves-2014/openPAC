class Legislator < ActiveRecord::Base
  has_many :legislator_stances
  has_many :stances, through: :legislator_stances
  has_many :bill_votes
  has_many :bills, through: :bill_votes
  has_many :terms
  has_one :alias
  has_many :donations
  has_many :legislator_issues
  has_many :issues, through: :legislator_issues

  validates_uniqueness_of :bioguide_id
  validates_presence_of :bioguide_id, :first_name, :last_name

  # Smells like a bad name.  `full_name`, `anglo_saxon_standard_full_name` ?
  def name
    "#{first_name} #{last_name}"
  end
end
