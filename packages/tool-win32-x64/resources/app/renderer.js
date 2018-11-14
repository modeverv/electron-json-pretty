// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function pretty() {
    try {
        var textarea_text = JSON.parse($("#area").val());
        $("#out").text(JSON.stringify(textarea_text, null, 2));
    } catch{
        alert("JSON変換エラー")
    }
}

$(function () {
    $("#process").click(function () {
        pretty();
    });
    pretty();
});