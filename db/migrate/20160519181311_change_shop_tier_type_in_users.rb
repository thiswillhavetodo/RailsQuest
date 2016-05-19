class ChangeShopTierTypeInUsers < ActiveRecord::Migration
  def change
  	change_column :users, :shopTier, :text, default: 1
    change_column :users, :email, :string, :null => false
    change_column :users, :crypted_password, :string, :null => false
    change_column :users, :salt, :string, :null => false  	
  end
end
