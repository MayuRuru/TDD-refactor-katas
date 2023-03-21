function isBackstage(item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}

function isAgedBrie(item) {
  return item.name === 'Aged Brie';
}

function isSulfuras(item) {
  return item.name === 'Sulfuras, Hand of Ragnaros';
}

export default class Shop {
  constructor(someItems) {
    this.items = someItems;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (!isAgedBrie(item) && !isBackstage(item)) {
          if (item.quality > 0) {
            if (!isSulfuras(item)) {
              item.quality = item.quality - 1;
            }
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
            if (isBackstage(item)) {
              if (item.sellIn < 11) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1;
                }
              }
              if (item.sellIn < 6) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1;
                }
              }
            }
          }
        }
        if (isSulfuras(item)) {
          item.sellIn = item.sellIn - 1;
        }
        if (item.sellIn < 0) {
          if (isAgedBrie(item)) {
            if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (item.quality > 0) {
                if (isSulfuras(item)) {
                  item.quality = item.quality - 1;
                }
              }
            } else {
              item.quality = item.quality - item.quality;
            }
          } else {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }

      return this.items;
  }

}

