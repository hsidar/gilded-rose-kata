import CustomItem from "../../CustomItem";
import decrementQuality from "../helpers/decrementQuality";

const handleNormal = (item: CustomItem) => {
    let sellIn: number = item.sellIn
    let quality: number = item.quality;

    sellIn--;

    quality = sellIn < 0 ? decrementQuality(item, quality, 2) : decrementQuality(item, quality, 1);

    const handledItem: CustomItem = {
        ...item,
        sellIn,
        quality
    }
    return handledItem;
};

export default handleNormal;
