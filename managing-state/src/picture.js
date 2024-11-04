import { useState } from 'react';

export default function Picture() {
    const [isActive, setIsActive] = useState(false);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    let backgroundClassName = 'background';
    let pictureClassName = 'picture';
    if (isActive) {
        pictureClassName += ' picture--active';
    } else {
        backgroundClassName += ' background--active';
    }

    return (
        <div onPointerMove={e => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        }}
             style={{
                 position: 'absolute',
                 backgroundColor: 'red',
                 borderRadius: '50%',
                 transform: `translate(${position.x}px, ${position.y}px)`,
                 left: -10,
                 top: -10,
                 width: 20,
                 height: 20,
             }}
             className={backgroundClassName}
            onClick={() => setIsActive(false)}
        >
            <img
                onClick={e => {
                    e.stopPropagation();
                    setIsActive(true);
                }}
                className={pictureClassName}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://scx1.b-cdn.net/csz/news/800a/2013/limabillboar.jpg"
            />
       
        </div>
                
    );
}
