class Api::AreasController < ApplicationController


    def index 
        areas = Area.all
        render json: areas
    end 


end
