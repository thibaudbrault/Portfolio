import { PlaywrightIcon, ReactIcon } from "@/lib";
import type { TExperiences } from "@/types";
import { Fragment, useMemo } from "react";
import { GraphqlIcon, PrismaIcon, ViteIcon } from "../../lib/icons";
import { Title } from "../projects";
import { TechBadge } from "../ui";

export const Experiences = () => {
  const experiences: TExperiences = useMemo(
    () => [
      {
        role: "Développeur full-stack JS",
        company: "Zénika",
        city: "Nantes",
        start: "Février 2023",
        end: "Septembre 2023",
        type: "Stage",
        missions: [
          {
            client: "FAQ - Zénika",
            details: [
              "Mis en place de tests e2e avec Playwright pour assurer la qualité et la stabilité du site.",
              "Ajout de nouvelles fonctionnalités, dont la création d'un statut de spécialiste pour la validation de questions et l'intégration de l'API Google Translate pour la traduction de contenu.",
              "Améliorer l'expérience de développement en migrant le projet de 'Create-React-App' vers 'Vite', ce qui a entraîné une augmentation significative de la rapidité et de l'efficacité.",
              "Effectuer la mise à jour de React et de React-Router vers les dernières versions, permettant ainsi de bénéficier des dernières avancées technologiques.",
              "Effectuer la mise à jour des dépendances Apollo GraphQL pour permettre l'utilisation des hooks de React ainsi que la gestion des requêtes GraphQL grâce à une seule dépendance ce qui permet de supprimer plusieurs autres.",
            ],
            stack: [
              {
                name: "React",
                icon: <ReactIcon />,
              },
              {
                name: "Playwright",
                icon: <PlaywrightIcon />,
              },
              {
                name: "Vite",
                icon: <ViteIcon />,
              },
              {
                name: "Prisma",
                icon: <PrismaIcon />,
              },
              {
                name: "Graphql",
                icon: <GraphqlIcon />,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  return (
    <section id="experiences" className="flex flex-col gap-12 mb-24">
      <Title text="Expériences" />
      <ul className="flex flex-col gap-3 items-start text-start w-5/6 mx-auto">
        {experiences.map((experience, i) => (
          <li key={i} className="flex flex-col gap-6">
            <div>
              <h4 className="font-bold text-yellow-600 text-2xl">
                {experience.role}
              </h4>
              <p>
                <b>{experience.company}</b>, {experience.city}
              </p>
              <p>
                {experience.type} de <b>{experience.start}</b> à{" "}
                <b>{experience.end}</b>
              </p>
            </div>
            <div className="flex gap-12">
              {experience.missions.map((mission, i) => (
                <Fragment key={i}>
                  <ul className="list-disc">
                    <li className="text-xl list-none text-yellow-600">
                      <b>{mission.client}</b>
                    </li>
                    {mission.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-6">
                    {mission.stack.map((tech, i) => (
                      <TechBadge tech={tech} index={i} />
                    ))}
                  </ul>
                </Fragment>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
