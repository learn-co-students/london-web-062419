class PetsController < ApplicationController
  before_action :authorize_user, only: [:new, :edit, :create, :update, :destroy]
  before_action :find_pet, only: [:show, :edit, :update]
  before_action :user_owns_pet?, only: [:edit, :update, :destroy]

  def about
  end

  def index
    @pets = Pet.all
  end

  def show
  end

  def new
    @pet = Pet.new
  end

  def edit
  end

  def create
    # Create pet here
    @pet = Pet.new(pet_params)
    @pet.user = current_user
    @pet.save
    if @pet.valid?
      redirect_to pets_path
    else
      render :new
    end
  end

  def update
    # Update pet here
    @pet.update(pet_params)
    redirect_to pet_path(@pet.id)
  end

  def destroy
    Pet.destroy(params[:id])
    redirect_to pet_path
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :age)
  end

  def find_pet
    @pet = Pet.find(params[:id])
  end

  def user_owns_pet?
    unless @pet.user == current_user
      flash[:notice] = "Please don't mess with other people's pets :("
      redirect_to pet_path
    end
  end

end
