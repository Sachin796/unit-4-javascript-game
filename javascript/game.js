window.onload = function () {
    //Declared all images that will be randomly choosed and displayed.
    var random_image = ["images/crystal1.jpg", "images/crystal2.jpg", "images/crystal3.jpg", "images/crystal4.jpg",
        "images/crystal5.jpg", "images/crystal6.jpg", "images/crystal7.jpg", "images/crystal8.jpg",
        "images/crystal9.jpg", "images/crystal10.jpg", "images/crystal11.jpg", "images/crystal12.jpg",
        "images/crystal13.jpg", "images/crystal14.jpg", "images/crystal15.jpg", "images/crystal16.jpg",
        "images/crystal7.jpg", "images/crystal18.jpg", "images/crystal19.jpg", "images/crystal20.jpg"
    ];
    var allvalues = [];
    let wintarget;
    var winentries = 0;
    var wincount = 0;
    var losecount = 0;

    //function to generate the target that player needs to achieve
    function generatewintarget() {
        wintarget = Math.floor((Math.random() * 100) + 1);
        document.getElementById('win').innerHTML = wintarget;
    }
    
    //function calling
    generatewintarget();

//function to generate random images from the list of array and display it on the div tag.
    function random_image_generator(randomimagearray) {

        let randomnumber = Math.floor(Math.random() * ((randomimagearray.length) * 2) / 2);
        let randomvalue = Math.floor((Math.random() * 9) + 1)

        var randimg = randomimagearray[randomnumber];

        var imgelement = document.createElement("img");
        imgelement.setAttribute("src", randimg);
        imgelement.setAttribute("height", '100px');
        imgelement.setAttribute("width", '100px');
        imgelement.setAttribute("value", randomvalue);
        imgelement.setAttribute("id", randimg);
        imgelement.setAttribute("style", 'border-radius : 20%;border:1px solid green;margin-left:20px;box-shadow: 4px 3px 5px rgb(205, 5, 255);margins-top: 15px');

        allvalues.push(imgelement)

        document.getElementById('image').append(imgelement);

    }
//function to call the randomimagegenrator function as many times as you want. here we want 4 crystals to be displayed so looping 4 times.
    function generateimage() {
        for (var s = 0; s < 4; s++) {
            random_image_generator(random_image);
        }

    }

    //function to clear the image first before reloading for the second turn so that it does not append to the previous set of images.
    function clearimage() {
        document.getElementById('image').innerText = "";

    }

    generateimage();

    function commoncalls() {
        allvalues = [];
        winentries = 0;
        clearimage();
        generateimage();
        generatewintarget();
        load();

    }

//the main function which loads all the points for each image and also calculates the wins and losses.
    function load() {
        console.log(allvalues);
        var id1 = allvalues[0].id
        console.log(id1);
        var id2 = allvalues[1].id
        var id3 = allvalues[2].id
        var id4 = allvalues[3].id

        document.getElementById(id1).addEventListener("click", function (e) {

            var temp = allvalues

            var imgval1 = temp[0].attributes.value.value
            winentries = winentries + parseInt(imgval1);

            if (winentries < wintarget) {
                document.getElementById('input').innerText = winentries;
            } else if (winentries === wintarget) {
                alert("You won");
                wincount = wincount + 1;
                document.getElementById('wincount').innerText = wincount;
                document.getElementById('input').innerText = ""
                commoncalls();


                return;
            } else if (winentries > wintarget) {
                alert("Sorry you lost");
                losecount = losecount + 1;
                document.getElementById('losecount').innerText = losecount;
                document.getElementById('input').innerText = "";
                commoncalls();
                return;
            }
        })


        document.getElementById(id2).addEventListener("click", function (e) {
            console.log(id2)
            var temp = allvalues
            console.log(temp);
            console.log(temp[1].attributes.value.value);

            var imgval2 = temp[1].attributes.value.value
            winentries = winentries + parseInt(imgval2);
            console.log(winentries);
            if (winentries < wintarget) {
                document.getElementById('input').innerText = winentries;
            } else if (winentries === wintarget) {
                alert("You won");
                wincount = wincount + 1;
                document.getElementById('wincount').innerText = wincount;
                document.getElementById('input').innerText = ""
                commoncalls();
                return;
            } else if (winentries > wintarget) {
                alert("Sorry you lost");
                losecount = losecount + 1;
                document.getElementById('losecount').innerText = losecount;
                document.getElementById('input').innerText = "";
                commoncalls();
                return;
            }
        })


        document.getElementById(id3).addEventListener("click", function (e) {
            console.log(id3)
            var temp = allvalues
            console.log(temp);
            console.log(temp[2].attributes.value.value);

            var imgval3 = temp[2].attributes.value.value
            winentries = winentries + parseInt(imgval3);
            console.log(winentries);
            if (winentries < wintarget) {
                document.getElementById('input').innerText = winentries;
            } else if (winentries === wintarget) {
                alert("You won");
                wincount = wincount + 1;
                document.getElementById('wincount').innerText = wincount;
                document.getElementById('input').innerText = ""
                commoncalls();
                return;
            } else if (winentries > wintarget) {
                alert("Sorry you lost");
                losecount = losecount + 1;
                document.getElementById('losecount').innerText = losecount;
                document.getElementById('input').innerText = "";
                commoncalls();
                return;
            }
        })


        document.getElementById(id4).addEventListener("click", function (e) {
            console.log(id4)
            var temp = allvalues
            console.log(temp);
            console.log(temp[3].attributes.value.value);

            var imgval4 = temp[3].attributes.value.value
            winentries = winentries + parseInt(imgval4);
            console.log(winentries);
            if (winentries < wintarget) {
                document.getElementById('input').innerText = winentries;
            } else if (winentries === wintarget) {
                alert("You won");
                wincount = wincount + 1;
                document.getElementById('wincount').innerText = wincount;
                document.getElementById('input').innerText = ""
                commoncalls();
                return;
            } else if (winentries > wintarget) {
                alert("Sorry you lost");
                losecount = losecount + 1;
                document.getElementById('losecount').innerText = losecount;
                document.getElementById('input').innerText = "";
                commoncalls();
                return;
            }
        })

    }
//calling load function
    load();

}