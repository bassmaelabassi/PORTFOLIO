$(document).ready(function () {
    // Ajouter des projets supplémentaires lorsque le bouton "Voir plus" est cliqué
    $("#loadMore").on("click", function () {
        const newProjects = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="images/calculatrice.jpg" class="card-img-top" alt="Calculatrice">
                    <div class="card-body">
                        <h5 class="card-title">Calculatrice</h5>
                        <p class="card-text">Une simple calculatrice développée en JavaScript.</p>
                        <a href="https://github.com/bassmaelabassi/calculatrice" class="btn btn-dark" target="_blank">Voir le projet</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="images/gestion-stocks.jpg" class="card-img-top" alt="Gestion de Stock">
                    <div class="card-body">
                        <h5 class="card-title">Gestion de Stock</h5>
                        <p class="card-text">Un outil pour la gestion efficace des stocks.</p>
                        <a href="https://github.com/bassmaelabassi/-Gestionnaire-de-Stock-pour-une-Petite-Entreprise" class="btn btn-dark" target="_blank">Voir le projet</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="images/blog.jpg" class="card-img-top" alt="Blog">
                    <div class="card-body">
                        <h5 class="card-title">Blog</h5>
                        <p class="card-text">Un blog statique construit avec HTML et CSS.</p>
                        <a href="https://github.com/bassmaelabassi/un-Blog-Statique" class="btn btn-dark" target="_blank">Voir le projet</a>
                    </div>
                </div>
            </div>`;
        
        $("#projectList").append(newProjects);
        $(this).hide(); // إخفاء الزر بعد الضغط
    });

    // Validation formulaire
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        alert("Votre message a été envoyé avec succès !");
    });
});
