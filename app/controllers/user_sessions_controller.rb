class UserSessionsController < ApplicationController

  layout 'application'
  layout 'login', :only => :new 

	def new
  	end

 	def create
    	if login(params[:email], params[:password])
          @user = User.find_by_email(params[:email])
      		redirect_back_or_to(edit_user_path(@user))
    	else
      	flash.now.alert = "Login failed."
      	render action: :new
    	end
 	end

	def destroy
	    logout
	    redirect_to(root_path, "data-no-turbolink"=>true)
	end
end
