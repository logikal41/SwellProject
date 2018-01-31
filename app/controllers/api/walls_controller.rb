class Api::WallsController < ApplicationController

    def index 
        walls = Wall.all
        render json: walls
    end 

    def show
    end

    def update
    end

    def destroy
    end

end
