class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :imdbID

      t.timestamps null: false
    end
  end
end
