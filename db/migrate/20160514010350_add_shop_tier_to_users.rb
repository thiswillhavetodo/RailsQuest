class AddShopTierToUsers < ActiveRecord::Migration
  def change
    add_column :users, :shopTier, :integer, default:1
  end
end
