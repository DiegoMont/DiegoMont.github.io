const AUDIO_FILES_BASE_URL = 'https://objectstorage.mx-queretaro-1.oraclecloud.com/p/GW-e4mhCtfDIEa3tUbAsZqkp6-O1hM12n662wElSNEQ4a1PXT-W-uQ1w56R-_67S/n/axwp3hbp4bpp/b/diegomont-assets/o/music/dance_sugar_plum_fairy/'

const audioElement = document.querySelector('audio')

const audioFiles = [
    'four_hand_audio/dance_sugar_plum_fairy_60bpm.mp3',
    'four_hand_audio/dance_sugar_plum_fairy_84bpm.mp3',
    'four_hand_audio/dance_sugar_plum_fairy_96bpm.mp3',
    'four_hand_audio/dance_sugar_plum_fairy_108bpm.mp3',
    'four_hand_audio/dance_sugar_plum_fairy_120bpm.mp3',

    'piano_2_audio/dance_sugar_plum_fairy_60bpm.mp3',
    'piano_2_audio/dance_sugar_plum_fairy_84bpm.mp3',
    'piano_2_audio/dance_sugar_plum_fairy_96bpm.mp3',
    'piano_2_audio/dance_sugar_plum_fairy_108bpm.mp3',
    'piano_2_audio/dance_sugar_plum_fairy_120bpm.mp3',

    'piano_1_audio/dance_sugar_plum_fairy_84bpm.mp3',
    'piano_1_audio/dance_sugar_plum_fairy_60bpm.mp3',
    'piano_1_audio/dance_sugar_plum_fairy_96bpm.mp3',
    'piano_1_audio/dance_sugar_plum_fairy_108bpm.mp3',
    'piano_1_audio/dance_sugar_plum_fairy_120bpm.mp3',
]

audioElement.src = AUDIO_FILES_BASE_URL + audioFiles[4]
let i = 0
for (const element of document.getElementsByClassName('speed_btn')) {
    const j = i
    element.addEventListener('click', () => {
        const audio_url = AUDIO_FILES_BASE_URL + audioFiles[j]
        audioElement.src = audio_url
    })
    i++
}
