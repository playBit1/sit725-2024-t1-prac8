$(document).ready(function () {
  getCards();
    $('.modal').modal()
  })

  // Function to create a card
function createCard(cardData) {
  return `
  <div class="col s12 m4">
      <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${cardData.path}" />
          </div>
          <div class="card-content">
              <span class="card-title activator grey-text text-darken-4" style="padding-left: 20px">${cardData.title}
              <i class="material-icons right">more_vert</i>
              </span>
          </div>
          <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${cardData.title}
              <i class="material-icons right">close</i>
              </span>
              <p class="grey-text">${cardData.description}</p>
          </div>
      </div>
  </div>
  `;
}

const getCards = () => {
  $.get('/api/cars', (response) => {
    if(response.statusCode==200){
      const cardContainer = document.getElementById('CarCards');
      let catCardList = response.data

      console.log(response.data)
      cardContainer.innerHTML = '';

      catCardList.forEach(cardData => {
        const card = createCard(cardData);
        cardContainer.innerHTML += card;
      });
      
    }
  })
}


  function submitInfo(e) {
    e.preventDefault()

    let formData = {
      title : document.getElementById('title').value,
      color : document.getElementById('color').value,
      path : document.getElementById('path').value,
      description : document.getElementById('description').value
    };
  
    console.log("Form Data Submitted: ", formData)

    $.post("/api/cats", formData, function(data, status){
      status === "success" ? (alert("Card Information Saved!"), getCards()): alert("Error, please contact car support!")
    })

    document.getElementById('title').value = '';
    document.getElementById('color').value = '';
    document.getElementById('path').value = '';
    document.getElementById('description').value = '';

    var instance = M.Modal.getInstance(document.getElementById('modal1'));
    instance.close();

    getCards()
    getCards()
    getCards()
    getCards()
  }
