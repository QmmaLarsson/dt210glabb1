import './Banner.css';

//Komponent som visar en banner (omslagsbild)
function Banner() {
    return <div>
        <picture>
            <source
                srcSet="/images/banner-phone.jpg"
                media="(max-width: 600px)"
                type="image/jpeg"
            />

            <source
                srcSet="/images/banner-tablet.jpg"
                media="(max-width: 1024px)"
                type="image/jpeg"
            />

            <img
                src="/images/banner-desktop.jpg"
                alt="Bergslandskap"
            />
        </picture>
    </div>
}

export default Banner;
