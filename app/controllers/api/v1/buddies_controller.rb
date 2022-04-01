class Api::V1::BuddiesController < ApplicationController
  before_action :set_buddy, only: [:show, :edit, :update, :destroy]

  # GET /buddies
  # GET /buddies.json
  def index
    @buddies = Buddy.all
    render json: @buddies
  end

  # GET /buddies/1
  # GET /buddies/1.json
  def show
    if @buddy
      render json: @buddy
    else
      render json: @buddy.errors
    end
  end

  # GET /buddies/new
  def new
    @buddy = Buddy.new
  end

  # GET /buddies/1/edit
  def edit
  end

  # POST /buddies
  # POST /buddies.json
  def create
    @buddy = Buddy.new(buddy_params)


    if @buddy.save
      render json: @buddy
    else
      render json: @buddy.errors
    end
  end

  # PATCH/PUT /buddies/1
  # PATCH/PUT /buddies/1.json
  def update
  end

  # DELETE /buddies/1
  # DELETE /buddies/1.json
  def destroy
    @buddy.destroy

    render json: { notice: 'buddy was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_buddy
      @buddy = buddy.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def buddy_params
      params.permit(:first_name, :last_name, :age, :address)
    end
end
