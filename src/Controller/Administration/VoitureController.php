<?php

namespace App\Controller\Administration;

use App\Entity\Marque;
use App\Entity\Voiture;
use App\Form\VoitureType;
use App\Repository\VoitureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/voiture')]
class VoitureController extends AbstractController
{
    #[Route('/', name: 'voiture_index', methods: ['GET'])]
    public function index(VoitureRepository $voitureRepository): Response
    {
        return $this->render('voiture/index.html.twig', [
            'voitures' => $voitureRepository->findAll(),
        ]);
    }

    // EXO

    // Je cree d'abord une route
    #[Route('/exo',name: 'exo')]
    //Ensuite je cree une instance et je gere les entités avec entity manager
    public function exo (EntityManagerInterface $entityManager):Response
    {

        $batMobile= new Marque();
        $batMobile->setNom("batMobile");
        // Ici je cree les instances
        $voiture = new Voiture();
        $voiture ->setNom("V1");

        $voiture2 = new Voiture();
        $voiture2 ->setNom("V2");

        $voiture3 = new Voiture();
        $voiture3 ->setNom("V3");
        // Je prepare l'enregistre
        $entityManager->persist($voiture);
        $entityManager->persist($voiture2);
        $entityManager->persist($voiture3);
        // Ici j'enregistre
        $entityManager->flush();
        return $this->redirectToRoute('voiture_index',[],Response::HTTP_SEE_OTHER);
    }



    #[Route('/new', name: 'voiture_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        // Dans le cadre d'un nouvel enregistrement
        // On instacie une entite( ici voiture)
        $voiture = new Voiture();


        // Ici on cree un formulaire via un Type(ici VoitureType) et le second parametre sera l'entite precedement creée
        $form = $this->createForm(VoitureType::class, $voiture);
        // on hydrate  notre formulaire et l'entite via les donnees qu'on aura tape
        $form->handleRequest($request);
//Ici on verifie que le formulaire est et validé
        if ($form->isSubmitted() && $form->isValid()) {
            //ici on prepare la requete a la base de donnee qui eura cree une entite
            $entityManager->persist($voiture);
            // ici on l'enregistre ce qu'on persisté
            $entityManager->flush();

            $this->addFlash('notice', 'la voiture est enregistre');
// Ici on redirige
            return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('voiture/new.html.twig', [
            'voiture' => $voiture,
            'form' => $form,
        ]);
    }

    #[Route('/suppressionListeVoiture','suppressionListeVoiture')]
    public function suppressionlisteVoiture( VoitureRepository $voitureRepository,EntityManagerInterface $entityManager):Response
    {
//
        $listeVoiture = $voitureRepository->findAll();
        $nbrVoiture = count($listeVoiture);
        $nbrSuppression = count($listeVoiture) < 3 ? $nbrVoiture : 3;

        for($i = $nbrVoiture; $i > $nbrVoiture-$nbrSuppression; $i--)
        {
            $entityManager->remove($listeVoiture[$i-1]);
        }

        $entityManager->flush();

        if(0 === $nbrSuppression) {
            $this->addFlash("notice", "Aucune voiture à supprimer");
        } else {
            $this->addFlash("notice", "Vous avez supprimé : $nbrSuppression voiture.s");
        }

        return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
    }


        #[Route('/suppressionListeVoitureAvecNotreRepo', name: 'suppressionListeVoitureAvecNotreRepo')]
    public function suppressionListeVoitureAvecNotreRepo(VoitureRepository $voitureRepository, EntityManagerInterface $entityManager) : Response
    {
        $listeVoiture = $voitureRepository->supprimeTroisVoiture();
        $nbrSuppression = count($listeVoiture);

        for($i = $nbrSuppression; $i > 0; $i--)
        {
            $entityManager->remove($listeVoiture[$i-1]);
        }

        $entityManager->flush();

        if(0 === $nbrSuppression) {
            $this->addFlash("notice", "Aucune voiture à supprimer");
        } else {
            $this->addFlash("notice", "Vous avez supprimé : $nbrSuppression voiture.s");
        }

        return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
    }





// Ici "'/{id}'" permet de creer une description unique pour chaque voiture par deduction
    #[Route('/{id}', name: 'voiture_show', methods: ['GET'])]
    public function show(Voiture $voiture): Response
    {
        return $this->render('voiture/show.html.twig', [
            'voiture' => $voiture,
        ]);
    }

    #[Route('/{id}/edit', name: 'voiture_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Voiture $voiture, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(VoitureType::class, $voiture);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('voiture/edit.html.twig', [
            'voiture' => $voiture,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'voiture_delete', methods: ['POST'])]
    public function delete(Request $request, Voiture $voiture, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $voiture->getId(), $request->request->get('_token'))) {
            $entityManager->remove($voiture);
            $entityManager->flush();
        }

        return $this->redirectToRoute('voiture_index', [], Response::HTTP_SEE_OTHER);
    }

}
