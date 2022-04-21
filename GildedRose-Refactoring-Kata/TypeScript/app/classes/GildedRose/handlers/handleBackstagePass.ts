import CustomItem from "../../CustomItem";
import incrementQuality from "../helpers/incrementQuality";

// Notes:
// Sellin is minus-ed at the end and not the beginning
// Backstage passes increase in value as event draws near, and are worthless after
const handleBackstagePass = (item: CustomItem) => {
    let sellIn: number = item.sellIn
    let quality: number = item.quality;

    // gets at least one increment more valuable every time
    quality++;

    if(sellIn < 11) {
        quality = incrementQuality(item, quality, 1);
    }
    if(sellIn < 6) {
        quality = incrementQuality(item, quality, 1);
    }
    if(sellIn < 0) {
        // event is over, tickets are worthless
        quality = 0;
    }

    const handledItem: CustomItem = {
        ...item,
        sellIn: sellIn--,
        quality
    }
    return handledItem;
};

export default handleBackstagePass;
