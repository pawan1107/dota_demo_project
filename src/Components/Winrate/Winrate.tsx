import { useQuery } from '@apollo/client';
import React from 'react'
import { useSelector } from 'react-redux';
import { GET_HERO_GRAPH } from '../../GraphQL/Query';
import { selectCurrentHero } from '../../Utils/Selector';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { ISynergy } from '../../Models/HeroStatsInterface';
import { HeroWinDataModel } from '../../Models/HeroWinDataModel';
import { HeroWinGraphModel } from '../../Models/HeroWinGraphModel';


function Winrate(): JSX.Element {
    let renderLineChart: JSX.Element = <></>;
    const currentHero = useSelector(selectCurrentHero);
    const totalDays = 10;
    const { error, loading, data } = useQuery(GET_HERO_GRAPH, {
        variables: { heroIds: [currentHero.id], take: totalDays}
    });
    if (data) {
        console.log(data);
        const heroWinData = (data as ISynergy).heroStats.hero as HeroWinDataModel[];
        const graphData = heroWinData.map((data) => new HeroWinGraphModel(
            Number((data.winCount / data.matchCount * 100).toFixed(1)),
            data.timestamp,
            data.matchCount)
        )
        const lowestWinrate = Math.min.apply(Math, graphData.map(data => data.winrate));
        const highestWinrate = Math.max.apply(Math, graphData.map(data => data.winrate));

        const graphLowValue = lowestWinrate - 5 < 0 ? 0 : Math.floor(lowestWinrate - 5);
        const graphHighValue = highestWinrate + 5 > 100 ? 100 : Math.floor(highestWinrate + 5); 

        renderLineChart = (
            <LineChart width={600} height={300} data={graphData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="winrate" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="xAxis" />
              <YAxis tickCount={10} domain={[graphLowValue, graphHighValue]} />
              <Tooltip />
            </LineChart>
          );
    }
    return data && (
        <div className = "synergy-container">
            <h2 className = "synergy-header">Win Rate Over Time</h2>
            <div className = "synergy-body">
                {renderLineChart}
            </div>
        </div>
    ) || <></>
}

export default Winrate;