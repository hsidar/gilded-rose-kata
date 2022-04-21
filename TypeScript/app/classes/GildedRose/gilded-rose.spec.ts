import { expect } from 'chai';
import CustomItem from '../CustomItem'
import GildedRose from '../GildedRose';

describe('Gilded Rose', function () {

    // All items have a SellIn value which denotes the number of days we have to sell the item
    // All items have a Quality value which denotes how valuable the item is
    // At the end of each day our system lowers both values for every item
    // An item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.

    it('should foo', () => {
        const gildedRose = new GildedRose([ new CustomItem('foo', 0, 0) ]);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].name).to.equal('foo');
    });

    it('returns an empty array when updated with an empty array', () => {
        const itemsArr = [];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems.length).to.equal(0);
    });

    it('Should decrement quality by 1 on normal items', () => {
        const gildedRose = new GildedRose([ new CustomItem('foo', 6, 6) ]);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(5);
    });

    it('Once the sell by date has passed, Quality degrades twice as fast', () => {
        const gildedRose = new GildedRose([new CustomItem('foo', 0, 2)]);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(0);
    });

    it('The Quality of an item is never negative', () => {
        const itemsArr = [new CustomItem('foo', 0, 0)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(0);
    });

    it('"Aged Brie" increases in Quality the older it gets', () => {
        const itemsArr = [new CustomItem('Aged Brie', 50, 2)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(3);
    });

    it('"Aged Brie" increases in quality by 2 when it has a minus sellin', () => {
        const itemsArr = [new CustomItem('Aged Brie', -50, 2)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(4);
    });

    it('The Quality of an item is never more than 50', () => {
        const itemsArr = [new CustomItem('Aged Brie', 5, 50)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(50);
    });

    it('"Sulfuras, Hand of Ragnaros", being a legendary item, never has to be sold or decreases in Quality', () => {
        const itemsArr = [new CustomItem('Sulfuras, Hand of Ragnaros', 5, 42)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].sellIn).to.equal(5);
        expect(updatedItems[0].quality).to.equal(42);
    });

    it('"Backstage passes" quality increases by 1 when there are more than 10 days', () => {
        const itemsArr = [new CustomItem('Backstage passes to a TAFKAL80ETC concert', 15, 2)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(3);
    });

    it('"Backstage passes" quality increases by 2 when there are 10 days or less', () => {
        const itemsArr = [new CustomItem('Backstage passes to a TAFKAL80ETC concert', 10, 2)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(4);
    });

    it('"Backstage passes" quality increases by 3 when there are 5 days or less', () => {
        const itemsArr = [new CustomItem('Backstage passes to a TAFKAL80ETC concert', 5, 2)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(5);
    });

    it('"Backstage passes" quality drops to 0 after the concert', () => {
        const itemsArr = [new CustomItem('Backstage passes to a TAFKAL80ETC concert', -1, 2)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(0);
    });

    // To be implemented
    it('"Conjured" items degrade in Quality twice as fast as normal items', () => {
        const itemsArr = [new CustomItem("Conjured Mana Cake", 3, 6)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].quality).to.equal(4);
    });

    // New things

    it('should handle uppercase/lowercase names the same', () => {
        const itemsArr = [new CustomItem('sulfuras, hand of ragnaros', 5, 42)];
        const gildedRose = new GildedRose(itemsArr);
        const updatedItems = gildedRose.updateQuality();

        expect(updatedItems[0].sellIn).to.equal(5);
        expect(updatedItems[0].quality).to.equal(42);
    });
});
