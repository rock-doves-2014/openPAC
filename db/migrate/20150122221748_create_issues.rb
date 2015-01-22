class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.text :description
    end
  end
end
