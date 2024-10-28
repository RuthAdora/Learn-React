import { useState } from 'react';

export default function Picture() {
    const [isActive, setIsActive] = useState(false);

    let backgroundClassName = 'background';
    let pictureClassName = 'picture';
    if (isActive) {
        pictureClassName += ' picture--active';
    } else {
        backgroundClassName += ' background--active';
    }

    return (
        <div
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
