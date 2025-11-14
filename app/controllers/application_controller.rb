class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  inertia_share do
    {
      flash: {
        notice: flash.notice,
        alert:  flash.alert
      },
      current_user: current_user&.slice(:id, :email)
    }
  end
end
