const formGroupExampleInput = document.getElementById('formGroupExampleInput')
const formGroupExampleInput2 = document.getElementById('formGroupExampleInput2')
const form = document.getElementById('form')

function axiosPost(e) {
    e.preventDefault();
    
    axios.post("https://655c30f2ab37729791aa0509.mockapi.io/products", {
        name: formGroupExampleInput.value,
        surname: formGroupExampleInput2.value,
    }).then(res => {
        console.log(res);
        form.reset()
    })

}
form.addEventListener('submit', axiosPost)