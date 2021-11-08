export class ItemPurchaseTableModel {
    public name: string;
    public iconUrl: string;
    public pickRate: number;
    public winRate: number;

    public constructor(name: string, iconUrl: string, pickRate: number, winRate: number) {
        this.name = name;
        this.iconUrl = iconUrl;
        this.pickRate = pickRate;
        this.winRate = winRate;
    }
}
