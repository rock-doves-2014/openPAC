require 'rails_helper'

describe StancesController do
  describe 'GET #new' do
    it "renders the #new template" do
      get :new
      expect(response).to render_template :new
    end

  end

  describe 'POST #create' do

    let(:user) {FactoryGirl.create(:user)}
    it "redirects to #show" do
      session[:id] = user.id
      # You don't want hard-coded values in your test like this.
      @stance = { position_id: 1, user_id: 1}
      post :create, {stance: @stance}
      expect(response).to redirect_to stance_path(Stance.last)
    end

  end

  describe 'GET #show' do
    it "renders the #show template" do
      FactoryGirl.create(:position) #let()
      FactoryGirl.create(:user) #let()
      @stance = Stance.create(position_id: 1, user_id: 1) #user.stances.create() ?
      get :show, id: @stance.id
      expect(response).to render_template :show
    end

  end

  describe 'GET #destroy' do
    it "redirects to #index" do
      @stance = FactoryGirl.create( :stance )
      get :destroy, id: @stance.id
      expect(response).to redirect_to stances_path
    end

  end

end
