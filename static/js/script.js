$( document ).ready(function() {
    $( "form" ).on( "submit", submit);
});

const submit = event => {
    event.preventDefault();
    const query = $( event.target ).serialize();
    $.ajax({
        dataType: "json",
        url: "random.php",
        data: query,
        success: success
    });
};

const success = resp => {
    let response = `<li class="list-group-item">An error occured, please try again...</li>`;
    if (resp.status.code === 200) {
        response = createContent(resp.data.nums);
    }
    render(response);
    scrollTo($("#response ul")[0]);
};

const createContent = arr => {
    let response = "";
    arr.forEach((num, index) => {
        console.log(index + 1, num);
        response += `
            <li class="list-group-item">Dice ${index +1}: <span class="ms-4">${num}</span></li>
        `
    });
    return response;
};

const render = content => {
    $("#response ul").html(content);
};

const scrollTo = (elem, delay = 450) => {
    setTimeout(() => {
        elem.scrollIntoView({ behavior: "smooth" });
    }, delay);
};