class RemoveOverviewFromMovies < ActiveRecord::Migration[6.1]
  def change
    remove_column :movies, :overview, :string
  end
end
