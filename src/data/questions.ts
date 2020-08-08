const questions = [{
  category: "Milestones",
  question: "At what age do young women and men leave their parental home?",
  answers: [
    { selector: "a", text: "Women at the age of 25, men at the age of 27", isTrue: true },
    { selector: "b", text: "Men at the age of 20, women at the age of 22Men at the age of 20, women at the age of 22", isTrue: false },
    { selector: "c", text: "Both at the age of 21", isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-1a.html?lang=en"
},
{
  category: "Living together",
  question: "In the EU, there are more young men aged up to 18 than women. This sentence is:",
  answers: [
    { selector: "a", text: "Wrong", isTrue: false },
    { selector: "b", text: "Right", isTrue: true }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-1b.html?lang=en"
},
{
  category: "Health perception",
  question: "In the EU, how do women and men perceive their health?In the EU, how do women and men perceive their health?",
  answers: [
    { selector: "a", text: 'Men are more likely than women to perceive their health as "good"', isTrue: true },
    { selector: "b", text: 'Women are more likely than men to perceive their health as "good"', isTrue: false },
    { selector: "c", text: 'Both men and women perceive their health in the same way', isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-1c.html?lang=en"
},
{
  category: "Life satisfaction",
  question: "In the EU, who is happier with their life – men or women?",
  answers: [
    { selector: "a", text: 'Men are happier', isTrue: true },
    { selector: "b", text: 'Women are happier', isTrue: false },
    { selector: "c", text: 'They are equally happy', isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-1d.html?lang=en"
},
{
  category: "Education",
  question: "In the EU on average, who has the higher education level?",
  answers: [
    { selector: "a", text: 'Men', isTrue: false },
    { selector: "b", text: 'Women', isTrue: true },
    { selector: "c", text: 'Both have the same level', isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-2a.html?lang=en"
},
{
  category: "Employment",
  question: "The proportion of persons working is highest:",
  answers: [
    { selector: "a", text: 'For men with two children', isTrue: true },
    { selector: "b", text: 'For women with two children', isTrue: false },
    { selector: "c", text: 'For men with three children', isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-2b.html?lang=en"
},
{
  category: "Careers",
  question: "Pick the correct sentence: In the EU…",
  answers: [
    { selector: "a", text: '… 1 out of 3 managers is a woman', isTrue: true },
    { selector: "b", text: '… 1 out of 4 managers is a woman', isTrue: false },
    { selector: "c", text: '… 1 out of 5 managers is a woman', isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-2c.html?lang=en"
},
{
  category: "Earnings",
  question: "A woman in the EU earns less than a man, but how large is the difference?",
  answers: [
    { selector: "a", text: 'Women earn on average 8 % less', isTrue: false },
    { selector: "b", text: 'Women earn on average 15 % less', isTrue: true },
    { selector: "c", text: 'Women earn on average 29 % less', isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-2d.html?lang=en"
},
{
  category: "Nutrition habits",
  question: "The share of persons considered to be overweight (Body Mass Index of over 25) is highest:",
  answers: [
    { selector: "a", text: 'For men', isTrue: true },
    { selector: "b", text: 'For women', isTrue: false },
    { selector: "c", text: 'Both have the same level', isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-3a.html?lang=en"
},
{
  category: "Cultural habits",
  question: "Pick the correct sentence",
  answers: [
    { selector: "a", text: 'Men read more than women', isTrue: false },
    { selector: "b", text: 'Women read more than men', isTrue: true },
    { selector: "c", text: 'Both have the same reading habits', isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-3b.html?lang=en"
},
{
  category: "Internet habits",
  question: "Who uses the internet more for social media?",
  answers: [
    { selector: "a", text: 'Men', isTrue: false },
    { selector: "b", text: 'Women', isTrue: true },
    { selector: "c", text: 'There is no difference', isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-3c.html?lang=en"
},
{
  category: "Cooking and housework",
  question: "Pick the correct sentence:",
  answers: [
    { selector: "a", text: '79 % of women and 34 % of men in the EU cook or do housework on a daily basis', isTrue: true },
    { selector: "b", text: '65 % of women and 50 % of men in the EU cook or do housework on a daily basis', isTrue: false },
    { selector: "c", text: '80 % of both women and men in the EU cook or do housework on a daily basis', isTrue: false }
  ],
  url: "https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-3d.html?lang=en"
}
]


export default questions