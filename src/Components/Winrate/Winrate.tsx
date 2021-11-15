import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { HeroWinGraphModel } from '../../Models/HeroWinGraphModel';
import './winrate.scss';


function Winrate(props): JSX.Element {
    let renderLineChart: JSX.Element = <></>;
    if (props.winData) {
        // generate Graph data
        const graphData = props.winData.map((data) =>
            new HeroWinGraphModel(
                Number((data.winCount / data.matchCount * 100).toFixed(1)),
                data.timestamp,
                data.matchCount
            )
        )
        // Get minimum and maximum winrate
        const lowestWinrate = Math.min.apply(Math, graphData.map(data => data.winrate));
        const highestWinrate = Math.max.apply(Math, graphData.map(data => data.winrate));

        // Get Graph value based on mimimum and maximum winrate
        const graphLowValue = lowestWinrate - 5 < 0 ? 0 : Math.floor(lowestWinrate - 5);
        const graphHighValue = highestWinrate + 5 > 100 ? 100 : Math.floor(highestWinrate + 5); 

        renderLineChart = (
            <LineChart className = "hero-chart" width={550} height={300} data={graphData} margin={{ top: 5, right: 60, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="winrate" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis className = "x-axis" dataKey="xAxis" />
              <YAxis className = "y-axis" tickCount={10} domain={[graphLowValue, graphHighValue]} />
              <Tooltip />
            </LineChart>
          );
    }
    return (
        props.winData && (
        <div className = "winrate-container">
            <h2 className = "winrate-header">Win Rate Over Time</h2>
            <div className = "winrate-body">
                {renderLineChart}
            </div>
        </div>
    )) || <></>
}

function mapState(state) {
    const winData = state.heroData?.winData;
    return { winData};
}

export default connect(mapState, null)(Winrate);
