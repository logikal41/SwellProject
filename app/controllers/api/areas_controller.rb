class Api::AreasController < ApplicationController

    def index
      render json: Area.all.order(id: :asc)
    end
  
    def show
      area = Area.find(params[:id])
      walls = area.walls
      render json: { area: area, walls: walls }
    end
  
    def update
      area = Area.find(params[:id])
      area.update(area_params)
      render json: area
    end
  
    def create
      area = Area.new(area_params)
      if area.save
          render json: area
      else
          render json: {errors: area.errors}, status: :unprocessable_entity
      end
    end
  
    def destroy
      Area.find(params[:id]).destroy
    end
  
    private
      def area_params
        params.require(:area).permit(:name, :description)
      end

end
