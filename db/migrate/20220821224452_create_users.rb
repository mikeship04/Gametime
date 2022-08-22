class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.integer :wins
      t.integer :losses
      t.integer :games_played
      t.string :username
      t.string :email
      t.string :password_digest
      t.boolean :admin

      t.timestamps
    end
  end
end
