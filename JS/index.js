//quiz
let quizContainer = document.getElementById('question');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

let quiz = [{
        question: "ギネスビールの発祥の国はどこでしょう",
        answers: {
            1: "アメリカ",
            2: "ドイツ",
            3: "アイルランド",
            4: "インド",
        },
    },
    {
        question: "ギネスビールの色を漢字で書いてください",
        answers: {
            1: "<input type='text' id = 'txt'>",
        },
    },
    {
        question: "ドラフトギネスの缶に白い玉が入っている理由",
        answers: {
            1: "冷たさを保つため",
            2: "おいしくするため",
            3: "泡を作るため",
            4: "音を楽しむため",
        },
    }
];

//クイズ表示
function buildQuiz() {
    let put = [];
    quiz.forEach((currentQuestion, questionNumber) => {
        let answers = [];

        for (letter in currentQuestion.answers) {
            if (questionNumber == 0) {
                answers.push(
                    `<label> 
                <input type = "radio"name = "question${questionNumber}"value = "${letter}" >
                ${currentQuestion.answers[letter]} 
                </label>`
                );
            } else if (questionNumber == 1) {
                answers.push(
                    `<label> 
                ${currentQuestion.answers[letter]} 
                </label>`
                );
            } else {
                answers.push(
                    `<label> 
                <input type = "checkbox" name = "question${questionNumber}"value = "${letter}" >
                ${currentQuestion.answers[letter]} 
                </label>`
                );
            };
        }
        put.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = put.join('');
    let submit = document.getElementById("submit");
    submit.innerHTML = "結果送信";
}
buildQuiz();

//クイズ結果
document.getElementById("submit").onclick = function quizResult() {
    let point = 0;

    let text = document.getElementById("txt");
    let elements = document.getElementsByName('quiz');
    let len = elements.length;

    for (let i = 0; i < len; i++) {
        if (i === 2 && elements.item(i).checked) {
            point += 1;
            console.log(point);
        }
    }
}

//slider
$('.slider_img').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
});

$('.slider_element').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1
});

//rewrite
document.getElementById("yes").onclick = function() {
    document.getElementById("rewrite").classList.add("invert");
};
document.getElementById("no").onclick = function() {
    document.getElementById("rewrite").classList.remove("invert");
};