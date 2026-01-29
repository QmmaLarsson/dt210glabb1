import './MountainCard.css';

//En mall för hur varje objekts (bergs) data ska se ut
interface Mountain {
    name: string,
    country: string,
    height: number,
    isClimbed: boolean
}

//En objektarray med berg
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
    },
    {
        name: "Kilimanjaro",
        country: "Tanzania",
        height: 5895,
        isClimbed: false
    },
    {
        name: "Ben Nevis",
        country: "Storbritannien",
        height: 1344,
        isClimbed: true
    }
]

//En funktion som renderar berg utifrån objektarrayen
function MountainCard() {
    return (
        <section>
            {MountainArr.map((mountain, index) =>
                <article key={index}>
                    <h3>{mountain.name}</h3>
                    <p><strong>Land:</strong> {mountain.country}</p>
                    <p><strong>Höjd:</strong> {mountain.height} m</p>
                    <p><strong>Bestigen:</strong> {mountain.isClimbed ? "Ja" : "Nej"}</p>
                </article>
            )}
        </section>
    )
}

export default MountainCard
