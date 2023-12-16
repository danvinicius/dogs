import React from "react";
import styles from "./UserStatsCharts.module.scss";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsCharts = ({ data }) => {
  const [chart, setChart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const chartData = data.map((d) => {
      return {
        x: d.title,
        y: Number(d.acessos),
      };
    });
    setTotal(data.map((d) => Number(d.acessos)).reduce((a, b) => a + b, 0));
    setChart(chartData);
  }, [data]);

  return (
    <section className={`${styles.charts} animeLeft`}>
      <div className={`${styles.total} ${styles.chartItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.chartItem}>
        <VictoryPie
          data={chart}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
                fillOpacity: .9,
                stroke: '#fff',
                strokeWidth: 2
            },
            labels: {
                fontSize: 14,
                fill: '#333',
            }
          }}
        ></VictoryPie>
      </div>
      <div className={styles.chartItem}>
        <VictoryChart>
            <VictoryBar data={chart} alignment="start"></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsCharts;
