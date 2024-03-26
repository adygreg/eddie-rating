function mailMe(album_details, totalMusic) {

    const music_selected = [];

    count = 1;
    array_size = 0;

    while (count <= totalMusic) {
        if (document.getElementById(count.toString()).checked) {
            music_selected[array_size] = document.getElementById(count.toString()).value;
            array_size++;
        }
        count++;
    }

    var link = "mailto:adygreg@duck.com"
        + "?cc= "
        + "&subject=" + encodeURIComponent(album_details)
        + "&body=" + encodeURIComponent("Music Selected = " + music_selected + "\n" + "Comment = " + document.getElementById("comment-area").value);

    window.location.href = link;
    alert("Redirecting to your email....")

}