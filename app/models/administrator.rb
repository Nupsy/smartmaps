class Administrator < ActiveRecord::Base
  belongs_to :user
  
  attr_accessible :user_id
  
  validates :user_id,  :presence => true,
					   :uniqueness => true
end
