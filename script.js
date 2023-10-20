var mymap = L.map('map').setView([51.5080, 0], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

fetch('https://api.npoint.io/37b26691304040158960')
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
            marker.bindPopup(`<b>${element.Title}</b> <a href=element.Link}>Article</a><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/William_Hogarth_007.jpg/405px-William_Hogarth_007.jpg" alt="Image" style="float:right;width:100%;height:auto;"><br>${element.Text}`);
        }
        
    });
})
.catch(error => console.error('Error:', error));