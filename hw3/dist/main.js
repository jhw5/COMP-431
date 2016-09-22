/**
 * Created by Jeffrey on 9/5/2016.
 */






window.onload = function(){
    document.getElementById("logout").onclick = function(){
        window.location.href="index.html";
    }
    document.getElementById("clearBtn").onclick = function(){
        document.getElementById("clearInput").value="";
    }
    //foreach elements in textArr, we want to create an table element with the text/or image
    var row;
    textArr.forEach(function(txt, idx) {
        //for even indexes in the array we want to create a new row
        //for odd indexes, we just want to create a new cell
        if (idx % 2 == 0) {
            //column one
            row = document.createElement("tr");
            var col1 = colCreate(idx)
            row.appendChild(col1);
        } else {
            // column 2
            var col2 = colCreate(idx);
            row.appendChild(col2);
            document.getElementById("feed").appendChild(row);
        }
    });


};
//creating column cells
function colCreate(idx){
    var col = document.createElement("th");
    var txt = document.createTextNode(textArr[idx]);
    var button = buttons();
    //randomly insert images
    if (Math.random() > 0.5) {
        col.appendChild(IMG(idx));
    }
    col.appendChild(txt);
    col.appendChild(button);
    return col;
}

//creating img div
function IMG(idx){
    var imag = document.createElement('div');
    imag.appendChild(createImg(idx));
    return imag;

}


//creating button div
function buttons(){
    var button = document.createElement("div");
    button.appendChild(createButt("Like"));
    button.appendChild(createButt("Comment"));
    button.appendChild(createButt("Edit"));
    return button;
}

var imgArr = [
    "album1/msp_0708_0663.jpg",
    "album1/msp_1309_6225.jpg",
    "album1/msp_1404_8697.jpg",
    "album1/msp_1405_1390.jpg",
    "album1/msp_1405_1408.jpg",
    "album1/msp_1506_0992.jpg",
    "album1/msp_1507_2628.jpg",
    "album1/msp_1509_3764.jpg",
    "album1/msp_1510_4176.jpg",
    "album1/msp_1602_5804.jpg",
    "album1/msp_1605_7010.jpg",
    "album1/msp_1607_8239.jpg"
];

