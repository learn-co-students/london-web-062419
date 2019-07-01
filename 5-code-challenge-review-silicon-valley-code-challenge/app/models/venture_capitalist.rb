class VentureCapitalist
  
  attr_accessor :name, :total_worth

  @@all = []
    def initialize(name:, total_worth:)
      @name = name
      @total_worth = total_worth
      @@all << self
    end

    def self.all
      @@all
    end

    def self.tres_commas_club
      @@all.select{|venture_capitalist| venture_capitalist.total_worth > 1000000000}
    end

    def offer_contract(startup:, type:, amount:)
      FundingRound.new(startup: startup, venture_capitalist: self, type: type, amount: amount)
    end

    def funding_rounds
      FundingRound.all.select{|round| round.venture_capitalist == self}
    end

    def portfolio
      startups = funding_rounds.map{|round| round.startup}
      startup.uniq
    end

    def biggest_investment
      largest_funding = nil

      funding_rounds.map{|round| 
        if largest_funding == nil || round.investment > largest_funding.investment
          largest_funding = round
        end
      }

      largest_funding
    end

    def invested(domain)
      total_invested = 0

      funding_rounds.map{|round|
        if round.startup.domain == domain
          total_invested += round.investment
        end
      }
      
      total_invested
    end
end
