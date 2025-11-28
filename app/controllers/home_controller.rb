class HomeController < ApplicationController
    def index
        render inertia: "Home", props: {
            welcomeMessage: "Welcome to the Home Page!"
        }
    end
end
