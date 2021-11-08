import { STRATZ_HERO_CDN, STRATZ_ITEM_CDN } from "../Constants/Api";
import { HORZ_EXTENSION, ICON_EXTENSION, NPC_HERO, NPC_ITEM, PNG_EXTENSION } from "../Constants/StringConstant";

function GetFormatedHeroName(name: string): string {
    return name.replace(NPC_HERO,'');
}
function GetFormatedItemName(name: string): string {
    return name.replace(NPC_ITEM,'');
}

export function GetHeroIcon(name: string): string {
    return STRATZ_HERO_CDN.concat(GetFormatedHeroName(name), ICON_EXTENSION);
}

export function GetHeroHorz(name: string): string {
    return STRATZ_HERO_CDN.concat(GetFormatedHeroName(name), HORZ_EXTENSION);
}

export function GetItemIcon(name: string): string {
    return STRATZ_ITEM_CDN.concat(GetFormatedItemName(name), PNG_EXTENSION);
}