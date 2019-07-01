class FundingRound

  attr_reader  :startup, :venture_capitalist, :investment
  attr_accessor :type

  @@all = []

  def initialize(startup:, venture_capitalist:, type:, investment:)
    @startup = startup
    @venture_capitalist = venture_capitalist
    @type = type
    self.investment = investment

    @@all << self
  end

  def self.all
    @@all
  end


  def investment=(value)
    if value > 0
      @investment = value.to_f
    else
      raise(RangeError, "value must be higher than 0") 
    end
  end

end
