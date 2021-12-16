class User < ApplicationRecord
    has_one_attached :avatar 
    # //active storage model above
    has_secure_password

    has_many :entries
    has_many :projects, through: :entries

end
