const containerSkills = document.querySelector(".container-skills")
const containerCardSkills = document.querySelector(".container-card-skills")
const cardSkills = document.querySelectorAll(".card-skills")
const informacoesSkills = document.querySelector(".informacoes-skills")
textos = ['HTML' , 'CSS', 'JavaScript', 'Python', 'C++']
console.log(cardSkills);

containerCardSkills.addEventListener("mousemove", (e) => {
    const targetEl = e.target
    
    if (targetEl == cardSkills[0] || targetEl == cardSkills[0].child) informacoesSkills.innerHTML = `<p> ${textos[0]} </p>`
    if (targetEl == cardSkills[1]) informacoesSkills.innerHTML = `<p> ${textos[1]} </p>`
    if (targetEl == cardSkills[2]) informacoesSkills.innerHTML = `<p> ${textos[2]} </p>`
    if (targetEl == cardSkills[3]) informacoesSkills.innerHTML = `<p> ${textos[3]} </p>`
    if (targetEl == cardSkills[4]) informacoesSkills.innerHTML = `<p> ${textos[4]} </p>`

    containerCardSkills.addEventListener("mouseout", () => informacoesSkills.innerHTML = "")
})
