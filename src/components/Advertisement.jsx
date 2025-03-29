import { useState, useEffect } from "react";

const Advertisement = () => {
    const images = [
        "https://photo-resize-zmp3.zmdcdn.me/w2160_r10x1_jpeg/banner/d/8/7/9/d87960fa2b5371a228105d2de2be684a.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w2160_r10x1_jpeg/banner/9/3/e/a/93ea056d29620becd8b51974f5b2f8d0.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w2160_r10x1_jpeg/banner/c/1/4/f/c14fa1c7e072c5383b87ec7035ab88ce.jpg"
    ];
    
    const [currentImages, setCurrentImages] = useState(images);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => {
                setCurrentImages((prevImages) => {
                    const newImages = [...prevImages];
                    newImages.push(newImages.shift()); // Chuyển ảnh đầu tiên xuống cuối
                    return newImages;
                });
                setAnimate(false);
            }, 1000); // Đợi hiệu ứng chạy xong rồi đổi ảnh
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden mt-8">
            <div className={`flex transition-transform duration-1000 ease-in-out ${animate ? 'slider-2' : ''}`}>
                {currentImages.map((src, index) => (
                    <img key={index} src={src} alt="Slider" className="w-full flex-shrink-0 rounded-sm" />
                ))}
            </div>
        </div>
    );
};

export default Advertisement;
