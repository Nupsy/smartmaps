class CreateAdministrators < ActiveRecord::Migration
  def change
    create_table :administrators do |t|
      t.string :username
      t.string :email
      t.text :password

      t.timestamps
    end
  end
end
