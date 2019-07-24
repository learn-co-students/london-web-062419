class BloggersController < ApplicationController
  before_action :blogger_id, only: [:show]

  def index
    @bloggers = Blogger.all
  end

  def show
  end

  private

  def blogger_id
    @blogger = Blogger.find(params[:id])
  end
end
