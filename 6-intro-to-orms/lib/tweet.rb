class Tweet
  attr_accessor :message, :username, :id

  # READ
  def self.all
    # Define our SQL
    sql = "SELECT * FROM tweets;"
    # Execute it via our connection to the database, which returns an array of hashes which represent rows in the table
    results = DB[:conn].execute(sql)
    # Hydrate the results
    self.hydrate(results)
  end

  def self.hydrate(results)
    # Take our array of hashes from the database and turn it into an array of instances of Tweet
    results.map { |result| Tweet.new(result) }
  end

  # Takes a hash as an argument and sets the values of the instance variables to the values of the corresponding keys
  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
  end

  def save
    if self.id # If this instance has an id, it means it has already been to the database, so we update it; otherwise, we create it for the first time
      # UPDATE
      sql = "UPDATE tweets SET message = ?, username = ? WHERE id = ?;" # We use ? rather than directly interpolating the value in order to sanitise our data and prevent SQL injection
      DB[:conn].execute(sql, self.message, self.username, self.id)
    else
      # CREATE
      sql = "INSERT INTO tweets(message, username) VALUES(?, ?);"
      DB[:conn].execute(sql, self.message, self.username)
    end
  end

  # DELETE
  def self.destroy(id)
    sql = "DELETE FROM tweets WHERE id = ?;"
    DB[:conn].execute(sql, id)
  end
end
