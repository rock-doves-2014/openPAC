class CreatePositions < ActiveRecord::Migration
  def change
    create_table :positions do |t|
      t.references :issue
      t.text :description
    end
  end
end
