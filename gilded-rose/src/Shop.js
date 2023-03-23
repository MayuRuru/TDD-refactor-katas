function isBackstage(item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}

function isAgedBrie(item) {
  return item.name === 'Aged Brie';
}

function isSulfuras(item) {
  return item.name === 'Sulfuras, Hand of Ragnaros';
}

function isOutdated(item) {
  return item.sellIn < 0;
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
      updateItem(item);
    }
      return this.items;
  }
}


function updateItem(item) {
  if (isSulfuras(item)){
    return;
  }

  if (isAgedBrie(item)) {
    increaseQuality(item);
    decreaseSellIn(item);
    if (isOutdated(item)){
      increaseQuality(item)
    }
  }else if (isBackstage(item)) {
    increaseQuality(item);
    if (item.sellIn < 11) {
      increaseQuality(item);
    }
    if (item.sellIn < 6) {
      increaseQuality(item)
    }
    decreaseSellIn(item);
    if (isOutdated(item)){
      item.quality = 0;
    }
  }else{
    decreaseQuality(item);
    decreaseSellIn(item);
    if(isOutdated(item)){
      decreaseQuality(item);
    }
  }
}

