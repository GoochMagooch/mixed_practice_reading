const peak_sections = ["Introduction: The Gift", "The Lesson of Perfect Pitch", "About This Book", "The Power of Purposeful Practice", "The Rise of Extraordinary Performers", "The Usual Approach", "Purposeful Practice",
    "The Limits of Purposeful Practice", "Harnessing Adaptability", "The Brains of London Cabbies", "Adaptability", "Challenging Homeostasis", "Shaping The Brain", "Building Your Own Potential", "Mental Representations",
    "The Accidental Blindfold Chess Master", "The Secret To Winning Chess", "Mental Representations", "Recognizing and Responding To Patterns", "Making Sense of Information", "Finding an Answer", "Planning",
    "Mental Representations in Learning", "Physical Activities are Mental Too", "The Gold Standard", "A Highly Developed Field", "The Challenge of the Violin", "Good Versus Better Versus Best", 
    "The Principles of Deliberate Practice", "Applying the Principles of Deliberate Practice", "No, The Ten-Thousand-Hour Rule isn't Really a Rule", "Principles of Deliberate Practice on the Job", "Practicing While Getting Work Done",
    "The Top Gun Approach to Learning", "Knowledge Versus Skills", "A New Approach to Training", "Principles of Deliberate Practice in Everyday Life", "First, Find a Good Teacher", "Engagement", "If You Don't Have a Teacher",
    "Getting Past Plateus", "Maintaining Motivation", "The Road to Extraordinary", "Starting Out", "Becoming Serious", "Commitment", "The Benefits of Starting Young", "More Lessons from Perfect Pitch", "Pathbreakers",
    "But What About Natural Talent", "The Magic of Paganini", "Mozart and His Legend", "The Magical High Jumper", "Savants", "The Anti-Prodigies", "Practice Versus \"Talent\" in Chess", "The Real Role of Innate Characteristics",
    "The Dark Side of Believing in Innate Talent", "Where Do We Go From Here?", "The Promise of Deliberate Practice", "Homo Exercens"]

let sections_read = []

const add = document.querySelector(".add")
const check = document.querySelector(".check")
const input = document.querySelector(".input")
const output = document.querySelector(".output")
const err = document.querySelector(".err")

function add_section() {

    const new_section = input.value.trim()

    if (new_section == "") {
        err.textContent = "please enter section title"
    } else {
        output.textContent = `${new_section} has been added to your list of read sections!`
    }
}

add.addEventListener("click", add_section)

// sections_read = sections_read.push(input.value)