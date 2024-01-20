const arr = [11, 2, 3, 4, 5, 6, 7, 8, 9, 100];
let max = 0;
let mini = 1;

function sonlar(royhatlar) {
    for (let i = 0; i < royhatlar.length; i++) {
        if (royhatlar[i] > max) {
            max = royhatlar[i]
        }
    }
    console.log('eng katta son', max);
}

function minisonlar(sonlar) {
    for (let i = 0; i < sonlar.length; i++) {
        if (sonlar[i] < mini) {
            mini = sonlar[i]
        }
    }
}

sonlar(arr);
minisonlar(arr);
console.log(max + mini);