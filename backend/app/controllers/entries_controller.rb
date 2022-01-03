class EntriesController < ApplicationController
    def index
        entry = current_user.entries
        render json: entry.order(created_at: :desc)
        
    end

    def show
        entry = current_user.entries.find_by(id: params[:id])
        if entry 
            render json: entry
        else 
            render json: {error: "entry not found"}, status: :not_found
        end
    end

    def create
        entry = Entry.create(entry_params)
        if entry.valid? 
            render json: entry, status: :created
        else 
            render json: { error: entry.errors.full_messages}, status: :unprocessable_entity
        end
    end


    def update
        entry = Entry.find_by(id: params[:id])
        if entry
            entry.update(entry_params)
            render json: entry, status:200
        else 
            render json: { error: "entry not found"}, status: :not_found
        end
    end


    def destroy
        entry = Entry.find_by(id: params[:id])
        if entry 
            entry.destroy
            head :no_content
        else  
            render json: { error: "entry not found"}, status: :not_found
        end
    end

    private

    def entry_params
        params.permit(:title, :details, :image, :project_id, :tag)

    end

    def is_authorized
        permitted = current_user.admin? 
        render json: "Accessibility is not permitted", status: :forbidden unless permitted
      end

      
    def keeporder
        :updated_at == :created_at
    end
      
end




