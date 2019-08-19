class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    begin
      @user = User.find(params[:id])
      render json: @user, only: [:name, :id]
    rescue
      render json: {error: "couldn't find the user with id #{params[:id]}"}
    end
  end
end
