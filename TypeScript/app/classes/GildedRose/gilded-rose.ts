import CustomItem from "../CustomItem";
import generalConstants from "../../constants/generalConstants";
import handleLegendary from "./handlers/handleLegendary";
import handleBackstagePass from "./handlers/handleBackstagePass";
import handleAgedBrie from "./handlers/handleAgedBrie";
import handleNormal from "./handlers/handleNormal";

export class GildedRose {
    items: Array<CustomItem>;

    constructor(items = [] as Array<CustomItem>) {
        this.items = items;
    }

    updateQuality() {
        const { backstagePass, agedBrie, legendary, normal }: { backstagePass: string, agedBrie: string , legendary: string, normal: string } = generalConstants;
        const returnArray: Array<CustomItem> = this.items.map(item => {
            const handlers: Object = {
                [legendary]: handleLegendary,
                [backstagePass]: handleBackstagePass,
                [agedBrie]: handleAgedBrie,
                [normal]: handleNormal
            }

            const handlerFunction = handlers[item.type] || handlers[normal];
            const updatedItem: CustomItem = handlerFunction(item);

            return updatedItem;
        });

        return returnArray;
    }
}
