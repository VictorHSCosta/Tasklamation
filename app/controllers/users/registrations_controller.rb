class Users::RegistrationsController < Devise::RegistrationsController
  def new
    render inertia: "Auth/Register"
  end
end
