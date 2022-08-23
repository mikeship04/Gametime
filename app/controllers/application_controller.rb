class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :authorize
    # before_action :is_authorized? move where needed and say, only: [:create]

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    def current_user
        @current_user ||= User.find_by_id(session[:user_id])
    end

    private

    def authorize
        #if i need to make an object {User: "Not Authorized"}
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
    end

    def is_authorized?
        permitted = current_user.admin?
        render json: { errors: {User: "does not have admin permission"}}, status: :forbidden unless permitted
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
