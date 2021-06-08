export const RadarData = {
  labels: ['accessibility', 'convenience', 'effectiveness'],
  datasets: [
    {
      label: '',
      data: [],
      backgroundColor: 'rgba(234, 199, 132, 0.5)',
      borderColor: 'rgb(234, 199, 132)',
      borderWidth: 4,
      borderDash: [2, 2],
      pointBackgroundColor: 'rgb(234, 199, 132)',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: 'rgb(234, 199, 132)',
      pointHoverBorderWidth: 5,
    },
  ],
}

export const RadarOptions = {
  scale: {
    ticks: {
      min: 1,
      max: 3,
      stepSize: 1,
      showLabelBackdrop: true,
    },
    r: {
      angleLines: {
        display: false,
      },
      suggestedMin: 1,
      suggestedMax: 3,
    },
    font: {
      size: 12,
    },
  },
  maintainAspectRatio: false,
}
