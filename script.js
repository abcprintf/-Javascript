function Random() {
    var id = "";
    for (var i = 0; i < 12; i++) {
        id += parseInt(Math.random() * 10);
    }
    var cardid = (id + digit(id));
    $('#show-card-id').val(cardid);
    $('#show-card-id2').val(cardid);
}

function digit(id) {
    var base = 100000000000;
    var now;
    var sum = 0;
    for (var i = 13; i > 1; i--) {
        now = Math.floor(id / base);
        id = id - now * base;
        sum += now * i;
        base = base / 10;
    }
    var check = (11 - (sum % 11)) % 10;
    return check;
}

function checkID(id) {
    if (id.length != 13) return false;
    for (i = 0, sum = 0; i < 12; i++)
        sum += parseFloat(id.charAt(i)) * (13 - i);
    if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12)))
        return false;
    return true;
}

function Check() {

    var cardID = $('#show-card-id2').val();
    if(cardID == ""){
        alert("กรุณากรอกรหัส 13 ตัว");
    }else{
        if (checkID(cardID)) {
            alert("รหัสถูกต้อง");
        } else {
            alert("รหัสไม่ถูกต้อง");
        }
    }
}