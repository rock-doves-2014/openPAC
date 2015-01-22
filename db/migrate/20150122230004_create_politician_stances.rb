class CreatePoliticianStances < ActiveRecord::Migration
  def change
    create_table :politician_stances do |t|
      t.references :politician
      t.references :stance
    end
  end
end
