class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|

      t.string :title
      t.string :date #format?
      t.string :details
      t.string :due_date
      t.string :due_month
      t.string :due_year
      t.string :tag
      t.string :image

      t.integer :project_id


      t.timestamps
    end
  end
end
