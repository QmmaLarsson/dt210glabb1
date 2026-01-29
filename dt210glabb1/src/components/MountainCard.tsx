import './MountainCard.css';

// En mall för hur varje objekts (bergs) data ska se ut
interface Mountain {
    name: string,
    country: string,
    height: number,
    isClimbed: boolean
}

// En objektarray med berg
const MountainArr: Mountain[] = [
    {
        name: "Kebnekaise",
        country: "Sverige",
        height: 2096,
        isClimbed: true
    },
    {
        name: "Galdhöpiggen",
        country: "Norge",
        height: 2469,
        isClimbed: true
    },
    {
        name: "Mount Everest",
        country: "Nepal",
        height: 8808,
        isClimbed: false
    }
]

// En funktion som renderar berg utifrån objektarrayen
function MountainCard() {
    return (
        <section>
            {MountainArr.map((mountain, index) =>
                <article key={index}>
                    <h3>{mountain.name}</h3>
                    <p>Land: {mountain.country}</p>
                    <p>Höjd: {mountain.height} m</p>
                    <p>
                        Bestigen: {mountain.isClimbed ? "Ja" : "Nej"}
                    </p>
                </article>
            )}
        </section>
    )
}

export default MountainCard
