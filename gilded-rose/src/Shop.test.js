import Shop from "./Shop";
import Item from "./Item";

const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

function aShopWith(...items) {
  return new Shop(items)
}

function normalItem(sellIn, quality) {
  return new Item("normal", sellIn, quality);
}

function agedBrie(sellIn, quality) {
  return new Item("Aged Brie", sellIn, quality);
}

function sulfuras(sellIn, quality) {
  return new Item("Sulfuras, Hand of Ragnaros", sellIn, quality);
}

function backstage(sellIn, quality) {
  return new Item("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
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
    const shop = aShopWith(normalItem(3,1));
    shop.updateQuality()

    const expectedShop = aShopWith(normalItem(2, MIN_QUALITY));
    expect(shop).toEqual(expectedShop);
  });

  // same test but with a corner case:
  test("The Quality of an OUTdated item is never negative", () => {
    const shop = aShopWith(normalItem(0,1));
    shop.updateQuality()
    const expectedShop = aShopWith(normalItem(-1, MIN_QUALITY));
    expect(shop).toEqual(expectedShop);
  });

  test("\"Aged Brie\" actually increases in Quality the older it gets", () => {
    const shop = aShopWith(agedBrie(4,3));
    shop.updateQuality()
    const expectedShop = aShopWith(agedBrie(3, 4));
    expect(shop).toEqual(expectedShop);
  });

  test("The Quality of an item is never more than 50", () => {
    const shop = aShopWith(agedBrie(1,50));
    shop.updateQuality()
    const expectedShop = aShopWith(agedBrie(0, MAX_QUALITY));
    expect(shop).toEqual(expectedShop);
  });

  test("\"Sulfuras\" never has to be sold or decreases in Quality", () => {
    const shop = aShopWith(sulfuras(10,20));
    shop.updateQuality()
    const expectedShop = aShopWith(sulfuras(10, 20));
    expect(shop).toEqual(expectedShop);
  });

  test("\"Backstage passes\" increases in Quality by 2 when there are 10 days or less", () => {
    const shop = aShopWith(backstage(10,20));
    shop.updateQuality()
    const expectedShop = aShopWith(backstage(9, 22));
    expect(shop).toEqual(expectedShop);
  });

  test("\"Backstage passes\" increases in Quality by 3 when there are 5 days or less", () => {
    const shop = aShopWith(backstage(5,20));
    shop.updateQuality()
    const expectedShop = aShopWith(backstage(4, 23));
    expect(shop).toEqual(expectedShop);
  });

  test("\"Backstage passes\"'s Quality drops to 0 after the concert", () => {
    const shop = aShopWith(backstage(0,20));
    shop.updateQuality()
    const expectedShop = aShopWith(backstage(-1, MIN_QUALITY));
    expect(shop).toEqual(expectedShop);
  });

});