require_relative "../config/environment.rb"

def reload
  load "config/environment.rb"
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

startup1 = Startup.new(name: "startup1", domain: ".com", founder: "hipster dude")
startup2 = Startup.new(name: "startup2", domain: ".ie", founder: "mani")
startup3 = Startup.new(name: "startup3", domain: ".io", founder: "serg")
startup4 = Startup.new(name: "startup4", domain: ".net", founder: "anil")

investor1 = VentureCapitalist.new(name: "rich dude", total_worth: 100000)
investor2 = VentureCapitalist.new(name: "rich dude", total_worth: 100000)
investor3 = VentureCapitalist.new(name: "rich dude", total_worth: 10000000000)
investor4 = VentureCapitalist.new(name: "rich dude", total_worth: 1000000000000)

round1 = FundingRound.new(startup: startup1, venture_capitalist: investor1, type: "smth", investment: 1000)
round2= FundingRound.new(startup: startup1, venture_capitalist: investor2, type: "smth", investment: 1000)
round3 = FundingRound.new(startup: startup1, venture_capitalist: investor3, type: "smth", investment: 1000)
round4 = FundingRound.new(startup: startup2, venture_capitalist: investor1, type: "smth", investment: 1000)
round5 = FundingRound.new(startup: startup2, venture_capitalist: investor2, type: "smth", investment: 1000)
round6 = FundingRound.new(startup: startup2, venture_capitalist: investor2, type: "smth", investment: 1000)
round7 = FundingRound.new(startup: startup3, venture_capitalist: investor2, type: "smth", investment: 1000)
round8 = FundingRound.new(startup: startup3, venture_capitalist: investor1, type: "smth", investment: 1000)
round9 = FundingRound.new(startup: startup3, venture_capitalist: investor3, type: "smth", investment: 1000)
round10 = FundingRound.new(startup: startup4, venture_capitalist: investor4, type: "smth", investment: 1000)



binding.pry
0 #leave this here to ensure binding.pry isn't the last line
