import generalConstants from "../../constants/generalConstants";
import Item from "../Item";

const { sulfuras, backstagePass, agedBrie, conjured, legendary, normal }: { sulfuras: string, backstagePass: string, agedBrie: string , conjured: string, legendary: string, normal: string } = generalConstants;

export class CustomItem extends Item {
    type: string
    isConjured: boolean

    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);

        switch(true) {
            case [sulfuras.toLowerCase()].includes(name.toLowerCase()):
                this.type = legendary;
                break;
            case name.toLowerCase() === agedBrie.toLowerCase():
                this.type = agedBrie;
                break;
            case name.toLowerCase().includes(backstagePass.toLowerCase()):
                this.type = backstagePass;
                break;
            default:
                this.type = normal
        }

        this.isConjured = name.toLowerCase().includes(conjured.toLowerCase());
    }
}
