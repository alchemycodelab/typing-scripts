// reference the form
const form = document.getElementById('form');

// submit event listener
form.addEventListener('submit', function(event) {
    // don't let the browser refresh the page!
    event.preventDefault();
    
    // initialize formData helper
    const formData = new FormData(form);

    // data that needs to be formatted or converted
    const rating = parseInt(formData.get('rating'));

    // create cat object literal
    const cat = {
        name: formData.get('name'),
        type: formData.get('type'),
        age: formData.get('age'),
        toys: formData.getAll('toys'),
        rating: rating
    };

    console.log(cat);
});