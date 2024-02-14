onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function() {
        var audioPlayer = document.getElementById('audioPlayer');
        
        // Fungsi untuk menambahkan lagu baru
        function tambahLagu(namaFile) {
          var source = document.createElement('source');
          source.src = namaFile;
          source.type = 'audio/mpeg';
          audioPlayer.appendChild(source);
        }
        
        // Panggil fungsi tambahLagu dengan nama file lagu yang ingin ditambahkan
        tambahLagu('lagu-baru.mp3');
      });
      