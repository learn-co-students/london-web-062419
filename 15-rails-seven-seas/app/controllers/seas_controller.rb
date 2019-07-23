class SeasController < ApplicationController
  #define your controller actions here
  before_action :sea_id, only: [:show, :edit, :update, :destroy]

  def index
    @seas = Sea.all
  end

  def show
  end

  def new
    @sea = Sea.new
  end

  def create
    @sea = Sea.new(sea_params)

    if @sea.valid?
      @sea.save

      redirect_to sea_path(@sea)
    else
      flash[:errors] = @sea.errors.full_messages

      render :new
    end
  end

  def edit
  end

  def update
    if @sea.update(sea_params)
      redirect_to sea_path(@sea)
    else
      flash[:errors] = @sea.errors.full_messages

      render :edit
    end
  end

  def destroy
    if @sea.destroy
      redirect_to seas_path
    else
      render :edit
    end
  end

  private

  def sea_id
    @sea = Sea.find(params[:id])
  end

  # In controller actions, use this private method to access sea params from forms.
  # Example: @sea.update(sea_params)
  # check the return value of sea_params to see what you're working with!
  def sea_params
    params.require(:sea).permit(:name, :temperature, :bio, :mood, :image_url, :favorite_color, :scariest_creature, :has_mermaids)
    # params.require!
  end
end
