class Area < ApplicationRecord
    has_many :walls, dependent: :delete_all
end
