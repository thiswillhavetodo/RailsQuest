class AddOthermessageToUsers < ActiveRecord::Migration
  def change
    add_column :users, :othermessage, :string
  end
end
