class UserSerializer < ActiveModel::Serializer
  attributes :id, :wins, :losses, :games_played, :username, :email, :password_digest, :admin, :coins
end
