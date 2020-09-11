const d = document;

export default function countdown(form, id_cd, cd) {

    const $form = d.getElementById(form); // formulario
    const $id_cd = d.querySelector(id_cd); // caja de cuenta regresiva
    const $cd = d.querySelector(cd); // caja donde se muestra el tiempo

    d.addEventListener("submit", (e) => {

        if (e.target === $form) {
            e.preventDefault();

            const fechaUser = new Date($form.fecha.value).getTime(); // obtenemos la fecha que el usuario ingreso

            let cd_time = setInterval(() => {
                
                /* calculamos los dias, horas, minutos, segundos */

                let nowDate = new Date().getTime();

                let limitTime = fechaUser - nowDate;

                let days = Math.floor(limitTime / (1000 * 60 * 60 * 24)); // ms, sg, mnt, hrs

                let hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2);

                let minut = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2);

                let second = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);
                
                /* ------------------------------------------------------------------------------------------------------------------ */

                // agregamos la cuenta regresiva 
                $cd.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas, ${minut} minutos, ${second} segundos</h3>`;
                
                // agregamos la fecha limite coen el header
                d.querySelector(".header-box").innerHTML = `<p><b>Fecha Limite: ${$form.fecha.value}</b></p>`;
                
                // deshabilitamos los input y el boton
                d.getElementById("fecha").disabled = true;
                d.getElementById("mensaje").disabled = true;
                d.getElementById("iniciar").disabled = true;

                // mostramos la card al apretar el submit
                $id_cd.classList.add("is-active");


                // cuando el tiempo llegue a su limite
                if (limitTime < 0) {

                    clearInterval(cd_time);
                    $cd.innerHTML = `<h3>${$form.mensaje.value}</h3>`;


                }

            }, 1000);


            d.addEventListener("click", (e) => {
                if (e.target.matches("#cancel")) {
                    clearInterval(cd_time);
                    $cd.innerHTML = null;
                    $id_cd.classList.remove("is-active");
                    
                    d.getElementById("fecha").disabled = false;
                    d.getElementById("mensaje").disabled = false;
                    d.getElementById("iniciar").disabled = false;
                    
                    $form.reset();

                }
            })


        }

    })

}
