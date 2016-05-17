class UsersController < ApplicationController
	include UsersHelper

	def index
		@users = User.all		
	end

	def show
		@user = User.find(params[:id])
	end

	def new
		@user = User.new		
	end

	def create
		@user = User.new(user_params)
		@user.save
		redirect_to edit_user_path(@user)
	end

	def edit
		@user = User.find(params[:id])
	end

	def update
	  	@user = User.find(params[:id])
  		@user.update(user_params)

  		redirect_to edit_user_path(@user)	
	end
end
