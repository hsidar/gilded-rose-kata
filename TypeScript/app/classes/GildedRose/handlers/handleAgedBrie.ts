import CustomItem from "../../CustomItem";
import incrementQuality from "../helpers/incrementQuality";

// Notes:
// Aged Brie gets more valuable as time passes
// When sellIn date is negative, quality increase doubles
const handleAgedBrie = (item: CustomItem) => {
    let sellIn: number = item.sellIn
    let quality: number = item.quality;

    sellIn = sellIn--;

    quality = item.sellIn < 0 ? incrementQuality(item, quality, 2 ) : incrementQuality(item, quality,1 );

    const handledItem: CustomItem = {
        ...item,
        sellIn,
        quality
    }
    return handledItem;
};

export default handleAgedBrie;
