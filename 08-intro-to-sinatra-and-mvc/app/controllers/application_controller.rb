# The parent controller for the application; all other controllers will inherit from this one.
class ApplicationController < Sinatra::Base # Inherits from Sinatra base, giving it access to methods that will allow us to define our routes.

  # Tells this controller (and all that inherit from it) to look for the views directory one directory above the one this file is in when rendering views via erb.
  set :views, Proc.new { File.join(root, "../views")}
end
