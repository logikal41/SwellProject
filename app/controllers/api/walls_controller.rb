class Api::WallsController < ApplicationController

    def index 
        walls = Wall.all
        render json: walls
    end 

end
