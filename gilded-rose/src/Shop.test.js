import Shop from "./Shop";
import Item from "./Item";
function aShopWith(...items) {
  return new Shop(items)
}

function normalItem(sellIn, quality) {
  return new Item("normal", sellIn, quality);
}

function agedBrie(sellIn, quality) {
  return new Item("Aged Brie", sellIn, quality);
}


describe('Gilded rose shop', () => {
  test("SellIn and Quality decrease 1 after updateQuality", () => {
    //const item = normalItem(1, 3);
    //const shop = new Shop([item]);
    const shop = aShopWith(normalItem(1,3));
    //const expectedShop = aShopWith(normalItem(0,2));

    shop.updateQuality();

    const expectedShop = aShopWith(normalItem(0,2));

    //expect(item.sellIn).toEqual(0);
    //expect(item.quality).toEqual(2);
    //expect(shop).toEqual(aShopWith(normalItem(0,2)))
    expect(shop).toEqual(expectedShop);
  });

  test("Once the sell by date has passed, Quality degrades twice as fast", () => {
    //const item = normalItem(0, 4);
    //const shop = new Shop([item]);
    const shop = aShopWith(normalItem(0,4));
    //const expectedShop = aShopWith(normalItem(-1, 2));

    shop.updateQuality();
    const expectedShop = aShopWith(normalItem(-1, 2));

    //expect(item.sellIn).toEqual(-1);
    //expect(item.quality).toEqual(2);
    //expect(shop).toEqual(aShopWith(normalItem(-1,2)))
    expect(shop).toEqual(expectedShop);
  });

  test("The Quality of an item is never negative", () => {
    const shop = aShopWith(normalItem(1,0));
    const expectedShop = aShopWith(normalItem(0, 0));
    shop.updateQuality()
    expect(shop).toEqual(expectedShop);
  });

  test("\"Aged Brie\" actually increases in Quality the older it gets", () => {
    const shop = aShopWith(agedBrie(1,2));
    const expectedShop = aShopWith(agedBrie(0, 3));
    shop.updateQuality()
    expect(shop).toEqual(expectedShop);
  });

  test("The Quality of an item is never more than 50", () => {
    const shop = aShopWith(agedBrie(1,50));
    const expectedShop = aShopWith(agedBrie(0, 50));
    shop.updateQuality()
    expect(shop).toEqual(expectedShop);
  });


});