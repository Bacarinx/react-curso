const FirstComponent = () => {
    //essa função faz isso: 
    return (
        
        <div>
            {/* Algum comentário*/}
            <h1>Meu primeiro componente</h1>
            <p className= "teste"></p>
        </div>
    );
};

export default FirstComponent;

//Resumo aula 1 - EXPORTAÇÃO

// 1 - Criamos uma pasta components dentro do src para colocar todos os documentos nela

// 2 - criamos uma função que será exportada para outro arquivo, iniciado por uma arrow function

//----------------------------------------------------------//

//Resumo aula 2 - IMPORTAÇÂO

// 1 - Para importar um arquivo utilizamos a sintaxe: import [nome Arquivo] from [lugar de exportação]

// 2 - para usar o arquivo importado utilizamos asintaxe: <NomeCOmponente />

//----------------------------------------------------------//

//Resumo aula 3 - JSX

// 1 - Algumas tags vão ser alteradas de nome para não interferir no proprio html ou javascript, logo a tag "Name" ira ser chamada de "className"

// 2 - O JSX pode ter apenas UM ELEMENTO PAI, logo todo a função será envelopada por apenas uma div

//----------------------------------------------------------//

//resumo aula 4 - COMENTÁRIOS NO JSX

// 1 - Para realizar um comentário dentro da função no JSX, utilizamos a seguinte sintaxe: { /* texto */ }