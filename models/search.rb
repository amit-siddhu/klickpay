class Search < ActiveRecord::Base
  
  validates :keyword, presence: true
  validates :keyword, length: { minimum: 2, maximum: 176 }
  
end