var textArr=[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ,"Aenean eget tortor et ipsum convallis convallis non sit amet massa. Donec nec vestibulum sem. Sed et est molestie, congue magna vitae, aliquet lacus. Ut in scelerisque ante. Curabitur ultricies est id consectetur suscipit. In ut lectus congue, dapibus lectus nec, hendrerit augue. Nullam dignissim pretium dictum. Fusce maximus condimentum orci at aliquet. Donec dictum eget leo non vehicula. Morbi consectetur dictum eros in rutrum. Sed quis rhoncus risus."
    ,"Curabitur quis malesuada neque. Nulla quis mi congue, auctor ante id, cursus nunc. Vivamus dui nisl, pharetra quis risus eu, mattis congue mi. In pellentesque hendrerit eros eget porta. Praesent ut metus suscipit, aliquam arcu a, euismod mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, dui sed porttitor placerat, felis mauris hendrerit tortor, non aliquet metus mi non ligula. Nunc velit purus, hendrerit ac pellentesque at, scelerisque non justo. Fusce ligula ex, sagittis sit amet justo ac, scelerisque facilisis lectus. Ut in efficitur turpis. Mauris scelerisque dapibus ligula, vel molestie risus viverra a. Donec in ultrices mauris. Nunc vestibulum quam mauris, sed sollicitudin quam eleifend fermentum."
    ,"Sed dictum malesuada ipsum, eget ornare enim molestie in. In id faucibus eros, at dapibus sem. Proin commodo nibh est, at porta magna auctor eu. Nunc sed elementum mauris. Mauris sollicitudin, nisl at finibus iaculis, velit diam ullamcorper arcu, quis luctus massa risus id turpis. Etiam vitae scelerisque risus. Nullam et facilisis nisi. Sed a libero posuere, facilisis odio vitae, gravida tortor. Ut vitae nunc augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed non ante augue."
    ,"Suspendisse sed vestibulum eros. Proin gravida quam id magna dictum, sed finibus arcu scelerisque. Phasellus varius urna eu ultricies ultrices. Curabitur pulvinar sit amet nisl vel hendrerit. Sed vestibulum tortor et mollis hendrerit. Integer tincidunt felis urna, sed faucibus lorem placerat facilisis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed placerat turpis quis ante imperdiet scelerisque. Nullam aliquet vitae odio et eleifend."
    ,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ,"Aenean eget tortor et ipsum convallis convallis non sit amet massa. Donec nec vestibulum sem. Sed et est molestie, congue magna vitae, aliquet lacus. Ut in scelerisque ante. Curabitur ultricies est id consectetur suscipit. In ut lectus congue, dapibus lectus nec, hendrerit augue. Nullam dignissim pretium dictum. Fusce maximus condimentum orci at aliquet. Donec dictum eget leo non vehicula. Morbi consectetur dictum eros in rutrum. Sed quis rhoncus risus."
    ,"Curabitur quis malesuada neque. Nulla quis mi congue, auctor ante id, cursus nunc. Vivamus dui nisl, pharetra quis risus eu, mattis congue mi. In pellentesque hendrerit eros eget porta. Praesent ut metus suscipit, aliquam arcu a, euismod mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, dui sed porttitor placerat, felis mauris hendrerit tortor, non aliquet metus mi non ligula. Nunc velit purus, hendrerit ac pellentesque at, scelerisque non justo. Fusce ligula ex, sagittis sit amet justo ac, scelerisque facilisis lectus. Ut in efficitur turpis. Mauris scelerisque dapibus ligula, vel molestie risus viverra a. Donec in ultrices mauris. Nunc vestibulum quam mauris, sed sollicitudin quam eleifend fermentum."
    ,"Sed dictum malesuada ipsum, eget ornare enim molestie in. In id faucibus eros, at dapibus sem. Proin commodo nibh est, at porta magna auctor eu. Nunc sed elementum mauris. Mauris sollicitudin, nisl at finibus iaculis, velit diam ullamcorper arcu, quis luctus massa risus id turpis. Etiam vitae scelerisque risus. Nullam et facilisis nisi. Sed a libero posuere, facilisis odio vitae, gravida tortor. Ut vitae nunc augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed non ante augue."
    ,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ,"Aenean eget tortor et ipsum convallis convallis non sit amet massa. Donec nec vestibulum sem. Sed et est molestie, congue magna vitae, aliquet lacus. Ut in scelerisque ante. Curabitur ultricies est id consectetur suscipit. In ut lectus congue, dapibus lectus nec, hendrerit augue. Nullam dignissim pretium dictum. Fusce maximus condimentum orci at aliquet. Donec dictum eget leo non vehicula. Morbi consectetur dictum eros in rutrum. Sed quis rhoncus risus."
    ,"Curabitur quis malesuada neque. Nulla quis mi congue, auctor ante id, cursus nunc. Vivamus dui nisl, pharetra quis risus eu, mattis congue mi. In pellentesque hendrerit eros eget porta. Praesent ut metus suscipit, aliquam arcu a, euismod mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, dui sed porttitor placerat, felis mauris hendrerit tortor, non aliquet metus mi non ligula. Nunc velit purus, hendrerit ac pellentesque at, scelerisque non justo. Fusce ligula ex, sagittis sit amet justo ac, scelerisque facilisis lectus. Ut in efficitur turpis. Mauris scelerisque dapibus ligula, vel molestie risus viverra a. Donec in ultrices mauris. Nunc vestibulum quam mauris, sed sollicitudin quam eleifend fermentum."
    ,"Sed dictum malesuada ipsum, eget ornare enim molestie in. In id faucibus eros, at dapibus sem. Proin commodo nibh est, at porta magna auctor eu. Nunc sed elementum mauris. Mauris sollicitudin, nisl at finibus iaculis, velit diam ullamcorper arcu, quis luctus massa risus id turpis. Etiam vitae scelerisque risus. Nullam et facilisis nisi. Sed a libero posuere, facilisis odio vitae, gravida tortor. Ut vitae nunc augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed non ante augue."
    ,"Suspendisse sed vestibulum eros. Proin gravida quam id magna dictum, sed finibus arcu scelerisque. Phasellus varius urna eu ultricies ultrices. Curabitur pulvinar sit amet nisl vel hendrerit. Sed vestibulum tortor et mollis hendrerit. Integer tincidunt felis urna, sed faucibus lorem placerat facilisis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed placerat turpis quis ante imperdiet scelerisque. Nullam aliquet vitae odio et eleifend."];

//creating an image
function createImg(idx){
    var imag = new Image();
    //choose random integer for array index
    var int = Math.floor(Math.random()*imgArr.length);
    imag.src=imgArr[int];
    imag.id="img"+idx;
    return imag
}

//creating a button
function createButt(value){
    var btn = document.createElement("input");
    btn.type="button";
    btn.className = "ui button";
    btn.value=value;
    return btn;
}


