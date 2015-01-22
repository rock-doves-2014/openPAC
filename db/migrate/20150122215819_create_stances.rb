class CreateStances < ActiveRecord::Migration
  def change
    create_table :stances do |t|
      t.references :user
      t.references :position
    end
  end
end
