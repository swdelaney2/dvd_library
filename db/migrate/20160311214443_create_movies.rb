class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :imdbID
      t.string :Title
      t.string :Poster
      t.string :Year

      t.timestamps null: false
    end
  end
end
