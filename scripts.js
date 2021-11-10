function getTextAreaContent() {
    return document.querySelector('textarea').value;
}

function setTextAreaContent(text) {
    return document.querySelector('textarea').value = text.trimEnd();
}

let upperCaseBtn = document.getElementById('upper-case');
upperCaseBtn.addEventListener('click', function (){
    const textAreaContent = getTextAreaContent();
    const textToUpper = textAreaContent.toUpperCase();
    setTextAreaContent(textToUpper);
});

let lowerCaseBtn = document.getElementById('lower-case');
lowerCaseBtn.addEventListener('click', function (){
    const textAreaContent = getTextAreaContent();
    const textToLower = textAreaContent.toLowerCase();
    setTextAreaContent(textToLower);
});

let properCaseBtn = document.getElementById('proper-case');
properCaseBtn.addEventListener('click', function (){
    const textAreaContent = getTextAreaContent();
    const words = textAreaContent.toLowerCase().split(" ");
    let textToProper = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    setTextAreaContent(textToProper);
});

let sentenceCaseBtn = document.getElementById('sentence-case');
sentenceCaseBtn.addEventListener('click', function (){
    const textAreaContent = getTextAreaContent();
    const sentences = textAreaContent.toLowerCase().split('.');
    let txtToSentence = sentences.map((sentence) => {
        sentence = sentence.trim();
        if(sentence !== ''){
            return sentence[0].toUpperCase() + sentence.substring(1);
        }
    }).join(". ");
    setTextAreaContent(txtToSentence);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

let saveTextFileBtn = document.getElementById('save-text-file');
saveTextFileBtn.addEventListener('click', function (){
    const textAreaContent = getTextAreaContent();
    download("Case_converter.txt", textAreaContent);
});

