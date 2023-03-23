const TemplateExpressions = () => {
const name = "Henrique";
const data = {
    age: 31,
    job: 'Programmer',
}

return (
    <div>
        <h1>Olá {name}, Tudo bem? </h1>
        <p>Voce atua como {data.job} </p>
    </div>
)

};

export default TemplateExpressions;