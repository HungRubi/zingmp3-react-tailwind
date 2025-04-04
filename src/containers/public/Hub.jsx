import { useSelector } from "react-redux"
import { ListHub, ListMusic } from "../../components"

const Hub = () => {
    const dataOutStanding = [
        {
            text: "BXH nhạc mới",
            src: "https://photo-zmp3.zmdcdn.me/cover/d/b/e/4/dbe426a555b7d680be25232007739019.jpg"
        },
        {
            text: "top 100",
            src: "https://photo-zmp3.zmdcdn.me/cover/2/d/2/d/2d2d88326a507319335ffc2e2887c0b7.jpg"
        },
        {
            text: "phụ nữ là để yêu",
            src: "https://photo-zmp3.zmdcdn.me/cover/0/3/9/7/0397b8b81a2d1e15f2bc27e650981c68.jpg"
        },
        {
            text: "nhạc trẻ",
            src: "https://photo-zmp3.zmdcdn.me/cover/6/6/3/5/6635bad85a570ca140e207910b5d44f1.jpg"
        },
        {
            text: "nhạc xuân",
            src: "https://photo-zmp3.zmdcdn.me/cover/5/a/9/7/5a979b0dcb6e16ee3a11538cb4b5a66b.jpg"
        },
        {
            text: "nhạc cover",
            src: "https://photo-zmp3.zmdcdn.me/cover/a/b/1/c/ab1c5fcc30db69252a3220d8d49daebc.jpg"
        },
        {
            text: "artist's story",
            src: "https://photo-zmp3.zmdcdn.me/cover/a/c/9/e/ac9e073bbfbaadea7b1cb50bd047ece0.jpg"
        },
        {
            text: "những chuyến đi",
            src: "https://photo-zmp3.zmdcdn.me/cover/8/e/4/a/8e4a3346be739dc204d16d1729e0c74e.jpg"
        }
    ]
    const dataNational = [
        {
            text: "nhạc việt",
            src: "https://photo-zmp3.zmdcdn.me/cover/9/5/8/e/958e9994c6720513cc84a7f7a478020b.jpg"
        },
        {
            text: "nhạc âu mỹ",
            src: "https://photo-zmp3.zmdcdn.me/cover/d/6/4/0/d640e486023bb0bc1bbe4d94209ff648.jpg"
        },
        {
            text: "nhạc hàn",
            src: "https://photo-zmp3.zmdcdn.me/cover/9/0/c/6/90c615657364a570232d7f6e86ffa6da.jpg"
        },
        {
            text: "nhạc hoa",
            src: "https://photo-zmp3.zmdcdn.me/cover/0/6/e/0/06e09e84d6c6ef29f588e0c6032d72bf.jpg"
        },
    ]
    const dataMood = [
        {
            text: "khúc nhạc vui    ",
            src: "https://photo-zmp3.zmdcdn.me/cover/5/4/5/4/5454a8586d26bd5e5bdb7682b84dce0f.jpg"
        },
        {
            text: "chill thư giãn",
            src: "https://photo-zmp3.zmdcdn.me/cover/5/d/9/b/5d9b3a5de0e11982a0207c92b7ac4c5a.jpg"
        },
        {
            text: "chơi game",
            src: "https://photo-zmp3.zmdcdn.me/cover/4/d/f/4/4df44f0a15edb254717c383cf256b193.jpg"
        },
        {
            text: "dinner",
            src: "https://photo-zmp3.zmdcdn.me/cover/0/8/e/1/08e1f820e5b2c16217c11a4f77f3680b.jpg"

        },
        {
            text: "tình yêu",
            src: "https://photo-zmp3.zmdcdn.me/cover/b/7/7/5/b775816ff23ba94ed879a6282162f011.jpg"
        },
        {
            text: "giai điệu buồn",
            src: "https://photo-zmp3.zmdcdn.me/cover/8/9/0/b/890bea85e09d0f17c414cce6ee9f9214.jpg"
        },
        {
            text: "góc chữa lành    ",
            src: "https://photo-zmp3.zmdcdn.me/cover/5/6/2/f/562fb982380b49103d885bd16286efe9.jpg"
        },
        {
            text: "tập trung",
            src: "https://photo-zmp3.zmdcdn.me/cover/3/b/c/0/3bc090f304669e0a01bc5cccdbc0715a.jpg"
        },
        {
            text: "tiệc tùng",
            src: "https://photo-zmp3.zmdcdn.me/cover/0/8/7/8/0878113f776f53892e91935f0913cc0b.jpg"
        },
        {
            text: "tiệc tùng",
            src: "https://photo-zmp3.zmdcdn.me/cover/7/a/0/0/7a00dbc39931345b369fdf61889302f6.jpg"
        },
    ]
    const {albumHot} = useSelector(state => state.app)
    return (
        <div className="w-full">
            <div className="px-[59px] mt-10">
                <img src="https://photo-zmp3.zmdcdn.me/cover/3/f/4/1/3f41f32d1ca9baeb2206137e5f2eab5c.jpg" 
                alt="hub" className="w-full rounded-md"/>
            </div>
            <ListHub data={dataOutStanding} nameList="nổi bật"/>
            <ListHub data={dataNational} nameList="quốc gia"/>
            <ListHub data={dataMood} nameList="tâm trạng và hoạt động"/>
            <div className="w-full px-[59px]">
                <ListMusic 
                    data={albumHot}
                    isFan={"hidden"}
                    classCard={"!w-1/5"}
                    nameList={"album hot"}
                    type={"album"}
                    isSinger={"hidden"}
                />
            </div>
        </div>
    )
}

export default Hub