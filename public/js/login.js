var socket = io()

$('#login').click(function () {
    var acnt = $('#acnt').val()
    var pwd = $('#pwd').val()
    
    socket.emit('login', {
        'acnt': acnt,
        'pwd': pwd
    })
})

socket.on('userPage', function () {
    window.location.replace("../userpage/userPage.html")
})

socket.on('error', function () {
    window.location.replace("./error.html")
})