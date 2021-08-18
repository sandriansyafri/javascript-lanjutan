/**
 *TODO
* 1.ambil semua element yang diperlukan
* 2.filter
* 3.ambil attribute yang diperlukan ( time )
* 4.pisahkan menit & detik
* 5.ubah ke detik
* 6.bikin format jam
* 7.bikin format menit
* 8.bikin format detik
* 9.hitung berapa jumlah video yang difilter
* 10.gitung berapa total duration video yang difilter
*
*/

const videos = Array.from(document.querySelectorAll("ul li[data-duration]"));
let jsLanjutan = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
    .map(video => video.dataset.duration)
    .map(item => {
        const parts = item.split(':');
        const minutes = Number(parts[0]) * 60;
        const seconds = Number(parts[1])
        const result = minutes + seconds;

        return result;
    }).reduce((first, second) => first + second, 0);

function secondsToHms(d) {
    d = Number(d)
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    return { h, m, s }
}

const { h, m, s } = secondsToHms(jsLanjutan);

const totalVideos = document.querySelector('.total-videos');
const totalDurations = document.querySelector('.total-durations');
totalVideos.textContent = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
totalDurations.textContent = `${h} Hours ${m} minutes ${s} seconds`;
