function isBackstage(item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}

function isAgedBrie(item) {
  return item.name === 'Aged Brie';
}

function isSulfuras(item) {
  return item.name === 'Sulfuras, Hand of Ragnaros';
}


function decreaseQuality(item) {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
}

function increaseQuality(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
}

function decreaseSellIn(item) {
  item.sellIn = item.sellIn - 1;
}

export default class Shop {
  constructor(someItems) {
    this.items = someItems;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (!isAgedBrie(item) && !isBackstage(item)) {
            if (!isSulfuras(item)) {
              decreaseQuality(item);
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
            if (isBackstage(item)) {
              if (item.sellIn < 11) {
                increaseQuality(item);
              }
              if (item.sellIn < 6) {
                increaseQuality(item)
              }
            }
          }
        }
        if (!isSulfuras(item)) {
          decreaseSellIn(item);
        }
        if (item.sellIn < 0) {
          if (!isAgedBrie(item)) {
            if (!isBackstage(item)) {
              if (item.quality > 0) {
                if (!isSulfuras(item)) {
                 decreaseQuality(item);
                }
              }
            } else {
              item.quality = item.quality - item.quality;
            }
          } else {
            increaseQuality(item)
          }
        }
      }

      return this.items;
  }

}

