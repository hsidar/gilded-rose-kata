import CustomItem from "../../CustomItem";

// Notes:
// item is passed in for reference in case future logic needs that data
const incrementQuality = (item: CustomItem, quality: number, decrementAmount: number) => {
    let updatedQuality: number = quality;
    if (item.isConjured) decrementAmount = decrementAmount * 2;

    if(updatedQuality > 0) updatedQuality = updatedQuality - decrementAmount;
    if (updatedQuality < 0) updatedQuality = 0;

    return updatedQuality;
};

export default incrementQuality;
