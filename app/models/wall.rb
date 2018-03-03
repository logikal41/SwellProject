class Wall < ApplicationRecord
  belongs_to :area, dependent: :destroy
  has_many :routes
end
