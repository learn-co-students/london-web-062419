class Startup

  attr_reader :founder, :domain
  attr_accessor :name

  @@all = []

  def initialize(name:, founder:, domain:)
    @name = name
    @founder = founder
    @domain = domain
    @@all << self
  end

  def pivot(name:, domain:)
    @domain = domain
    @name = name
  end

  def self.all
    @@all
  end

  def self.find_by_founder(founder_name)
    @@all.find{|startup| startup.founder == founder_name}
  end

  def self.domains
    domain = @@all.map{|startup| startup.domain}
    domain.uniq
  end

  def sign_contract(investor:, type:, investment:)
    FundingRound.new(startup: self , venture_capitalist: investor, type: type, investment: investment)
  end

  def funding_rounds
    FundingRound.all.select{|round| round.startup == self}
  end

  def num_funding_rounds
    funding_rounds.length
  end

  def total_funds
    total_funds = 0

    all_funding_rounds.map{|round| total_funds += round.investment}
    total_funds

  end

  def investors
    investors = funding_rounds.map{|round| round.venture_capitalist}
    investors.uniq
  end

  def big_investors
    investors.select{|investor| VentureCapitalist.tres_commas_club.include?(investor)}
  end

end
