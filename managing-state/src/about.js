import { useState } from 'react';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Lima, Peru</h2>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                Once known as the City of Kings, Lima is now a sprawling metropolis that is flanked by picturesque hills and valleys, as well as pristine beaches that outline the Pacific Ocean.
            </Panel>
            <Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                Lima was named by natives in the agricultural region known by native Peruvians as <span lang="kk-KZ">Limaq</span>. It became the capital and most important city in the Viceroyalty of Peru. Following the Peruvian War of Independence, it became the capital of the Republic of Peru (República del Perú).
            </Panel>
            <hr/>
        </>
    );
}

function Panel({
                   title,
                   children,
                   isActive,
                   onShow
               }) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Show
                </button>
            )}
        </section>
    );
}
