class UpdateAreasModel < ActiveRecord::Migration[5.1]
  def change
    change_table :areas do |t|
      t.belongs_to :group, foreign_key: true
    end
  end
end
