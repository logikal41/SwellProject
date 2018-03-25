class Api::GroupsController < ApplicationController

    def index
        render json: Group.all.order(id: :asc)
      end
    
      def show
        group = Group.find(params[:id])
        areas = group.areas.order(id: :asc);
        render json: { group: group, areas: areas }
      end
    
      def update
        group = Group.find(params[:id])
        group.update(group_params)
        render json: group
      end
    
      def create
        group = Group.new(group_params)
        if group.save
            render json: group
        else
            render json: {errors: group.errors}, status: :unprocessable_entity
        end
      end
    
      def destroy
        Group.find(params[:id]).destroy
      end
    
      private
        def group_params
          params.require(:group).permit(:name, :description)
        end

end
