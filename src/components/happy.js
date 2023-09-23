var question = {
    choices: [
        [
            "提到同辈压力，你能联想到哪些关键词？"
        ],
        [
            "你是否曾经感受过来自同龄人的压力？是什么样的压力？可以具体谈谈你的经历吗？"
        ],
        [
            "在大学中，同辈压力对你产生了哪些影响？"
        ],
        [
            "在你看来，产生同辈压力的原因是什么？"
        ],
        [
            "在你看来，什么样的人更容易被同辈压力影响？并谈谈理由。"
        ],
        [
            "你认为大学校园中可能出现的同辈比较是好现象还是坏现象？"
        ],
        [
            "如果你的朋友或同学正在经历同辈压力，你会如何帮助他们？"
        ]
    ],
    responses: [
        [
            "内卷，摆烂，躺平"
        ],
        [
            "没有感受过，所以不知道是什么样的压力，于是也没有经历"
        ],
        [
            "因为没有感受过所以没什么影响"
        ],
        [
            "非良性的对比心理，内卷的时代背景"
        ],
        [
            "对自己认知不清楚的人容易被同辈压力影响，因为他们不知道自己真正想要什么，容易产生自身能力与目标不匹配的不自信从而陷入焦虑"
        ],
        [
            "比较没有好坏，要看比较之后是陷入颓丧还是奋进向前"
        ],
        [
            "我会帮他写我会写的作业"
        ]
    ],
    current: 0
};

export default function generate(Nindex) {
    if (Nindex >= question.choices.length) {
        return;
    }
    var cho = [];
    for (let i = 0; i < question.choices[Nindex].length; i++) {
        cho[i] = document.createElement("div");
        cho[i].innerHTML = `${question.choices[Nindex][i]}`;
        cho[i].className = "choices";
        cho[i].addEventListener("click", function () {
            if (Nindex == question.current) {
                question.current++;
                var ans = document.createElement("div");
                ans.innerHTML = `<br>${question.responses[Nindex][i]}<br><br>`;
                ans.className = "answers";
                document.getElementById("container").append(ans);
                setTimeout(() => {
                    generate(Nindex + 1);
                }, 1200);
            }
        })
        document.getElementById("container").append(cho[i]);
    }

}