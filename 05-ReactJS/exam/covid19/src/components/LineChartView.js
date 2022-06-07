import React, { memo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const LineChartView = memo(({chartData}) => {
    /** 그래프 옵션 */
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
        },
    }
    const data = {
        // x축에 나타날 항목들
        labels: chartData.date,
        // y축의 값을 비롯한 기타 옵션들
        datasets: [{
            //그래프 제목
            label: '명',
            backgroundColor: '#0066ff44',
            borderColor: '#0066ff',
            borderWidth: 1,
            //그래프 각 항목별 y축 수치값
            data: chartData.fieldData,
        }]
    };
    return (
        <Line
            data={data}
            options={options}
        />
            
    );
});
LineChartView.defaultProps = {
    chartData: {
        movieNm: [], audiCnt: []
    }
}

export default LineChartView;