class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :bio
      t.string :image 
      #will change with active storage above
      

      t.string :password_digest
      t.string :username
  
      t.timestamps
    end
  end
end
