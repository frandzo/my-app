require('bootstrap');

export function Header(){
    return (
    <div>
        <h1>MI TIENDA ONLINE</h1>
        <select name="cars" id="cars">
        <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </optgroup>
        </select>
    </div>
    )
}