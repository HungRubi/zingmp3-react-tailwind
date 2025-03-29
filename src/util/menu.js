import {KhamPha, ThuVien, ZingChart, Radio, BangXepHang, ChuDe, Top100} from '../util/iconSgv/index';

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
