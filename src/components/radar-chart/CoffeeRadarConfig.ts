export const RadarData = {
  labels: ['sweetness', 'sourness', 'balance', 'body', 'aroma', 'after taste'],
  datasets: [
    {
      label: '',
      data: [],
      backgroundColor: '#0B421A90',
      borderColor: '#604C4C',
      borderWidth: 2,
      pointBackgroundColor: '#362415',
      pointBorderColor: '#EAC78480',
      pointBorderWidth: 2,
      tickColor: '#0B421A80',
    },
  ],
}

export const RadarOptions = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '',
      fullSize: true,
      color: '#EAC784',
      font: {
        size: 25,
      },
    },
  },
  scales: {
    r: {
      grid: {
        color: '#36241550',
      },
      ticks: {
        backdropColor: '#fff0',
        min: 1,
        max: 5,
        stepSize: 1,
        showLabelBackdrop: true,
        color: '#fff',
        font: {
          size: 19,
        },
      },
      angleLines: {
        display: true,
        color: '#fff',
      },
      suggestedMin: 1,
      suggestedMax: 5,
      pointLabels: {
        color: '#fff',
        font: {
          size: 20,
        },
      },
    },
  },
  maintainAspectRatio: false,
}
