class CreateBillVotes < ActiveRecord::Migration
  def change
    create_table :bill_votes do |t|
      t.references :bill
      t.references :politician
    end
  end
end
