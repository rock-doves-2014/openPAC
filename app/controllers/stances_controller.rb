class StancesController < ApplicationController
  include AuthsHelper

  def index
    @stances = Stance.all.map { |stance| stance.info }
  end

  def new
    @issues = Issue.all
    @positions = Position.all
    @policitians = Politician.all
    @stance = Stance.new
  end

  def show
    @stance = Stance.find(params[:id])
    @position = Position.find(@stance.position_id)
    @author = User.find(@stance.user_id)
  end

  def create
    @stance = current_user.stances.new(stances_params)
    if @stance.save
      redirect_to stance_path(@stance)
    else
      flash[:alert] = "ERROR: #{@stances.errors.full_messages.join("; ")}"
      render :new
    end
  end

  def destroy
    @stance = Stance.find(params[:id]).destroy
    redirect_to :stances
  end

  private
    def stances_params
      params.require(:stance).permit(:position_id)
    end
end