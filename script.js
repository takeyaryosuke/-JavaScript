//8

var x = 2
var y = 1
if (x > y) {
 console.log("xはyより⼤きい");
}

var x = 1
var y = 2
if (x < y) {
 console.log("xはyより⼤きい");
}


var x = 10
var y = 0
if (x >= y) {
 console.log("xはyより⼤きいまたは等しい");
}

var x = 0
var y = 10
if (x <= y) {
 console.log("xはyより⼤きいまたは等しい");
}








//9

var boolean = true;
var resultText = boolean ? "Aの処理" : "Bの処理";
console.log(boolean);


const number = 4
console.log(number > 5 ? '5より大きいです' : '5より小さいです')
console.log(number < 5 ? '5より小さいです' : '5より大きいです')
console.log(number >= 10 ? '10以上です' : '10以下です')

var value = undefined
console.log(value = undefined ? '有り' : '無し')









//10

var fruits = ["リンゴ", "バナナ", "イチゴ"];
console.log(fruits[0]);
console.log(fruits[2]);

//key プログラミングのプロパティ名のこと
//value プログラミングの値のこと


var teacher = {
    name: "梨花",
    age: 23,
    subject: "国語",
   }
   console.log(teacher);


   var teachers = [
    {
    name: "太郎",
    age: 25,
    subject: "国語",
    },
    {
    name: "浩司",
    age: 30,
    subject: "数学",
    },
    {
    name: "花⼦",
    age: 26,
    subject: "社会",
    }
   ]
   console.log(teachers[0].subject);
   console.log(teachers[2].subject);
   



//11

for (var i = 50; i < 55; i++) {
 console.log("ループ" + i + "回⽬");
};


var items = ["スマホ", "パソコン", "テレビ"];
for (index in items) {
 console.log(items[index]);
};


var students = [ { name: "凛", age: 15, subject: "体育", }, { name: "花陽", age:
15, subject: "国語", }, { name: "真姫", age: 15, subject: "音楽", } ]; for (student
of students) { console.log(students); }; 





//12


function showAlert() {
 alert("functionTestが実⾏されました。")
}
showAlert()


var getText = function () {
 return "getTextが実⾏されたのでこのテキストを返します。"
};
console.log(getText());


//スコープとは、変数がどの場所から参照できるかの範囲。
//関数内で宣言された変数は関数の中でしか参照できない。




//13

//varは変数の再代⼊・再宣⾔が⾏える。
//再代⼊は1度作った変数に対して再び値を代⼊すること。
//再宣⾔は1度宣⾔した変数と同じ変数を作ることです。

//varは再宣⾔・再代⼊ができてしまうからグローバルな変数になりやすい。
//⽤意に再代⼊・再宣⾔ができてしまうからvarで宣⾔した変数に対して何が⼊って来るか分からなくなってし
//まう。そうなって来るとバグの温床となってうからvarは基本使わない。

//定数とは、一度定義した名前（変数名）が常に同じ値を示すもの。


//14

//コーディング、プログラミングを⾏う際、id名、class名、変数名、関数名を適当な名前にしてしまうとあと
//で⾒返した時にどう⾔った役割なのかが分からくなってしまう。
//また、複数⼈で開発することもあり、それぞれが⾃由に名前をつけてしまうと統⼀性のないものができてしま
//うから統⼀性を持たせる為に命名規則を⽤いる。


//-で⽂字を区切る名称をケバブケース
//left-sidebar
//_で⽂字を区切る名称をスネークケース
//right_sidebar

//キャメルケースは2ワードを使⽤して名称を付ける際、2ワード⽬の頭⽂字を⼤⽂字にする⽅法
//const getText = abcde


//15

//プロパティはオブジェクトに関連する情報（キーと値のペア）を保持し、
//メソッドはオブジェクトに対する操作を定義する。

var obj = {
    showText: function() {

        console.log( 'Hello World' );

    }
}
obj.showText();


var obj = {
    showNum: function() {

        console.log( '数字です' );

    }
}
obj.showNum();


var obj = {
    showText: function( name ) {
        
        console.log( 'こんにちは、' + name + 'さん！' );
        
    }
}

obj.showText('太郎');






function fruit(name, price) {
 const result = name + "の値段は" + price + "円です。"
 console.log(result);

};
fruit('キャベツ', 200);






function addTax(price, func) {
 // priceは値段
 // funcは実⾏する関数名
 // 税込み価格を計算して四捨五⼊して整数にしている(スコープ内でしか参照できません。)
 const taxPrice = Math.round(price * 1.10);
}
// トマトの税込み価格をコンソールに表⽰させる処理
// ⽟ねぎの税込み価格をコンソールに表⽰させる処理




function addTax(price, func) {
 const taxPrice = Math.round(price * 1.10);
 const name = "トマト";
 func(name, price);
}

const price = function price(name, price) {
 console.log(name + " の値段は" + price * 1.10 + "円です。");
}

addTax(200, price);



function addTax2(price2, func) {
 const taxPrice2 = Math.round(price2 * 1.10);
 const name2 = "玉ねぎ";
 func(name2, price2);
}

const price2 = function price(name2, price2) {
 console.log(name2 + " の値段は" + price2 * 1.10 + "円です。");
}

addTax2(400, price);


//16


const mainTitle = document.getElementById("main-title")
console.log(mainTitle);



const contents = document.getElementsByClassName("contents")
console.log(contents);



// idで指定したwrapperを取得
const wrapper = document.getElementById("wrapper")
// 挿⼊するHTML要素
const newBox = `<div class="new-box">new-box要素</div>`
// setTimeoutはJavaScriptが⽤意している関数です・
setTimeout(function () {
 // wrapper要素内先頭にnewBoxに代⼊されたHTML要素を挿⼊
 wrapper.insertAdjacentHTML("afterbegin", newBox)
 // wrapper要素の直後にnewBoxに代⼊されたHTML要素を挿⼊
 wrapper.insertAdjacentHTML("afterend", newBox)
}, 3000)



// idで指定したparentを取得
const parent = document.getElementById("parent")
// idで指定したchildを取得
const child = document.getElementById("child")
setTimeout(function () {
 // 3秒後に#child要素が削除される
 parent.removeChild(child)
}, 3000)


