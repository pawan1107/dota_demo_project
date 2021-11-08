import { STRATZ_HERO_CDN } from "../Constants/Api";
import { HORZ_EXTENSION, ICON_EXTENSION, NPC_HERO } from "../Constants/StringConstant";

function GetFormatedHeroName(name: string): string {
    return name.replace(NPC_HERO,'');
}

export function GetHeroIcon(name: string): string {
    return STRATZ_HERO_CDN.concat(GetFormatedHeroName(name), ICON_EXTENSION);
}

export function GetHeroHorz(name: string): string {
    return STRATZ_HERO_CDN.concat(GetFormatedHeroName(name), HORZ_EXTENSION);
}