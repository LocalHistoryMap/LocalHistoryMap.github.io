var mymap = L.map('map').setView([51.5080, 0], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

fetch('https://raw.githubusercontent.com/LocalHistoryMap/localhistorymap.github.io/main/data.json')
.then(response => response.json())
.then(data => {
    // Now, you can iterate through the JSON array
    data.forEach(element => {
        console.log(element.Title);

        if(element.Image == "None"){
            var marker = L.marker(element.Cords).addTo(mymap);
            marker.bindPopup(`<b>${element.Title}</b> <a href=${element.Link}>Article</a><br>${element.Text}`);
        } else {
            var marker = L.marker(element.Cords).addTo(mymap);
            marker.bindPopup(`<b>${element.Title}</b> <a href=${element.Link}>Article</a><br><img src="${element.Image}" alt="Image" style="float:right;width:100%;height:auto;"><br>${element.Text}`);
        }
        
    });
})
.catch(error => console.error('Error:', error));
