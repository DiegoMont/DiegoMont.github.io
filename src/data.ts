import type Song from "./models/Song";

const sugarPlumFairy: Song = {
    title: "Dance of the Sugar Plum Fairy",
    urlPath: "the-nutcracker",
    cloudDir: "/dance_sugar_plum_fairy",
    recordings: [{
        name: "Ensamble",
        score: "/scoresheets/dance_sugar_plum_fairy_four_hands.pdf",
        speeds: [
            {name: "60ppm", audio: "/four_hand_audio/dance_sugar_plum_fairy_60bpm.mp3"},
            {name: "84ppm", audio: "/four_hand_audio/dance_sugar_plum_fairy_84bpm.mp3"},
            {name: "96ppm", audio: "/four_hand_audio/dance_sugar_plum_fairy_96bpm.mp3"},
            {name: "108ppm", audio: "/four_hand_audio/dance_sugar_plum_fairy_108bpm.mp3"},
            {name: "120ppm", audio: "/four_hand_audio/dance_sugar_plum_fairy_120bpm.mp3"},
        ]
    }, {
        name: "Piano 1",
        score: "/scoresheets/dance_sugar_plum_fairy_piano1.pdf",
        speeds: [
            {name: "60ppm", audio: "/piano_2_audio/dance_sugar_plum_fairy_60bpm.mp3"},
            {name: "84ppm", audio: "/piano_2_audio/dance_sugar_plum_fairy_84bpm.mp3"},
            {name: "96ppm", audio: "/piano_2_audio/dance_sugar_plum_fairy_96bpm.mp3"},
            {name: "108ppm", audio: "/piano_2_audio/dance_sugar_plum_fairy_108bpm.mp3"},
            {name: "120ppm", audio: "/piano_2_audio/dance_sugar_plum_fairy_120bpm.mp3"},
        ]
    }, {
        name: "Piano 2",
        score: "/scoresheets/dance_sugar_plum_fairy_piano2.pdf",
        speeds: [
            {name: "60ppm", audio: "/piano_1_audio/dance_sugar_plum_fairy_84bpm.mp3"},
            {name: "84ppm", audio: "/piano_1_audio/dance_sugar_plum_fairy_60bpm.mp3"},
            {name: "96ppm", audio: "/piano_1_audio/dance_sugar_plum_fairy_96bpm.mp3"},
            {name: "108ppm", audio: "/piano_1_audio/dance_sugar_plum_fairy_108bpm.mp3"},
            {name: "120ppm", audio: "/piano_1_audio/dance_sugar_plum_fairy_120bpm.mp3"},
        ]
    }]
}

const bella_ciao: Song = {
    title: "Bella Ciao",
    urlPath: "bella-ciao",
    cloudDir: "/bella_ciao",
    recordings: [{
        name: "Ensamble",
        score: "/scoresheets/bella_ciao_four_hands.pdf",
        speeds: [
            {name: "50%", audio: "/four_hand_audio/bella_ciao_50.mp3"},
            {name: "70%", audio: "/four_hand_audio/bella_ciao_70.mp3"},
            {name: "80%", audio: "/four_hand_audio/bella_ciao_80.mp3"},
            {name: "90%", audio: "/four_hand_audio/bella_ciao_90.mp3"},
            {name: "100%", audio: "/four_hand_audio/bella_ciao_100.mp3"},
        ]
    }, {
        name: "Piano 1",
        score: "/scoresheets/bella_ciao_piano1.pdf",
        speeds: [
            {name: "50%", audio: "/piano_1_audio/bella_ciao_50.mp3"},
            {name: "70%", audio: "/piano_1_audio/bella_ciao_70.mp3"},
            {name: "80%", audio: "/piano_1_audio/bella_ciao_80.mp3"},
            {name: "90%", audio: "/piano_1_audio/bella_ciao_90.mp3"},
            {name: "100%", audio: "/piano_1_audio/bella_ciao_100.mp3"},
        ]
    }, {
        name: "Piano 2",
        score: "/scoresheets/bella_ciao_piano2.pdf",
        speeds: [
            {name: "50%", audio: "/piano_2_audio/bella_ciao_50.mp3"},
            {name: "70%", audio: "/piano_2_audio/bella_ciao_70.mp3"},
            {name: "80%", audio: "/piano_2_audio/bella_ciao_80.mp3"},
            {name: "90%", audio: "/piano_2_audio/bella_ciao_90.mp3"},
            {name: "100%", audio: "/piano_2_audio/bella_ciao_100.mp3"},
        ]
    }]
}

const songs: Song[] = [bella_ciao, sugarPlumFairy]

export default songs;
