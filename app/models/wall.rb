class Wall < ApplicationRecord
  belongs_to :area, dependent: :destroy
end
