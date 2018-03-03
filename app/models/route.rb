class Route < ApplicationRecord
  belongs_to :wall,  dependent: :delete_all
end
