require_relative("../card.rb")
require_relative("../testing_task_2.rb")
require("minitest/autorun")
require("minitest/rg")

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("spades", 1)
    @card2 = Card.new("clubs", 3)
    @game1 = CardGame.new()
  end

  def test_check_for_ace_true
    assert_equal(true, @game1.checkforAce(@card1))
  end

  def test_check_for_ace_false
    assert_equal(false, @game1.checkforAce(@card2))
  end

  def test_highest_card
    assert_equal(@card2, @game1.highest_card(@card1, @card2))
  end

  def test_card_totals
    cards = [@card1, @card2]
    assert_equal("You have a total of 4", @game1.cards_total(cards))
  end

end
