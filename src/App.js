import { useState } from "react";
import { useState, useEffect } from "react";

const questionSets = {
  comedy: {
    "Big Bang Theory": [
      {
        question: "Sheldon has a roommate agreement with Leonard.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "What is the name of Sheldon's favorite spot on the couch?",
        answers: [
          { text: "Left corner", correct: false },
          { text: "Middle seat", correct: false },
          { text: "His spot", correct: true },
          { text: "Cushion zone", correct: false }
        ]
      },
      {
        question: "Howard is an astronaut.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Raj can talk to women without alcohol in early seasons.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
        ]
      },
      {
        question: "Penny is a scientist.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
        ]
      },
      {
        question: "Leonard is an experimental physicist.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Sheldon worked at Caltech.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Penny is from Nebraska.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Howard has a master's degree.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Raj owns a Yorkshire Terrier named Cinnamon.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Sheldon dislikes change.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Leonard and Penny dated in Season 1.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
        ]
      },
      {
        question: "The elevator in the apartment building works.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
        ]
      },
      {
        question: "Howard lives with his mother.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Raj is allergic to nuts.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Sheldon has a twin sister.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Leonard wears contact lenses.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
        ]
      },
      {
        question: "Penny has a brother named Randall.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Raj works in the field of particle physics.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
        ]
      },
      {
        question: "Howard often uses the phrase 'Bazinga!'.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
        ]
      },
      {
        question: "Penny's last name is revealed in early seasons.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
        ]
      },
      {
        question: "Leonard has lactose intolerance.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Sheldon enjoys comic books.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Raj is originally from India.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Penny once worked at The Cheesecake Factory.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      }
    ],
    "How I Met Your Mother": [
      {
        question: "Ted is an architect.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Barney always says 'Suit up!'.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      }
    ]
  },
  Scriptures: {
    "Kingdom": [
  {
    question: "Isaac is called the child of promise.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Abraham used his own strength to conceive Isaac.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "When would Isaac have children?.",
    answers: [
      { text: "After he met his wife", correct: false },
      { text: "Only after resurrection", correct: true },
      { text: "Before he was 430 years", correct: false },
      { text: "He had daughters", correct: false }
    ]
  },
  {
    question: "Faith is a gift from God according to Ephesians 2:10.",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false }
    ]
  },
  {
    question: "Abraham had so many sons.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "What does Romans 4:16 talk about?.",
    answers: [
      { text: "the love of family", correct: false },
      { text: "faith and grace", correct: true },
      { text: "Jews blinded", correct: false },
      { text: "washing by water", correct: false }
    ]
  },
  {
    question: "Abraham's body and Sarah's womb were both alive and strong.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Righteousness was imputed to Abraham because he was a good man.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Isaac was Abraham’s only son. Prove with scriptures",
    answers: [
      { text: "Genesis 22:2", correct: true },
      { text: "Isaiah 50:2", correct: false },
      { text: "None of the above", correct: false },
      { text: "Both given verses", correct: false }

    ]
  },
  {
    question: "What did Isaac’s coming from the altar symbolise?.",
    answers: [
      { text: "Holiness", correct: false },
      { text: "Obedience", correct: false },
      { text: "Purity", correct: false },
      { text: "Resurrection", correct: true }
    ]
  },
  {
    question: "What did God require from Abraham in Genesis 22?",
    answers: [
      { text: "His wealth", correct: false },
      { text: "His land", correct: false },
      { text: "The promise", correct: true },
      { text: "His livestock", correct: false }
    ]
  },
  {
    question: "Who laid iniquity on Jesus according to Isaiah 53?",
    answers: [
      { text: "Pontius Pilate", correct: false },
      { text: "The Pharisees", correct: false },
      { text: "The Lord", correct: true },
      { text: "The Jews", correct: false }
    ]
  },
  {
    question: "What was the role of Jesus as stated in Hebrews 8:1-3?",
    answers: [
      { text: "Judge", correct: false },
      { text: "Prophet", correct: false },
      { text: "High Priest", correct: true },
      { text: "Evangelist", correct: false }
    ]
  },
  {
    question: "In Romans 9:7, in whom shall Abraham’s seed be called?",
    answers: [
      { text: "Ishmael", correct: false },
      { text: "Eliezer", correct: false },
      { text: "Isaac", correct: true },
      { text: "Jokshan", correct: false }
    ]
  },
  {
    question: "According to John 20:17, why did Jesus tell Mary not to touch him?",
    answers: [
      { text: "He was angry", correct: false },
      { text: "He had not yet ascended to the Father", correct: true },
      { text: "He didn’t recognize her", correct: false },
      { text: "He was still bleeding", correct: false }
    ]
  },
  {
    question: "What is Christ called in relation to kingship?",
    answers: [
      { text: "Chief Prophet", correct: false },
      { text: "High Judge", correct: false }, 
      { text: "King of Kings", correct: true },
      { text: "Angel of Light", correct: false }
    ]
  },
  {
    question: "What are believers called to be in the world?",
    answers: [
      { text: "Sheep", correct: false },
      { text: "cubs", correct: true },
      { text: "Eagles", correct: false },
      { text: "Vines", correct: false }
    ]
  },
  {
    question: "What animal is Judah compared to in Jacob’s blessing?",
    answers: [
      { text: "Ox", correct: false },
      { text: "Sheep", correct: false },
      { text: "Lion", correct: true },
      { text: "Horse", correct: false }
    ]
  },
  {
    question: "What did Jesus come to achieve?",
    answers: [
      { text: " A military base", correct: false },
      { text: "A spiritual kingdom", correct: true},
      { text: "A political empire", correct: false },
      { text: "An earthly monarchy", correct: false }
    ]
  },
  {
    question: "What does a shepherd do for his sheep?",
    answers: [
      { text: "Leads, protects, and lays down his life", correct: true },
      { text: "Watches from afar", correct: false },
      { text: "Uses them for sacrifice only", correct: false },
      { text: "Gives them grass", correct: false }
    ]
  },
  {
    question: "Why did Jesus ride a donkey on when entering Jerusalem?",
    answers: [
      { text: "There were no horses", correct: false },
      { text: "He loved donkeys", correct: false },
      { text: "He is/was a humble and peaceful king", correct: true },
      { text: "camels were expensive", correct: false }
    ]
  },
  {
    question: "How does Jesus describe those who follow His voice?",
    answers: [
      { text: "As His sheep", correct: true },
      { text: "As His prophets", correct: false },
      { text: "As Christians", correct: false },
      { text: "As His angels", correct: false }
    ]
  },
  {
    question: "Who alone can truly lay down His life for the sheep?",
    answers: [
      { text: "The Apostle", correct: false },
      { text: "The High Priest", correct: false },
      { text: "The Good Sherpherd", correct: true },
      { text: "The Disciple", correct: false }
    ]
  },
  {
    question: "The devil is indeed clever. Prove with a verse",
    answers: [
      { text: "Galatians 4:15", correct: false },
      { text: "Genesis 3:1", correct: true },
      { text: "1 Timothy 3:15", correct: false },
      { text: "Romans 4:9", correct: false }
    ]
  },
  {
    question: "What title describes Jesus' authority as above all kings?",
    answers: [
      { text: "The Revelator", correct: false },
      { text: "Prince of Peace", correct: false },
      { text: "Shepherd of Judah", correct: false },
      { text: "Lord of Lords", correct: true }
    ]
  },
  {
    question: "What did the miracles, wonders, and signs done by Jesus prove?",
    answers: [
     { text: "That Jesus was sent to overthrow Rome", correct: false },
      { text: "That Jesus wanted popularity", correct: false },
      { text: "That Jesus was a prophet only", correct: false },
      { text: "That indeed he was Christ", correct: true },
      
    ]
  },
  {
    question: "What happened at Shavuot in Acts 2?",
    answers: [
      { text: "Peter preached his first sermon: that Jesus is both Lord and Christ", correct: true },
      { text: "Jesus ascended back to heaven", correct: false },
      { text: "Paul healed the blind", correct: false },
      { text: "Stephen was stoned", correct: false }
    ]
  },
  {
    question: "How did Peter describe the people in Acts 2 and 3?",
    answers: [
      { text: "As faithful worshippers", correct: false },
      { text: "As blessed disciples", correct: false },
      { text: "As kings and priests", correct: false },
      { text: "As murderers of Jesus", correct: true }
    ]
  },
  {
    question: "What must happen after the truth is preached, according to Acts 3:19?",
    answers: [
      { text: "Repentance", correct: true },
      { text: "Fasting", correct: false },
      { text: "Temple sacrifice", correct: false },
      { text: "Public mourning", correct: false }
    ]
  },
  {
    question: "According to John 16:7, what is necessary for powerful preaching?",
    answers: [
      
      { text: "Financial support", correct: false },
      { text: "A large crowd", correct: false },
      { text: "The coming of the Holy Spirit", correct: true },
      { text: "Musical instruments", correct: false },
      
    ]
  },
  {
    question: "Who raised Jesus from the dead according to Romans 8:11?",
    answers: [
      { text: "The angels of heaven", correct: false }, 
      { text: "The Spirit of God", correct: true },
      { text: "No one", correct: false },
      { text: "The Lamb", correct: false }
    ]
  },
  {
    question: "What does 1 John 5:6-8 say?",
    answers: [
      { text: "What is born of flesh is flesh", correct: false },
      { text: "We are of God and he heareth us", correct: false },
      { text: "The Spirit bears witness that Jesus is Christ", correct: true },
      { text: "If we say we have fellowship with hin and walk in darkness, we lie.", correct: false }
    ]
  },
  {
    question: "What kind of act did Jesus perform in Mark 5?",
    answers: [
      { text: "Taught his disciples prayer", correct: false },
      { text: "Healing of woman with issue of blood", correct: true },
      { text: "A teaching on giving", correct: false },
      { text: "Sent his disciples out to preach", correct: false }
    ]
  },
  {
    question: "What does 2 Thessalonians 3:10 teach about work and eating?",
    answers: [
      { text: "Food is for the belly, and belly for food", correct: false },
      { text: "If anyone does not work, neither should he eat", correct: true },
      { text: "Widows and orphans are supposed to get enough share of food", correct: false },
      { text: "Food should be distributed equally", correct: false }
    ]
  },
  {
    question: "Did Jesus perform charitable acts with money, like giving to the poor?",
    answers: [
      { text: "No, He focused on miracles that showed mercy", correct: true },
      { text: "Yes, He often gave coins to beggars", correct: false },
      { text: "Yes, He opened a food bank in Galilee", correct: false },
      { text: "Yes, He collected offerings for the temple", correct: false }
    ]
  },
  {
    question: "When was the Kingdom series launched?",
    answers: [
      { text: "Revelation Gathering 1 2024", correct: false },
      { text: "RG 2023", correct: false },
      { text: "Prayer retreat", correct: false },
      { text: "None of the above is true", correct: true }
    ]
  },
  {
    question: "Why did we have to leave church matters and pursue the Kingdom?",
    answers: [
      { text: "Because the word is always changing", correct: false },
      { text: "Sermons finished on foundational issues", correct: false },
      { text: "Because Christ came to introduce the Kingdom where he is King", correct: true},
      { text: "Because the church needed more people", correct: false }
    ]
  },
  {
    question: "What is the aim of the Kingdom series?",
    answers: [
      { text: "To exercise practical faith", correct: false },
      { text: "To give us our freedom", correct: false },
      { text: "To exercise our roles as princes", correct: false },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: "Who is not a deacon here?",
    answers: [
      { text: "Motsi", correct: false },
      { text: "Murwira", correct: false },
      { text: "Makina", correct: false },
      { text: "None of the above", correct:true }
    ]
  },
  {
    question: "On the message, The Father blessing, what did you learn?",
    answers: [
      { text: "That fathers are humble people", correct: false },
      { text: "Fathers have power to shape your future. They are your first god", correct: true },
      { text: "Fathers should be strong and provide", correct: false },
      { text: "Unbelieving fathers are not meant to be respected", correct: false }
    ]
  }
   ]
  },
  politics: {
    Germany: [
      {
        question: "Germany is a federal republic.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "Angela Merkel is currently the Chancellor.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
        ]
      }
    ],
    America: [
      {
        question: "The U.S. has 50 states.",
        answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        question: "The U.S. President serves for 6 years per term.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
        ]
      }
    ]
  }
};
export default function QuizApp() {
  const [stage, setStage] = useState("category");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [questionCount, setQuestionCount] = useState(15);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    if (showResult) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showResult]);
  
  function selectCategory(category) {
    setSelectedCategory(category);
    setStage("subcategory");
  }

  function selectSubCategory(subcat) {
    setSelectedSubCategory(subcat);
    setStage("count");
  }

  function selectQuestionCount(count) {
    setQuestionCount(count);
    const selectedQuestions = questionSets[selectedCategory][selectedSubCategory].slice(0, count);
    setQuestions(selectedQuestions);
    setStage("quiz");
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers([]);
  }

  function handleAnswer(answer) {
    const correct = answer.correct;
    if (correct) setScore(score + 1);
    setUserAnswers([...userAnswers, { ...questions[currentIndex], selected: answer.text }]);
    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setShowResult(true);
    }
  }

  function restart() {
    setStage("category");
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setQuestionCount(15);
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  }

  return (
    <div className="min-h-screen overflow-y-auto bg-white p-4 text-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">🎉 Fun with Friends</h1>

      {stage === "category" && (
  <div className="category-selection">
    <p className="mb-4 text-lg font-medium">Choose a category:</p>
    <div className="circle-button-container">
      {Object.keys(questionSets).map((cat, idx) => (
        <button
          key={idx}
          onClick={() => selectCategory(cat)}
          className="circle-button"
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>

    {/* Add styles here */}
    <style>{`
      .circle-button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin-top: 20px;
      }

      .circle-button {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        background-color:#8B1C62;
        color: white;
        font-size: 1.1rem;
        font-weight: bold;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
      }

      .circle-button:hover {
        background-color: #3e9143;
        transform: scale(1.05);
      }
    `}</style>
  </div>
)}

      {stage === "subcategory" && (
        <div>
          <p className="mb-2">Choose a quiz under {selectedCategory}:</p>
          {Object.keys(questionSets[selectedCategory]).map((subcat, idx) => (
            <button key={idx} onClick={() => selectSubCategory(subcat)} className="block w-full bg-green-100 hover:bg-green-200 py-2 my-1 rounded">
              {subcat}
            </button>
          ))}
        </div>
      )}

      {stage === "count" && (
        <div>
          <p className="mb-2">How many questions do you want?</p>
          {[15, 30, 60].map((count, idx) => (
            <button key={idx} onClick={() => selectQuestionCount(count)} className="block w-full bg-purple-100 hover:bg-purple-200 py-2 my-1 rounded">
              {count} Questions
            </button>
          ))}
        </div>
      )}

      {stage === "quiz" && !showResult && (
        <div>
          <p className="text-lg mb-2">
            {currentIndex + 1}. {questions[currentIndex].question}
          </p>

          <div className="space-y-2">
            {questions[currentIndex].answers.map((ans, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(ans)}
                className="block w-full bg-gray-200 hover:bg-gray-300 py-2 rounded"
              >
                {ans.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {showResult && (
        <div>
          <p className="text-xl font-bold">Score: {score} / {questions.length}</p>
          <p className="mb-4">Percentage: {((score / questions.length) * 100).toFixed(2)}%</p>
          <div className="text-left">
            {userAnswers.map((q, i) => (
              <div key={i} className="mb-2 p-2 border rounded">
                <p className="font-semibold">Q{i + 1}: {q.question}</p>
                <p className={q.answers.find(a => a.text === q.selected)?.correct ? "text-green-600" : "text-red-600"}>
                  Your answer: {q.selected} {q.answers.find(a => a.text === q.selected)?.correct ? "✔️" : "❌"}
                </p>
                {!q.answers.find(a => a.text === q.selected)?.correct && (
                  <p className="text-green-700">Correct answer: {q.answers.find(a => a.correct).text}</p>
                )}
              </div>
            ))}
          </div>
          <button onClick={restart} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Restart</button>
        </div>
      )}
        </div>
  </div> 
);
}

