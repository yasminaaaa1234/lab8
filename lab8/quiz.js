$(document).ready(function() {
     const correct = ["Aristotle", "Julius Caesar", "1914", "Vasco da Gama", "Russia (Soviet Union)"];
     const questions = ["Who taught Alexander the Great?", "Who owns the famous quote VENI, VIDI, VICI?", "In what year did World War I begin?", "Who was the first European explorer to reach India by sea?", "Which country was the first to send a human being into space?"];
     const choice_options = [ ["Aristotle", "Socrates", "Plato", "Pythagoras"], ["Julius Caesar", "Attila", "Genghis Khan", "Napoleon Bonaparte"],["1914", "1918", "1922", "1939"],["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"], ["United States", "China", "Russia (Soviet Union)", "France"] ];
   
     
     for (let i = 0; i < questions.length; i++) {
       const q = questions[i];
       const options = choice_options[i];
       const $question = $("<div class='question'>");
       $question.append($(`<p class='d'>Q${i+1}. ${q}</p>`));
       for (let j = 0; j < options.length; j++) {
         const $option = $(`<label><input type='radio' name='q${i+1}' value='${options[j]}'>${options[j]}</label>`);
         $question.append($option);
       }
       $('#quiz-box').append($question);
     }
     let countCorrect = 0;
     const reset = false;
     
     $("button").click(function(event) {
       countCorrect = 0;
       $('input[type=radio]:checked').each(function() {
         const val = $(this).val();
         if (correct.includes(val)) {
           countCorrect++;
         }
       });
       $("#quiz-box").append(`<h2>Result of the quiz is: ${countCorrect}</h2>`);
     });
     
   });
   
  
   