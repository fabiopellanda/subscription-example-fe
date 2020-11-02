import React from 'react';
import {
  Subscription,
} from 'react-apollo';
import { Chart } from 'react-google-charts';
import gql from 'graphql-tag';
import { SUBSCRIPTION_RESULT } from './GraphQL'

const renderChart = (options) => {
  const d = [
    ['Option', 'No. of votes', { role: 'annotation' }, { role: 'style' }],
  ];
  if(options && options.length){
    for (var r of options) {
      d.push([r.name, parseInt(r.count, 10), parseInt(r.count, 10), 'color: #4285f4']);
    }
  }
  

  return (
    <Chart className="poll-result-chart-container"
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={d}
      options={{
        height: '100%',
        chart: {
          title: 'Realtime results',
        },
        legend: { position: 'none' },
        animation: {
          duration: 1000,
          easing: 'out',
          startup: true,
        },
      }}
    />
  )
};

export const Result = (pollId, options) => (
  <Subscription subscription={gql`${SUBSCRIPTION_RESULT}`} variables={pollId}>
    {({ loading, error, data }) => {
      if (options && options.length) return  (
      <div>
      {renderChart(options)}
    </div>);
      if (loading) return <p>Waiting for vote...</p>;
      if (error) return <p>Error :</p>;
      return (
        <div>
          {data.liveResult.length > 0
            ?
            <div>
              {renderChart(data.liveResult)}
            </div>
            :
            <p>No result</p>
          }
        </div>
      );
    }}
  </Subscription>
)
