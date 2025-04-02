import {KhamPha, ThuVien, ZingChart, Radio, BangXepHang, ChuDe, Top100, History, Favorite, Playlist, Album} from '../util/iconSgv/index';

export const menuSide = [
    {
        path: '/mymusic',
        text: 'Thư viện',
        icons: ThuVien
    },
    {
        path: '/',
        text: 'Khám phá',
        icons: KhamPha,
    },
    {
        path: '/zing-chart',
        text: '#zingchart',
        icons: ZingChart
    },
    {
        path: '/radio',
        text: 'Radio',
        icons: Radio
    }
];

export const menuSide2 = [
    {
        path: '/bang-xep-hang',
        text: 'BXH Nhạc Mới',
        icons: BangXepHang
    },
    {
        path: '/hub',
        text: 'Chủ Đề & Thể Loại',
        icons: ChuDe
    },
    {
        path: '/top100',
        text: 'Top 100',
        icons: Top100
    },
]

export const menuSide3 = [
    {
        path: '/mymusic/history',
        text: 'Nghe gần đây',
        icons: History
    },
    {
        path: '/mymusic/song',
        text: 'Bài hát yêu thích',
        icons: Favorite,
    },
    {
        path: '/mymusic/playlist',
        text: 'Playlist',
        icons: Playlist
    },
    {
        path: '/mymusic/album',
        text: 'Album',
        icons: Album
    }
];
