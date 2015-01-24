class UsersController < ApplicationController

	def show
		@legislator = Legislator.find(@id)
	end

	def index
		@legislators = Legislator.all
	end

end