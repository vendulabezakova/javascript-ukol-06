const inputStr = prompt("Zadej své jméno:");
const inputLen = prompt("Zadej libovolný počet znaků: ")

const fillcut = (str, len) => {
    if (str.length > len) {
        return str.slice(0, len);
    } else if (str.length < len) {
        return str.padStart(len, "."); //metoda padStart/padEnd (přidávání znaků)
    } else (str.length === len); {
        return str
    }
}

document.body.innerHTML = `
<p> Zadané jméno <b>${inputStr}</b> jsme upravili tak, aby mělo <b>${inputLen}</b> znaků. Pokud je vámi zadané jméno kratší než počet znaků, doplnili jsme je o tečky. Je-li delší, zkrátili jsme ho.</p>
<p style="font-size:20px">Zde je výsledek: <b>${fillcut(inputStr, inputLen)}</b>
</p>
`

