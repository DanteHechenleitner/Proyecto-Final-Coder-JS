let  datos = fetch("../ventas.json")
.then((respuesta) => respuesta.json())
.then((json) => console.log(json));

let  verdatos = fetch("../ventas.json")
.then((respuesta) => respuesta.json())
.then((datos) => {
    const labels = datos.map((e) => e.tarjeta );
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'Ventas',
          backgroundColor: ['rgb(255, 99, 132)',
          ],
          data: datos.map((e) => e.cantidad),
        }]
      };
    
      const config = {
        type: 'line',
        data: data,
        options: {}
    };
    
    const myChart = new Chart(
        document.getElementById('grafico'),
        config
    );

    console.log(datos.map((e) => e.precio) )
});

