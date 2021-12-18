class ProjectsController < ApplicationController

    
        def index
            project = current_user.projects
            render json: project.order(created_at: :desc)
        end
    
        def show
            project = current_user.projects.find_by(id: params[:id])
            if project 
                render json: project
            else 
                render json: {error: "Project not found"}, status: :not_found
            end
        end
    
        def create
            project = Project.new(project_params)
            project.user = @current_user
            project.save
            if project.valid? 
                render json: project, status: :created
            else 
                render json: { error: project.errors.full_messages}, status: :unprocessable_entity
            end
        end
    
    
        def update
            project = Project.find_by(id: params[:id])
            if project
                project.update(project_params)
                render json: project, status:200
            else 
                render json: { error: "project not found"}, status: :not_found
            end
        end
    
    
        def destroy
            project = Project.find_by(id: params[:id])
            if project 
                project.destroy
                head :no_content
            else  
                render json: { error: "Project not found"}, status: :not_found
            end
        end
    
        private
    
        def project_params
            params.permit(:title, :image, :description)
    
        end
    
        def is_authorized
            permitted = current_user.admin? 
            render json: "Accessibility is not permitted", status: :forbidden unless permitted
          end
          
    end
    

