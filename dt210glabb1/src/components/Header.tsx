import './Header.css';

//Typ för headerns prop
type TitleProp = {
    title: string;
};

//Komponent för header, visar en titel
function Header({ title }: TitleProp) {
    return <header>
        <h1> { title } </h1>
    </header>
}

export default Header;
