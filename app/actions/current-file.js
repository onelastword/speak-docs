import Speech from 'electron-speech';

export const SELECT_FILE = 'SELECT_FILE';
export const SET_FILE_SAVED_CONTENTS = 'SET_FILE_SAVED_CONTENTS';
export const SET_FILE_EDITED_CONTENTS = 'SET_FILE_EDITED_CONTENTS';
export const CLEAR_FILE = 'CLEAR_FILE';
export const SET_SPEECH_INSTANCE = 'SET_SPEECH_INSTANCE';


const firstChar = /\S/;
function capitalize(s) {
  return s.replace(firstChar, (m) => m.toUpperCase());
}

function setSpeech(speech) {
  return {
    type: SET_SPEECH_INSTANCE,
    speech
  };
}

export function toggleSpeech() {
  return (dispatch, getState) => {
    const { speech, editedFile } = getState();

    if (speech) {
      return;
    }

    // const newSpeech = new webkitSpeechRecognition();
    // dispatch(setSpeech(newSpeech));
    // newSpeech.onresult = (event) => {
    //   let editedResult = editedFile;
    //   let interimTranscript = '';
    //   for (let i = event.resultIndex; i < event.results.length; ++i) {
    //     if (event.results[i].isFinal) {
    //       editedResult += capitalize(event.results[i][0].transcript);
    //     } else {
    //       interimTranscript += event.results[i][0].transcript;
    //     }
    //   }
    //   editedResult = capitalize(editedFile);
    //   console.log(editedResult);
    //   dispatch(setFileEditedContents(editedResult));
    //   // interim_span.innerHTML = linebreak(interimTranscript);
    // };

    const recog = Speech({
      lang: 'en-US',
      continuous: true
    });

    recog.on('text', function (text) {
      console.log(text);
    });
    recog.on('error', function (e) {
      console.log(e);
    });

    recog.listen();
  };
}

export function selectFile(file) {
  return {
    type: SELECT_FILE,
    file
  };
}

export function clearFile() {
  return {
    type: CLEAR_FILE,
  };
}

export function setFileSavedContents(data) {
  return {
    type: SET_FILE_SAVED_CONTENTS,
    data
  };
}

export function setFileEditedContents(data) {
  return {
    type: SET_FILE_EDITED_CONTENTS,
    data
  };
}
