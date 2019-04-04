const cardTemplate = 

`<div class="card">
<div class="card-header">
  #NAME
  <i class="fas #SEX"></i>
</div>
<div class="card-body">
  <h5 class="card-title">#RACE / #COLOR</h5>
  <p class="card-text">Naissance : #DATEOFBIRTH</p>
  #BUTTON
</div>
</div>`;

$.get('http://loaclhost:3500/kittens', function (kittensCollection) {
    kittensCollection.forEach(element => {
        createCard (kitten); 
    }); 
    
    listenToclick()

  });



function createCard (kitten){ 
    let template = cardTemplate
        .replace('#RACE', kitten.race)
        .replace('#COLOR', kitten.color)
        .replace('#DATEOFBIRTH', kitten.dateOfBirth)
    ;

    if (!kitten.adopt) {
        template = template.replace('#BUTTON', '<a href="#" data-id="${kitten.id}" class="btn btn-primary">Adopter</a>')
      } else {
        template = template.replace('#BUTTON', '<span href="#" class="btn btn-primary">Adopté</span>')
      }

    if (kitten.sex) {
        template = template.replace('#SEX', 'fa-mars')
      } else {
        template = template.replace('#SEX', 'fa-venus')
      }
    
      <a href="#" class="btn btn-primary">Adopter</a>
    $('.container').html(template);

  }

const listenToClick = () => {
  $('.btn').on('click', function () {
    const id = $(this).data('id')
    const url = `http://loaclhost:3500/kittens/${id}/adopt`

    $.get(url, )
  })
}