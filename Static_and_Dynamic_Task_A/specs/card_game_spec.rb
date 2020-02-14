require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("spade" ,1)
    @card2 = Card.new("heart" ,3)
    @card3 = Card.new("diamond" ,5)
    @your_cards = [@card1, @card2, @card3]
    @game = CardGame.new()
  end

  def test_check_if_card_is_Ace__true
    value = @game.checkforAce(@card1)
    assert_equal(true, value)
  end

  def test_check_if_card_is_Ace__false
    value = @game.checkforAce(@card2)
    assert_equal(false, value)
  end

  def test_highest_card__is_first_card
    value = @game.highest_card(@card2, @card1)
    assert_equal(@card2, value)
  end

  def test_highest_card__is_second_card
    value = @game.highest_card(@card2, @card3)
    assert_equal(@card3, value)
  end

  def test_cards_total
    value = @game.cards_total(@your_cards)
    assert_equal("You have a total of 9", value)
  end

end
