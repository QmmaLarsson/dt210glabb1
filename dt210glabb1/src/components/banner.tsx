import './Banner.css';

// Komponent som visar en banner (omslagsbild)
function Banner() {
    return <div>
        <picture>
            <source
                srcSet="/images/bilserie002.jpg"
                type="image/jpg"
            />
            <img src="/images/bilserie002.jpg" alt="Bergslandskap" />
        </picture>
    </div>
}

export default Banner;