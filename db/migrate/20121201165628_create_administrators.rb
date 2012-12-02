class CreateAdministrators < ActiveRecord::Migration
  def change
    create_table :administrators do |t|
      t.references :user

      t.timestamps
    end
    add_index :administrators, :user_id
	
	#add a foreign key
    execute <<-SQL
      ALTER TABLE administrators
        ADD CONSTRAINT fk_administrator_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
    SQL
	
  end
end
