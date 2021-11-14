import { MONTHS } from '../Constants/StringConstant';

export class HeroWinGraphModel {
    public winrate: number;
    public timeStamp: number;
    public matchCount: number;
    public date: Date;
    public xAxis: string;
    public yAxis: string;

    public constructor(winrate: number, timeStamp: number, matchCount: number) {
        this.winrate = winrate;
        this.timeStamp = timeStamp;
        this.matchCount = matchCount;
        this.date = new Date(timeStamp * 1000);
        this.xAxis = MONTHS[this.date.getMonth()] + " " + this.date.getDate() + "th";
        this.yAxis = winrate + " %";
    }
}
