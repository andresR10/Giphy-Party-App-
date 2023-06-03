$('#searchForm').on('submit', async function(e){
    e.preventDefault();

    const $searchTerm = $('#search').val();

    if($('#searchBtn').is(':focus') && $searchTerm === ''){
        alert('WAKE UP ENTER A SEARCH TERM!!');
        return;
    }

    try {
    let response = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {
        q: $searchTerm, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
    }
});

const results = response.data.data.length;
if(results > 0){
    const randomGif = Math.floor(Math.random() * results);
    const gifUrl = response.data.data[randomGif].images.fixed_height.url;
    const $gif = $("<img>").attr('src', gifUrl).attr('class', 'p-5');
    $('#gif-section').append($gif);
    }
    } catch (error) {
        console.log(error);
    }

$('#searchForm')[0].reset();    

});


$('#removeBtn').click(function(){
    $('#gif-section').empty();
})