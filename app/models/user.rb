require 'digest'

class User < ActiveRecord::Base

  attr_accessible :birthdate, :email, :name, :username, :password, :password_confirmation

  validates :username,  :presence => true,
					    :uniqueness => true
						
  validates :email, :presence => true,
					:uniqueness => true
					
  validates_format_of   :email,
                        :with       => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i,
                        :message    => 'email must be valid'
    
  # Automatically create the virtual attribute 'password_confirmation'.
  validates :password, :presence     => true,
                       :confirmation => true,
                       :length       => { :within => 6..250 }
  
  validates_confirmation_of :password
  
					   

  #class method that authenticates a administrator, used to create a session cookie
  def self.authenticate(username, submitted_password)
    user = find_by_username(username)
    return nil if user.nil?
    return user if user.has_password?(submitted_password)
  end

  #used to authenticate a signed administrator from a signed cookie 
  def self.authenticate_with_salt(id, cookie_salt)
    user = find_by_id(id)
    return nil if user.nil?
    return user if user.salt == cookie_salt
  end

  #callback that occurs before a record is successfully saved (meaning it has a valud password)                      
  before_save :encrypt_password

  def has_password?(submitted_password)
    password == encrypt(submitted_password)
  end

  private

    #self keyword is required when assigning to a instance attribute
    def encrypt_password
	  self.salt = make_salt if new_record?
	  self.password = encrypt(password) if password.present?
	end

    def encrypt(string)
      secure_hash("#{salt}--#{string}")
    end

    def make_salt
      secure_hash("#{Time.now.utc}--#{password}")      
    end

    def secure_hash(string)
      Digest::SHA2.hexdigest(string)
    end
  
end
