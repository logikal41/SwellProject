class Api::AreasController < ApplicationController

    def index
        areas = Area.all
        render json: areas
    end

    def show
    end

    def update
    end
# Hello
    def destroy
    end

end
