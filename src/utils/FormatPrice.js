export default function FormatPrice(decimal){
    var price = decimal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return price;
}