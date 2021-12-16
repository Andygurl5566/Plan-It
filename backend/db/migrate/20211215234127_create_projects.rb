class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|

      t.string :title
      t.string :image
      t.string :tag
      t.string :start_date
      t.string :due_date

      t.timestamps
    end
  end
end
