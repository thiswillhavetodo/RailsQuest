class UserSessionsController < ApplicationController
	def new
  	end

 	def create
    	if login(params[:email], params[:password])
      		redirect_back_or_to(edit_users_path(user), notice: 'Logged in successfully.')
    	else
      	flash.now.alert = "Login failed."
      	render action: :new
    	end
 	end

	def destroy
	    logout
	    redirect_to(root, notice: 'Logged out!')
	end
end
