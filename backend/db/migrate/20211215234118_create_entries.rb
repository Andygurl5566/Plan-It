class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|

      t.string :title
      t.string :date #format?
      t.string :details
      t.string :start_date
      t.string :due_date
      t.string :tag
      t.string :image

      t.integer :project_id


      t.timestamps
    end
  end
end
