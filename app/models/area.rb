class Area < ApplicationRecord
    has_many :walls, dependent: :destroy
end
