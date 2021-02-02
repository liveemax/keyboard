import React from "react";
const SELECT_LANGUAGE="SELECT_LANGUAGE";
const SELECT_KEYBOARD="SELECT_KEYBOARD";
const SET_SLIDER_VALUE="SET_SLIDER_VALUE";
const SET_VALUE_DISABLE="SET_VALUE_DISABLE"
const initialState={
 allLang:{
  /*   'ALBANIAN': 'sq',
     'ARABIC': 'ar',
     'ARMENIAN_EASTERN': 'hy_east',
     'ARMENIAN_WESTERN': 'hy_west',
     'BASQUE': 'eu',
     'BELARUSIAN': 'be',
     'BENGALI_PHONETIC': 'bn_phone',
     'BOSNIAN': 'bs',
     'BRAZILIAN_PORTUGUESE': 'pt_br',
     'BULGARIAN': 'bg',
     'CATALAN': 'ca',
     'CHEROKEE': 'chr',
     'CROATIAN': 'hr',
     'CZECH': 'cs',
     'CZECH_QWERTZ': 'cs_qwertz',
     'DANISH': 'da',
     'DARI': 'prs',
     'DUTCH': 'nl',
     'DEVANAGARI_PHONETIC': 'deva_phone',*/
     'ENGLISH': {alphabet: {
         0:{letter:"Q",disable:false},
         1:{letter:"W",disable:false},
         2:{letter:"E",disable:false},
         3:{letter:"R",disable:false},
         4:{letter:"T",disable:false},
         5:{letter:"Y",disable:false},
         6:{letter:"U",disable:false},
         7:{letter:"I",disable:false},
         8:{letter:"O",disable:false},
         9:{letter:"P",disable:false},
         20:{letter:"A",disable:false},
         21:{letter:"S",disable:false},
         22:{letter:"D",disable:false},
         23:{letter:"F",disable:false},
         24:{letter:"G",disable:false},
         25:{letter:"H",disable:false},
         26:{letter:"J",disable:false},
         27:{letter:"K",disable:false},
         28:{letter:"L",disable:false},
         40:{letter:"Z",disable:false},
         41:{letter:"X",disable:false},
         42:{letter:"C",disable:false},
         43:{letter:"V",disable:false},
         44:{letter:"B",disable:false},
         45:{letter:"N",disable:false},
         46:{letter:"M",disable:false},
         }}
     /*'ESTONIAN': 'et',
     'ETHIOPIC': 'ethi',
     'FINNISH': 'fi',
     'FRENCH': 'fr',
     'GALICIAN': 'gl',
     'GEORGIAN_QWERTY': 'ka_qwerty',
     'GEORGIAN_TYPEWRITER': 'ka_typewriter',
     'GERMAN': 'de',
     'GREEK': 'el',
     'GUJARATI_PHONETIC': 'gu_phone',
     'GURMUKHI_PHONETIC': 'guru_phone',
     'HEBREW': 'he',
     'HINDI': 'hi',
     'HUNGARIAN_101': 'hu_101',
     'ICELANDIC': 'is',
     'ITALIAN': 'it',
     'KANNADA_PHONETIC': 'kn_phone',
     'KAZAKH': 'kk',
     'KHMER': 'km',
     'KOREAN': 'ko',
     'KYRGYZ': 'ky_cyrl',
     'LAO': 'lo',
     'LATVIAN': 'lv',
     'LITHUANIAN': 'lt',
     'MACEDONIAN': 'mk',
     'MALAYALAM_PHONETIC': 'ml_phone',
     'MALTESE': 'mt',
     'MONGOLIAN_CYRILLIC': 'mn_cyrl',
     'MONTENEGRIN': 'srp',
     'NORWEGIAN': 'no',
     'ORIYA_PHONETIC': 'or_phone',
     'PAN_AFRICA_LATIN': 'latn_002',
     'PASHTO': 'ps',
     'PERSIAN': 'fa',
     'POLISH': 'pl',
     'PORTUGUESE': 'pt_pt',
     'ROMANI': 'rom',
     'ROMANIAN': 'ro',
     'RUSSIAN': 'ru',
     'SANSKRIT_PHONETIC': 'sa_phone',
     'SERBIAN_CYRILLIC': 'sr_cyrl',
     'SERBIAN_LATIN': 'sr_latn',
     'SINHALA': 'si',
     'SLOVAK': 'sk',
     'SLOVAK_QWERTY': 'sk_qwerty',
     'SLOVENIAN': 'sl',
     'SOUTHERN_UZBEK': 'uzs',
     'SPANISH': 'es_es',
     'SWEDISH': 'sv',
     'TAMIL_PHONETIC': 'ta_phone',
     'TATAR': 'tt',
     'TELUGU_PHONETIC': 'te_phone',
     'THAI': 'th',
     'TURKISH_F': 'tr_f',
     'TURKISH_Q': 'tr_q',
     'UIGHUR': 'ug',
     'UKRAINIAN_101': 'uk_101',
     'URDU': 'ur',
     'UZBEK_LATIN': 'uz_latn',
     'UZBEK_CYRILLIC_PHONETIC': 'uz_cyrl_phone',
     'UZBEK_CYRILLIC_TYPEWRITTER': 'uz_cyrl_type',
     'VIETNAMESE_TCVN': 'vi_tcvn',
     'VIETNAMESE_TELEX': 'vi_telex',
     'VIETNAMESE_VIQR': 'vi_viqr'*/},
    currentLang:["ENGLISH"],
    isKeyboardHidden:false,
    sliderValue:[0,100],
}
const headerReducer = (state=initialState,action) => {
    switch (action.type){
    case SELECT_LANGUAGE:
        debugger
        return{
    ...state,
            currentLang:action.newLanguage
        }
    case SELECT_KEYBOARD:
            return{
                ...state,
                isKeyboardHidden:!(state.isKeyboardHidden),
            }
        case SET_SLIDER_VALUE:

            return {
                ...state,
                sliderValue:action.valueSlider
            }

        case SET_VALUE_DISABLE:
            debugger
            let a=JSON.parse(JSON.stringify(state));
            let buttonDisable=a.allLang[state.currentLang].alphabet[action.valueDisable].disable;
            a.allLang[state.currentLang].alphabet[action.valueDisable].disable=!buttonDisable;
            return {
                ...a
            }

    default:
        return {...state};
}
}


export const selectLanguage = (newLanguage) => ({type: SELECT_LANGUAGE, newLanguage})
export const selectKeyboard = (isKeyboardHidden) => ({type: SELECT_KEYBOARD,isKeyboardHidden })
export const setSliderValue=(valueSlider)=>({type:SET_SLIDER_VALUE,valueSlider})
export const setValueDisable=(valueDisable)=>({type:SET_VALUE_DISABLE,valueDisable})


export default headerReducer;
