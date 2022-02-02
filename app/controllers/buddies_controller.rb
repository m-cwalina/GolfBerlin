class BuddiesController < ApplicationController

  def index
    @buddies = Buddies.all
  end

end
