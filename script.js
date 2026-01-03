let tempData = [];
let labels = [];

const ctx = document.getElementById('tempChart').getContext('2d');

const tempChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Temperatura (°C)',
      data: tempData,
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

function atualizarDados() {
  const temperatura = (20 + Math.random() * 10).toFixed(1);
  const luminosidade = Math.floor(Math.random() * 800);
  const agora = new Date().toLocaleTimeString();

  document.getElementById("temp").innerText = temperatura + " °C";
  document.getElementById("lux").innerText = luminosidade + " lux";
  document.getElementById("time").innerText = agora;

  tempData.push(temperatura);
  labels.push(agora);

  if (tempData.length > 10) {
    tempData.shift();
    labels.shift();
  }

  tempChart.update();
}

setInterval(atualizarDados, 2000);
