import CustomItem from "../../CustomItem";

// Notes:
// item is passed in for reference in case future logic needs that data
const incrementQuality = (item: CustomItem, quality: number, incrementAmount: number) => {
    let updatedQuality: number = quality;

    if(updatedQuality < 50) updatedQuality = updatedQuality + incrementAmount;
    if (updatedQuality > 50) updatedQuality = 50;

    return updatedQuality;
};

export default incrementQuality;
