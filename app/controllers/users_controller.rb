class UsersController < ApplicationController
	include UsersHelper

  layout 'application'
  layout 'login', :only => :new 	

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
     	flash[:notice] = "Character created. Now login."
		redirect_to root_path
	end

	def edit
		@user = User.find(params[:id])
		unless session[:user_id].to_i == @user.id.to_i
     	 flash[:notice] = "You don't have access to that user!"
     	 redirect_to root_path
    	 return
    	end
	end

	def battles
		@user = User.find(params[:id])
		unless session[:user_id].to_i == @user.id.to_i
     	 flash[:notice] = "You don't have access to that user!"
     	 redirect_to root_path
    	 return
    	end
	end

	def equip
		@user = User.find(params[:id])
		unless session[:user_id].to_i == @user.id.to_i
     	 flash[:notice] = "You don't have access to that user!"
     	 redirect_to root_path
    	 return
    	end		
	end

	def update
	  	@user = User.find(params[:id])
  		@user.update(user_params)

  		redirect_to(:back)
	end
end
