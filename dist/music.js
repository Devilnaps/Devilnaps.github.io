const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '不配怀念',
            artist: '小倩',
            url: '/music/不配怀念.mp3',
            cover: 'cover1.jpg',
        },
        {
            name: '处处吻',
            artist: '封茗囧菌',
            url: '/music/封茗囧菌 - 处处吻（翻自 杨千嬅）.mp3',
            cover: 'cover2.jpg',
        }
    ]
});