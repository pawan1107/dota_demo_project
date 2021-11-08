import moment from 'moment';
import { DATE_FORMAT } from '../Constants/StringConstant';

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
        this.xAxis = moment(this.date).format(DATE_FORMAT);
        this.yAxis = winrate + " %";
    }
}
