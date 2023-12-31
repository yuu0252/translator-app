import { HiSpeakerWave } from 'react-icons/hi2';
import { textToSpeech } from '../functions/audio/textToSpeech';
import { languageCodeList } from '../constants';

type Props = {
  text: string;
  language: {
    language: string;
    isJapanese: boolean;
  };
};

export const PlayAudio = ({ text, language }: Props) => {
  console.log(language);
  const speak = languageCodeList.find(
    (e) => e.code === language.language
  )?.speak;
  const languageCode = language.isJapanese ? speak?.code : 'ja-JP';
  const speaker = language.isJapanese ? speak?.speaker : 'ja-JP-Neural2-C';
  const onClickPlay = () => {
    console.log(languageCode + ':' + speaker);
    if (!languageCode || !speaker) return;
    textToSpeech(text, languageCode, speaker);
  };

  return (
    <button onClick={onClickPlay} className="speaker-btn">
      <HiSpeakerWave />
    </button>
  );
};
