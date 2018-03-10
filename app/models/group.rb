class Group < ApplicationRecord
    has_many :areas, dependent: :destroy
end
