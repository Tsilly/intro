class DropWelcomeRows < ActiveRecord::Migration
  def change
    drop_table(:welcome_rows)
  end
end
