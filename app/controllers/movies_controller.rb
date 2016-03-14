class MoviesController < ApplicationController

def index
  @movies = Movie.all.order(:Title)
  @movie_count = Movie.count
end

def results
  @movies = Movie.all
end

def show
  @movie = Movie.find(params[:id])
end

def new
  @movie = Movie.new
end

def edit
  @movie = Movie.find(params[:id])
end

def create
  @movie = Movie.new(movie_params)

  if @movie.save
    # redirect_to @movie
    redirect_to root_path, notice: @movie.Title + " was added!"
    # redirect_to search_path, notice: @movie.Title + " was added!"

  else
    render 'new'
  end
end

def update
  @movie = Movie.find(params[:id])

  if @movie.update(movie_params)
    redirect_to @movie
  else
    render 'edit'
  end
end

def destroy
  @movie = Movie.find(params[:id])
  @movie.destroy

  redirect_to movies_path
end

private
  def movie_params
    params.require(:movie).permit(:imdbID, :Title, :Poster, :Year)
  end

end
