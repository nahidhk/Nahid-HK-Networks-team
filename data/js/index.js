function myappio(){
  document.getElementById("loadio").style.display='none';
}
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});



async function displayData() {
    try {
        const response = await fetch("/data/json/data.json");
        const data = await response.json();
        const dataContainer = document.getElementById('showmy-bata');

        // Loop through the data and display it
        data.forEach(item => {
            const itemElement = document.createElement('tr');
            itemElement.innerHTML = `

  <tr>
    <td style="color:red;">${item.has}</td>
    <td style="color:${item.color};">${item.date}</td>
    <td style="color:${item.color};">${item.labs}</td>
    <td style="color:${item.color};">${item.link}</td>
    <td style="color:${item.color};">${item.glink}</td>
  </tr>
              
            `;
            dataContainer.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Error fetching or displaying data:', error);
    }
}

// Call the displayData function to load and display JSON data
displayData();
//
//
