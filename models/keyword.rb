class Keyword < ActiveRecord::Base
  
  validates :keyword1, presence: true
  validates :keyword1, length: { minimum: 2, maximum: 20 }
  
  validates :keyword2, presence: true
  validates :keyword2, length: { minimum: 2, maximum: 20 }
  
  
  validates :keyword3, length: { minimum: 2, maximum: 20 }
  
  
  validates :keyword4, length: { minimum: 2, maximum: 20 }
  
  
  validates :keyword5, length: { minimum: 2, maximum: 20 }
  
  
  validates :keyword6, length: { minimum: 2, maximum: 20 }
  
  
  validates :keyword7, length: { minimum: 2, maximum: 20 }
  
  
  validates :keyword8, length: { minimum: 2, maximum: 20 }
  
end
