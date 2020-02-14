### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)
    if card.value = 1 # double equals sign required
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)   # "dif" should be "def"  / coma missing between arguments
  if card1.value > card2.value
    return card      # 1 missing, should be card1
  else
    return card2
  end
end
end #unnecessary end

def self.cards_total(cards)
  total    # value needs to be assigned (0)
  for card in cards
    total += card.value
    return "You have a total of" + total #return should be outside of the for loop and interpolation should be used 
  end
end

#class end missing
```
