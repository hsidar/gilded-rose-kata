import {expect} from "chai";
import CustomItem from "../CustomItem";
import generalConstants from "../../constants/generalConstants";

const { backstagePass, agedBrie, legendary, normal }: { backstagePass: string, agedBrie: string , legendary: string, normal: string } = generalConstants;

describe('CustomItem', () => {

    it('new CustomItem should have passed values', () => {
        const item = new CustomItem('foo', 0, 0);

        expect(item.name).to.equal('foo');
        expect(item.sellIn).to.equal(0);
        expect(item.quality).to.equal(0);
    });

    it('type should be legendary on legendary item', () => {
        const item = new CustomItem('Sulfuras, Hand of Ragnaros', 0, 0);

        expect(item.type).to.equal(legendary);
    });

    it('type should be Aged Brie on Aged Brie', () => {
        const item = new CustomItem('Aged Brie', 0, 0);

        expect(item.type).to.equal(agedBrie);
    });

    it('type should be backstage pass on backstage pass', () => {
        const item = new CustomItem('Backstage passes to a TAFKAL80ETC concert', 0, 0);

        expect(item.type).to.equal(backstagePass);
    });

    it('isConjured should be true on conjured item', () => {
        const item = new CustomItem('Conjured Mana Cake', 0, 0);

        expect(item.isConjured).to.equal(true);
    });
});
