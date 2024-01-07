/* FUNÇÕES 

SUMARIO:

    - As funcoes podem ou nao ter parametros
    - Os parametros passados para uma funcao sao copiados para uma variavel local
    - As funcoes podem ter acesso a variaveis externas
    - Codigo fora das funcoes, nao ver as variaveis locais da funcao.
    - As funcoes podem retornar um valor. Se nao o fizerem, o seu retorno é undefined.

    Para tornar o codigo mais limpo, nao é aconselhavel usar variaveis externasdentro da funcao.
    Devemos passar os valores atravez de parametros.
    O uso de variaveis externas dentro das funcoes cria imensos problemas no uso de funcoes.

    Para dar nomes a funcoes, ter em atenção:
    - Os nomes devem descrever a funcao.

        function am() -- forma nao adequada
        function adicao_matematica() -- forma adequada
    
    - As funções são açoes. Os nomes devem salientar bem isso.

        function mensagem(texto)
        function apresentar_mensagem(texto)
*/
