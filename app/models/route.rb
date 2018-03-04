class Route < ApplicationRecord
  belongs_to :wall,  dependent: :destroy
end
