nodeRequire("electron")
    .remote.getCurrentWindow()
    .setVibrancy("ultra-dark");

var class_names = [
    "bg-2",
    "bg-3",
    "bg-4",
    "bg-5",
    "bg-6",
    "bg-7",
    "bg-8",
    "bg-9",
    "bg-10",
    "bg-11"
];
// 动态修改背景图
let i = Math.floor(Math.random() * class_names.length);
document
    .getElementsByTagName("html")[0]
    .setAttribute("class", class_names[i % class_names.length]);
setInterval(function() {
    document
        .getElementsByTagName("html")[0]
        .setAttribute("class", class_names[i % class_names.length]);
    i++;
}, 1000 * 60 * 5);
