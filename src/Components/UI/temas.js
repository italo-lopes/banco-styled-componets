import { 
    fundoClaro,
    conteudoClaro,
    textoFundoClaro,
    fundoEscuro,
    conteudoEscuro,
    textoFundoEscuro,
    //corIncone
} from "./variaveis";

export const temaClaro ={
    body:fundoClaro,
    inside:conteudoClaro,
    text: textoFundoClaro,
    filter:'',
};

export const temaEscuro ={
    body: fundoEscuro,
    inside:conteudoEscuro,
    text: textoFundoEscuro,
   // filter: corIncone,
   filter : "invert(100%)",
}