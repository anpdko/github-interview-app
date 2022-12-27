import React from 'react'
import styles from './ChartApp.module.scss'
import{
   Chart,
   ChartLegend,
   ChartTooltip,
   ChartSeries,
   ChartSeriesItem,
   ChartSeriesLabels,
} from "@progress/kendo-react-charts";


const ChartApp = ({list}) => {
   console.log(list)
   const renderTooltip = context => {
      const { category, value } = context.point || context;
      return (
        <div>
          {category}: {value}
        </div>
      );
   };

   const labelContent = e => e.category;

   return (
      <div className={styles.chart}>
         <Chart>
            <ChartLegend visible={false} />
            <ChartTooltip render={renderTooltip} />
            <ChartSeries>
               <ChartSeriesItem
                  className={styles.chart}
                  type="donut"
                  data={list}
                  categoryField="status"
                  field="value"
               >
                  <ChartSeriesLabels
                     color="#fff"
                     background="none"
                     content={labelContent}
                  />
               </ChartSeriesItem>
            </ChartSeries>
         </Chart>
      </div>
   );
};
export default ChartApp