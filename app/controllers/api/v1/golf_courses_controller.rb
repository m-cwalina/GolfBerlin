class Api::V1::GolfCoursesController < ApplicationController
    before_action :set_golfcourse, only: [:show, :edit, :update, :destroy]

  # GET /golfcourses
  # GET /golfcourses.json
  def index
    @golfcourses = GolfCourse.all
    render json: @golfcourses
  end

  # GET /golfcourses/1
  # GET /golfcourses/1.json
  def show
    if @golfcourse
      render json: @golfcourse
    else
      render json: @golfcourse.errors
    end
  end

  # GET /golfcourses/new
  def new
    @golfcourse = GolfCourse.new
  end

  # GET /golfcourses/1/edit
  def edit
  end

  # POST /golfcourses
  # POST /golfcourses.json
  def create
    @golfcourse = GolfCourse.new(golfcourse_params)


    if @golfcourse.save
      render json: @golfcourse
    else
      render json: @golfcourse.errors
    end
  end

  # PATCH/PUT /golfcourses/1
  # PATCH/PUT /golfcourses/1.json
  def update
  end

  # DELETE /golfcourses/1
  # DELETE /golfcourses/1.json
  def destroy
    @golfcourse.destroy

    render json: { notice: 'golf course was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_golfcourse
      @golfcourse = golfcourse.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def golfcourse_params
      params.permit(:location, :name, :par, :latitude, :longitude)
    end
end
