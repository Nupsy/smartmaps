class AddSaltToAdministrators < ActiveRecord::Migration
  def change
    add_column :administrators, :salt, :string
  end
end
