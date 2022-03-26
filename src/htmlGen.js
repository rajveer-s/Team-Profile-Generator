const generateManagerCard = (manager) => {
  return `
      <div class="card">
        <h3>${manager.getName().toUpperCase()}</h3>
        <p><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</p>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail().toLowerCase()}">${manager.getEmail().toLowerCase()}</a>
            </li>
            <li class="list-group-item">Phone: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
  `
}