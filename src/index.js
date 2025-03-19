const init = () => {
    const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector('#searchByID').value.trim()

    const API_ID = 'http://localhost:3000/movies'

     fetch(`${API_ID}/${input}`)
     .then((res => res.json()))
     .then((data => {
        const title = document.querySelector('#h4')        
        const summary = document.querySelector('#p')

        title.innerText=`${data.title}`
        summary.innerText=`${data.summary}`
     }))

     inputForm.reset();
  });
}

document.addEventListener('DOMContentLoaded', init);