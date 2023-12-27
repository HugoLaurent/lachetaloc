function About() {
  return (
    <div className="container mx-auto w-2/3 my-5 p-8 border shadow-md">
      <h1 className="text-2xl font-semibold mb-6">
        Bienvenue sur Lache ta loc !
      </h1>

      <p>
        Libérez votre logement en toute sérénité ou trouvez votre prochaine
        location facilement avec Lache ta loc, la plateforme de mise en relation
        entre locataires sortants et chercheurs de logement.
      </p>
      <br />
      <p>
        Je suis Hugo Laurent, un passionné de développement web en formation
        chez O'clock, spécialisé dans React. Lache ta loc est le fruit de ma
        passion pour la création d'applications web modernes et réactives.
      </p>
      <br />
      <p>
        Lache ta loc a été créé dans le but de simplifier la recherche et la
        libération de logements. Notre plateforme facilite la mise en relation
        entre ceux qui cherchent un nouveau logement et ceux qui souhaitent
        libérer leur espace en toute simplicité.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-3">Notre mission :</h2>

      <p>
        Faciliter le processus de recherche et de libération de logements en
        offrant une plateforme conviviale et efficace.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Notre engagement envers la confidentialité :
      </h2>

      <p>
        Chez Lache ta loc, nous prenons la confidentialité de vos données au
        sérieux. Consultez notre{" "}
        <a href="/confidentialite" className="text-blue-500 underline">
          politique de confidentialité
        </a>{" "}
        pour en savoir plus sur la manière dont nous traitons vos informations
        personnelles.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Contact :</h2>

      <p>
        N'hésitez pas à me contacter pour discuter de projets passionnants ou
        pour toute question concernant le site. Vous pouvez me joindre par
        e-mail à{" "}
        <a
          href="mailto:contact@hugolaurent.com"
          className="text-blue-500 underline"
        >
          contact@hugolaurent.com
        </a>
        .
      </p>
    </div>
  );
}

export default About;
