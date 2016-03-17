class AddOwnerToMovies < ActiveRecord::Migration
  def change
    add_column :movies, :owner, :string
  end
end
