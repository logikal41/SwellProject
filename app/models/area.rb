class Area < ApplicationRecord
    belongs_to :group
    has_many :walls, dependent: :destroy
end
