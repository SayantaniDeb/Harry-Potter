var resultOptions = [
    {
        title: 'Gryffindor!',
        desc: '<p> Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion and its colours are scarlet and gold. Minerva McGonagall is the most recent Head of Gryffindor. Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick", was the house ghost. The founder of the house was Godric Gryffindor. Gryffindor corresponds to the element of Fire. The common room is located in one of the highest towers at Hogwarts, the entrance is situated on the seventh floor in the east wing of the castle and is guarded by a portrait of The Fat Lady. She permits entrance if given the correct password, which is changed numerous times throughout the school year. Famous Gryffindors include: Albus Dumbledore, Harry Potter, and Celestina Warbeck. <br> <br>Go back to <a href="https://sayantanideb.github.io/Harry-Potter/"> Homepage </a> </p>'
    },
    {
        title: 'Hufflepuff!',
        desc: "<p>Hufflepuff, founded by Helga Hufflepuff, values hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members. Its emblematic animal is the badger, and Yellow and Black are its colours. Pomona Sprout was the Head of Hufflepuff during 1991 \-\ 1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff is currently unknown. The Fat Friar is its ghost. Hufflepuff corresponds to the element of earth. The Hufflepuff dormitories and common room are located somewhere in the basement, near the castle's kitchens. It can be accessed by tapping the barrel two from the bottom, middle of the second row in the rhythm of \"Helga Hufflepuff\" and is described as being a cosy and welcoming place with yellow hangings, fat armchairs, and underground tunnels that lead to the dormitories, which have perfectly round doors, similar to barrel tops. Famous Hufflepuffs include: Hengist of Woodcroft (founder of Hogsmead), Newt Scamander, and Artemisia Lufkin (first female minister for magic). <br> <br>Go back to<a href='https://sayantanideb.github.io/Harry-Potter/'> homepage</a></p>"
    },
    {
        title: 'Ravenclaw!',
        desc: "<p>Ravenclaw values intelligence, knowledge, and wit. Its emblematic animal is the eagle, and its colours are blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw is the Grey Lady, who was the daughter of Rowena Ravenclaw, the house's founder. Ravenclaw corresponds to the element of air. The Ravenclaw common room and dormitories are located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, can be answered by non-Ravenclaws. Famous Ravenclaws include: Gilderoy Lockheart, Ignatia Wildsmith (inventor of floo powder), and Garrick Ollivander. <br /> <br />Go back to <a href='https://sayantanideb.github.io/Harry-Potter/'> homepage</a></p>"
    },
    {
        title: 'Slytherin!',
        desc: "<p>Slytherin house values ambition, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal is the serpent, and its colours are emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997 \-\ 1998 school year, replacing Severus Snape, who as well, replaced Slughorn when he retired for the first time several years ago. The Bloody Baron is the house ghost. Slytherin corresponds roughly to the element of water. The Slytherin dormitories and common room are reached through a bare stone wall in the Dungeons. The Slytherin common room lies beneath the Black Lake. It is a long, low underground room with rough stone walls and silver lamps hanging from the ceiling. Famous Slytherins include: Merlin, Tom Riddle, and Dolores Umbridge. <br /> <br /> Go back to <a href='https://sayantanideb.github.io/Harry-Potter/'>homepage</a></p>"
    }
];

var quizSteps = $('#quizzie .quiz-step'), totalScore = 0;
quizSteps.each(function () {
    var currentStep = $(this), ansOpts = currentStep.children('.quiz-answer');
    ansOpts.each(function () {
        var eachOpt = $(this);
        eachOpt[0].addEventListener('click', check, false);
        function check() {

            var $this = $(this), value = $this.attr('data-quizIndex'), answerScore = parseInt(value);
            if (currentStep.children('.active').length > 0) {
                var wasActive = currentStep.children('.active'), oldScoreValue = wasActive.attr('data-quizIndex'), oldScore = parseInt(oldScoreValue);
                currentStep.children('.active').removeClass('active');
                $this.addClass('active');
                totalScore -= oldScoreValue;
                totalScore += answerScore;
                calcResults(totalScore);
            } else {
                $this.addClass('active');
                totalScore += answerScore;
                calcResults(totalScore);
                updateStep(currentStep);
            }
        }
    });
});
function updateStep(currentStep) {
    if (currentStep.hasClass('current')) {
        currentStep.removeClass('current');
        currentStep.next().addClass('current');
    }
}
function calcResults(totalScore) {
    if (quizSteps.find('.active').length == quizSteps.length) {
        var resultsTitle = $('#results h1'), resultsDesc = $('#results .desc');
        var lowestScoreArray = $('#quizzie .low-value').map(function () {
            return $(this).attr('data-quizIndex');
        });
        var minScore = 0;
        for (var i = 0; i < lowestScoreArray.length; i++) {
            minScore += parseInt(lowestScoreArray[i]);
        }
        var highestScoreArray = $('#quizzie .high-value').map(function () {
            return $(this).attr('data-quizIndex');
        });
        var maxScore = 0;
        for (var i = 0; i < highestScoreArray.length; i++) {
            maxScore= maxScore + parseInt(highestScoreArray[i]);
        }
        var range = maxScore - minScore;
        var numResults = resultOptions.length, interval = range / (numResults - 1), increment = '', n = 0;
        while (n < numResults) {
            increment = minScore + interval * n;
            if (totalScore <= increment) {
                resultsTitle.replaceWith('<h1>' + resultOptions[n].title + '</h1>');
                resultsDesc.replaceWith('<p class=\'desc\'>' + resultOptions[n].desc + '</p>');
                return;
            } else {
                n++;
            }
        }
    }
}