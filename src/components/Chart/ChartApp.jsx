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

const getRandom = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min);
}

const getRandomGRB = () => {
   const red = getRandom(0, 200);
   const green = getRandom(0, 200);
   const blue = getRandom(0, 200);
   return `rgba(${red},${green},${blue})`
}

const applicationsStatusThisMonth = [
   {
     status: "C++",
     value: 14,
     color: getRandomGRB(),
   },
   {
     status: "C#",
     value: 14,
     color: getRandomGRB(),
   },
   {
     status: "Python",
     value: 40,
     color: getRandomGRB(),
   },
   {
     status: "JS",
     value: 32,
     color: getRandomGRB(),
   },
];

const ChartApp = () => {
   const renderTooltip = context => {
      const { category, value } = context.point || context;
      return (
        <div>
          {category}: {value}%
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
                  data={applicationsStatusThisMonth}
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